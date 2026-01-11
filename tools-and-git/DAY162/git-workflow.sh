#!/usr/bin/env bash
# Basic Local Git Setup & First Commit

# 1. Global identity configuration
git config --global user.name "Kushal Sharma"
git config --global user.email "kushal.codes@gmail.com"
git config --global init.defaultBranch main

# 2. Initialize a repository in current folder
git init

# 3. Check status
git status

# 4. Stage all new files
git add .

# 5. Commit snapshot to local history
git commit -m "Initial commit: Set up project structure"
