#!/usr/bin/env bash
# Practical Terminal Navigation & File Operations

# 1. Navigation
pwd                      # Print working directory
ls -la                   # List all files with permissions and file size
cd ~/Dev/WebDev          # Jump to project directory

# 2. File & Directory Creation
mkdir -p src/components  # Create nested folders in one shot
touch index.html style.css script.js

# 3. Viewing and Searching
cat package.json         # Print file contents
head -n 10 index.html    # View first 10 lines
grep -rn "TODO" .        # Find all occurrences of TODO across files recursively

# 4. Moving & Copying
cp style.css backup.css  # Duplicate file
mv backup.css temp/      # Move file into temp folder
