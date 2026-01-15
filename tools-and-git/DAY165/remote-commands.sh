#!/usr/bin/env bash
# Connecting Local Repository to Remote GitHub Repo

# 1. Link remote repository
git remote add origin git@github.com:kushal-dev/web-development-journey.git

# 2. Verify remote URL
git remote -v

# 3. Rename default branch to main if needed
git branch -M main

# 4. Push all commits to remote with upstream tracking
git push -u origin main

# 5. Pull any changes committed from another machine
git pull origin main
