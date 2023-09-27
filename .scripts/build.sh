#!/bin/bash

set -euo pipefail

pnpm --version
pnpm install
pnpm run build
