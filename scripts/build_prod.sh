#!/bin/bash

# Determine the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Running at: $SCRIPT_DIR"
# Build the project with the specified configuration and base href
ng build --configuration=production --base-href=https://zzergatstage.github.io/

# Remove the existing 'docs' directory, relative to the script location
rm -rf "$SCRIPT_DIR/../docs"

# Copy the built files to the 'docs' directory
cp -r "$SCRIPT_DIR/../dist/bru-cv/browser" "$SCRIPT_DIR/../docs"

# Copy the index.html to 404.html within the 'docs' directory
cp "$SCRIPT_DIR/../docs/index.html" "$SCRIPT_DIR/../docs/404.html"

# Command to run: npm run build:prod