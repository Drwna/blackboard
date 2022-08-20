#!/usr/bin/env sh

set -e

yarn build

git checkout gh-pages

rm -rf index.html assets

mv dist/* ./

rm -rf dist

git add .
git commit -m 'update'

git push