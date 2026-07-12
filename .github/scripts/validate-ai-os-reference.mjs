import fs from 'node:fs';

const referencePath = process.argv[2] ?? 'AI_OS_REFERENCE.md';
const projectRulesPath = process.argv[3] ?? 'PROJECT_RULES.md';

if (!fs.existsSync(referencePath)) {
  throw new Error(`${referencePath} is required.`);
}

const text = fs.readFileSync(referencePath, 'utf8');
const required = [
  'yurikuchumov-ux/ai-operating-system',
  'AI_OS.md',
  projectRulesPath,
  'Mode:'
];

for (const value of required) {
  if (!text.includes(value)) {
    throw new Error(`Missing required reference value: ${value}`);
  }
}

const mode = text.match(/- Mode: `([^`]+)`/)?.[1];
const pinned = text.match(/- Pinned commit: `([^`]+)`/)?.[1];

if (!['tracking', 'pinned'].includes(mode)) {
  throw new Error(`Invalid inheritance mode: ${mode ?? 'missing'}`);
}
if (mode === 'tracking' && pinned !== 'none') {
  throw new Error('Tracking mode requires pinned commit to be `none`.');
}
if (mode === 'pinned' && !/^[0-9a-f]{40}$/.test(pinned ?? '')) {
  throw new Error('Pinned mode requires a 40-character lowercase commit SHA.');
}
if (!fs.existsSync(projectRulesPath)) {
  throw new Error(`${projectRulesPath} is required for project-specific rules.`);
}
if (fs.existsSync('AI_OS.md')) {
  throw new Error('A downstream repository must reference the canonical AI OS instead of storing a local AI_OS.md.');
}

console.log(JSON.stringify({ mode, pinned: mode === 'pinned' ? pinned : null }));
