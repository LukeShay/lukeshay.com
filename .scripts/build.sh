#!/bin/bash

set -euo pipefail

npm i -g pnpm

pnpm --version
pnpm install
pnpm run build
