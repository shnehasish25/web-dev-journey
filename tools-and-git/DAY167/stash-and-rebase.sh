#!/usr/bin/env bash
# Advanced Git Utilities

# --- 1. STASHING WORK-IN-PROGRESS ---
# You are halfway through coding a feature when an urgent bug arrives on main:
git stash save "WIP: halfway through Swiggy cart animation"

# Clean working directory! Switch to main and fix bug:
git switch main
# ... fix bug, commit, and push ...

# Switch back to your feature and bring back your uncommitted changes:
git switch feature-cart
git stash pop

# --- 2. REBASING FOR A CLEAN LINEAR HISTORY ---
git switch feature-cart
git fetch origin
git rebase origin/main

# --- 3. CHERRY-PICKING A SPECIFIC FIX ---
# Apply bug fix commit d7a1b4 from branch 'hotfix' directly to current branch:
git cherry-pick d7a1b4
