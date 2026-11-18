#!/usr/bin/env sh
# PreToolUse hook for run_command: blocks destructive shell/git commands and direct commits/pushes to main.

python3 -c '
import json, os, re, subprocess, sys

try:
    payload = json.load(sys.stdin)
except Exception:
    print(json.dumps({"decision": "allow"}))
    sys.exit(0)

cmd = payload.get("toolCall", {}).get("args", {}).get("CommandLine", "")
cwd = payload.get("cwd", "") or "/Users/oleg_n/Projects/business-sites"

blocked_patterns = [
    (r"\brm\s+-[a-zA-Z]*r[a-zA-Z]*f\s+(/|~|\$HOME|\.\.)", "Blocked destructive rm -rf outside project folder."),
    (r"\bgit\s+push\s+.*(--force|-f)\b", "Force-pushing is blocked by safety hook. Ask the user if needed."),
    (r"\bgit\s+reset\s+--hard\b", "git reset --hard is blocked to prevent losing uncommitted work."),
    (r"\bgit\s+clean\s+-[a-zA-Z]*f", "git clean -f is blocked to prevent deleting untracked files."),
    (r"\bgit\s+push\s+origin\s+main\b", "Direct pushes to main are blocked by guardrail. Push a feature branch (feat/... or fix/...) and open a PR."),
]

for pattern, reason in blocked_patterns:
    if re.search(pattern, cmd):
        print(json.dumps({"decision": "deny", "reason": reason}))
        sys.exit(0)

# Block git commit if currently on main branch (unless checkout -b is in the same command)
if re.search(r"\bgit\s+commit\b", cmd) and not re.search(r"\bgit\s+(checkout\s+-b|switch\s+-c)\b", cmd):
    try:
        branch = subprocess.check_output(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            cwd="/Users/oleg_n/Projects/business-sites",
            stderr=subprocess.DEVNULL,
            text=True
        ).strip()
        if branch == "main":
            print(json.dumps({
                "decision": "deny",
                "reason": "Direct commits on `main` are blocked by guardrail. Create a feature branch first (`git checkout -b feat/...`)."
            }))
            sys.exit(0)
    except Exception:
        pass

print(json.dumps({"decision": "allow"}))
'
