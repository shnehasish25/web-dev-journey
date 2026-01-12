#!/usr/bin/env bash
# Common Git Undo Scenarios

# 1. Unstage a file you added by mistake
git restore --staged unwanted-file.js

# 2. Discard local changes to a file and restore previous commit version
git restore modified-file.js

# 3. Amend the most recent commit (e.g. fix typo in commit message)
git commit --amend -m "Corrected commit message"

# 4. Inspect differences between working directory and last commit
git diff
