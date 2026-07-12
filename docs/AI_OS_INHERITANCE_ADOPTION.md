# Adopt AI OS inheritance

A downstream repository inherits AI Operating System by reference. Do not copy `AI_OS.md`.

## Files to add

Copy these template files into the downstream repository:

- `templates/AI_OS_REFERENCE.md` → `AI_OS_REFERENCE.md`;
- `templates/PROJECT_RULES.md` → `PROJECT_RULES.md`;
- `templates/workflows/ai-os-inheritance.yml` → `.github/workflows/ai-os-inheritance.yml`.

Before committing the caller workflow, replace `REPLACE_WITH_IMMUTABLE_COMMIT_SHA` with a reviewed full 40-character commit SHA from `yurikuchumov-ux/ai-development-studio-template`. Do not use `main`, another branch, or a mutable tag.

## Choose an inheritance mode

Use `tracking` for projects that should resolve the current `main` revision of AI OS at validation time. Every run records the exact resolved canonical SHA in the job log and step summary.

Use `pinned` for controlled releases that require a stable constitution revision. Set `Pinned commit` to a full 40-character commit SHA from `yurikuchumov-ux/ai-operating-system`.

## Project rules

Keep only project-specific additions in `PROJECT_RULES.md`. Do not paste the global constitution into the project repository. Validation fails if a downstream repository contains a root-level `AI_OS.md`.

## Validation behavior

The reusable workflow:

- checks required reference fields;
- validates tracking and pinned modes;
- resolves tracking mode to an exact canonical commit SHA;
- verifies that the resolved revision contains `AI_OS.md`;
- records the verified SHA in the workflow summary;
- reports a pinned revision that differs from current `main` as informational only;
- verifies that the local project-rules file exists;
- rejects a duplicated root-level `AI_OS.md`;
- executes no validator downloaded from a mutable branch;
- never modifies files or merges a pull request.

## Update process

For tracking mode, review material AI OS changes through the normal project process when they affect current work. The exact SHA recorded by each run provides an audit trail.

For pinned mode, update the SHA through a dedicated Issue, branch, Draft PR, checks, and independent review.

Updating the reusable workflow pin is also a dependency update and must use the same reviewed PR process.

## Precedence

Unless a higher-level legal or safety rule applies, the order is:

1. AI Operating System;
2. project-specific rules;
3. task contract and Issue acceptance criteria;
4. transient chat instructions.
