#!/usr/bin/env sh
# Stop hook: checks if modified .ts/.tsx files in any initialized site have TypeScript errors before finishing.

python3 -c '
import json, os, shutil, subprocess, sys

try:
    payload = json.load(sys.stdin)
except Exception:
    print(json.dumps({"decision": "stop"}))
    sys.exit(0)

if payload.get("continuationActive", False) or payload.get("terminationReason") != "NO_TOOL_CALL":
    print(json.dumps({"decision": "stop"}))
    sys.exit(0)

cwd = payload.get("cwd", "")
if not cwd or not shutil.which("npx"):
    print(json.dumps({"decision": "stop"}))
    sys.exit(0)

sites_dir = os.path.join(cwd, "sites")
if os.path.isdir(sites_dir):
    for site in os.listdir(sites_dir):
        site_path = os.path.join(sites_dir, site)
        if os.path.isfile(os.path.join(site_path, "tsconfig.json")) and os.path.isdir(os.path.join(site_path, "node_modules")):
            res = subprocess.run(["npx", "tsc", "--noEmit"], cwd=site_path, capture_output=True, text=True)
            if res.returncode != 0:
                print(json.dumps({
                    "decision": "continue",
                    "reason": f"TypeScript check failed in sites/{site}. Please fix type errors (`npx tsc --noEmit`) before finishing."
                }))
                sys.exit(0)

print(json.dumps({"decision": "stop"}))
'
