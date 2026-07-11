import fs from 'node:fs';

const path = process.argv[2] ?? 'AI_OS_REFERENCE.md';
const text = fs.readFileSync(path, 'utf8');

const required = [
  'yurikuchumov-ux/ai-operating-system',
  'AI_OS.md',
  'PROJECT_RULES.md',
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

if (!fs.existsSync('PROJECT_RULES.md')) {
  throw new Error('PROJECT_RULES.md is required for project-specific rules.');
}

console.log(`AI OS reference is valid (${mode}${mode === 'pinned' ? ` at ${pinned}` : ''}).`);
