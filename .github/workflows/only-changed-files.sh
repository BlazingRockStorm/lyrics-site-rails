#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
git diff-tree -r --no-commit-id --name-only $BRANCH@\{u\} HEAD | xargs ls -1 2>/dev/null | grep '\.rb$' | xargs bundle exec rubocop --force-exclusion'
