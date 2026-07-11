# AI Operating System Reference

This project inherits its global engineering constitution from AI Operating System.

## Canonical source

- Repository: `yurikuchumov-ux/ai-operating-system`
- File: `AI_OS.md`
- Canonical URL: `https://github.com/yurikuchumov-ux/ai-operating-system/blob/main/AI_OS.md`

## Inheritance mode

Choose exactly one mode.

- Mode: `tracking`
- Pinned commit: `none`

For reproducible releases, replace the values above with:

- Mode: `pinned`
- Pinned commit: `<40-character commit SHA>`

## Local project rules

Project-specific additions are stored in `PROJECT_RULES.md`.

Local rules may add domain, product, privacy, safety, and operational requirements. They may not silently weaken or override AI OS. A genuine conflict must be documented and resolved through an explicit architectural decision.

## Precedence

Unless a higher-level safety or legal rule applies:

1. AI Operating System;
2. project-specific rules;
3. task contract and Issue acceptance criteria;
4. transient chat instructions.

## Validation

The repository must run the AI OS inheritance validation workflow. The check verifies the canonical reference, inheritance mode, pinned SHA syntax and reachability, and the existence of the local rules file. It reports stale pinned revisions but never rewrites files or merges changes automatically.
