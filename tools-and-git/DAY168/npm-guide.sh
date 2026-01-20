#!/usr/bin/env bash
# Common NPM Commands Guide

# Initialize a new Node project with default values
npm init -y

# Install a production dependency
npm install date-fns

# Install development-only tools
npm install -D prettier eslint

# Install dependencies listed in an existing package.json
npm install

# Run custom script defined in package.json
npm run dev

# Execute a package directly without installing it globally
npx serve .
