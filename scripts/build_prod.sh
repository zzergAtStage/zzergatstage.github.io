#!/bin/bash

ng build --configuration=production --base-href=https://zzergatstage.github.io/
rm -rf ../docs
cp -r ../dist/bru-cv/browser ../docs
cp ../docs/index.html ../docs/404.html