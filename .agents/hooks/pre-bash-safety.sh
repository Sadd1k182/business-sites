#!/usr/bin/env sh
# PreToolUse hook for run_command: blocks destructive shell & git commands.

python3 -c '
import json, re, sys

try:
    payload = json.load(sys.stdin)
except Exception:
    print(json.dumps({"decision": "allow"}))
    sys.exit(0)

cmd = payload.get("toolCall", {}).get("args", {}).get("CommandLine", "")

blocked_patterns = [
    (r"\brm\s+-[a-zA-Z]*r[a-zA-Z]*f\s+(/|~|\$HOME|\.\.)", "Blocked destructive rm -rf outside project folder."),
    (r"\bgit\s+push\s+.*(--force|-f)\b", "Force-pushing is blocked by safety hook. Ask the user if needed."),
    (r"\bgit\s+reset\s+--hard\b", "git reset --hard is blocked to prevent losing uncommitted work."),
    (r"\bgit\s+clean\s+-[a-zA-Z]*f", "git clean -f is blocked to prevent deleting untracked files."),
]

for pattern, reason in blocked_patterns:
    if re.search(pattern, cmd):
        print(json.dumps({"decision": "deny", "reason": reason}))
        sys.exit(0)

print(json.dumps({"decision": "allow"}))
'
