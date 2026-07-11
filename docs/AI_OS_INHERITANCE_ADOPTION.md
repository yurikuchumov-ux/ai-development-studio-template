# Adopt AI OS inheritance

A downstream repository inherits AI Operating System by reference. Do not copy `AI_OS.md`.

## Files to add

Copy these template files into the downstream repository:

- `templates/AI_OS_REFERENCE.md` → `AI_OS_REFERENCE.md`;
- `templates/PROJECT_RULES.md` → `PROJECT_RULES.md`;
- `templates/workflows/ai-os-inheritance.yml` → `.github/workflows/ai-os-inheritance.yml`.

## Choose an inheritance mode

Use `tracking` for projects that should follow the current `main` revision of AI OS.

Use `pinned` for controlled releases that require reproducibility. Set `Pinned commit` to a full 40-character commit SHA from `yurikuchumov-ux/ai-operating-system`.

## Project rules

Keep only project-specific additions in `PROJECT_RULES.md`. Do not paste the global constitution into the project repository.

## Validation behavior

The reusable workflow:

- checks required reference fields;
- checks canonical source availability;
- validates tracking and pinned modes;
- verifies that a pinned revision contains `AI_OS.md`;
- warns when a pinned revision differs from current `main`;
- verifies that the local project-rules file exists;
- never modifies files or merges a pull request.

## Update process

For tracking mode, review material AI OS changes through the normal project process when they affect current work.

For pinned mode, update the SHA through a dedicated Issue, branch, Draft PR, checks, and independent review.

## Precedence

Unless a higher-level legal or safety rule applies, the order is:

1. AI Operating System;
2. project-specific rules;
3. task contract and Issue acceptance criteria;
4. transient chat instructions.
