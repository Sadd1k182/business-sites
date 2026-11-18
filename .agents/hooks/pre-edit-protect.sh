#!/usr/bin/env sh
# PreToolUse hook for edit_file / write_file: prevents manual edits to generated Next.js files or lockfiles.

python3 -c '
import json, sys

try:
    payload = json.load(sys.stdin)
except Exception:
    print(json.dumps({"decision": "allow"}))
    sys.exit(0)

path = payload.get("toolCall", {}).get("args", {}).get("Path", "")

protected_suffixes = (
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "next-env.d.ts",
)

if "/.next/" in path or any(path.endswith(s) for s in protected_suffixes):
    print(json.dumps({
        "decision": "deny",
        "reason": "Protected generated or lock file. Run npm/pnpm install or next build instead of editing manually."
    }))
    sys.exit(0)

print(json.dumps({"decision": "allow"}))
'
