#!/bin/bash

set -euo pipefail

curl -fsSL https://bun.sh/install | bash
export PATH="/opt/buildhome/.bun/bin:$PATH"

bun --version
bun install
bun run build
