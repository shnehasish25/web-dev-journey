#!/usr/bin/env bash
# Feature Branch Lifecycle

# 1. Make sure main is clean and up to date
git switch main

# 2. Create and switch to new feature branch
git switch -c feature-dark-mode

# 3. Work on changes, stage, and commit
echo "/* dark mode styles */" >> style.css
git add style.css
git commit -m "Add dark mode variable overrides"

# 4. Switch back to main and merge feature
git switch main
git merge feature-dark-mode

# 5. Delete merged feature branch to keep repository tidy
git branch -d feature-dark-mode
