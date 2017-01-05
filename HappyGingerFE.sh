#!/bin/bash

set -o errexit # Exit on error

cd ~/Projects/HappyGingerFE
git fetch --all
git reset --hard origin/master
npm install
yarn install
yarn run build -- --release
yarn run start -- --release
