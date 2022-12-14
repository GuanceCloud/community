#!/bin/bash

set -ex

yarn workspaces run build
yarn workspaces run export

mkdir -p .build/contribution-guide
cp -rf home/out/* .build
cp -rf guide/out/* .build/contribution-guide
