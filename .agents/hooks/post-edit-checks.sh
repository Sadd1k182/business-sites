#!/usr/bin/env sh
# PostToolUse hook for edit_file / write_file: auto-formats edited TypeScript/TSX/CSS/JSON files if prettier is available.

python3 -c '
import json, shutil, subprocess, sys

try:
    payload = json.load(sys.stdin)
except Exception:
    print("{}")
    sys.exit(0)

path = payload.get("toolCall", {}).get("args", {}).get("Path", "")
if path.endswith((".ts", ".tsx", ".css", ".json")) and shutil.which("prettier"):
    subprocess.run(["prettier", "--write", path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

print("{}")
'
