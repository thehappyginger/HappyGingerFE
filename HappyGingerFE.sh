#!/bin/bash

set -o errexit # Exit on error

cd ~/Projects/HappyGingerFE
git pull
yarn install
yarn run start -- --release
