---
id: 0
title: "Write-up Title"
platform: "TryHackMe"
difficulty: "Easy"
date: "Month Year"
tags: ["Web", "Linux"]
preview: "Short 2-3 sentence summary for the card."
---

# Write-up Title
## Target: Machine Name (Platform)

**Author:** Your Name
**Date:** Engagement Date
**Target IP:** 0.0.0.0
**Platform:** Platform Name
**Assessment Type:** Black-box Web & System Penetration Test

---

## Executive Summary

Summarize the objective, main findings, and impact.

---

## Scope & Objectives

### Scope
- Target Host: `0.0.0.0`
- Services in scope:
  - SSH (22)
  - HTTP (80)

### Objectives
- Identify vulnerabilities
- Gain remote code execution
- Escalate privileges to root
- Retrieve flags or evidence

---

## Phase 1: Reconnaissance

```bash
ping 0.0.0.0
```

```bash
nmap -sC -sV 0.0.0.0
```

---

## Findings Summary

| ID | Vulnerability | Severity |
|----|---------------|----------|
| F-01 | Example Finding | Medium |

---

## Proof of Compromise

| Artifact | Value |
|----------|-------|
| Flag 1 | example |

---

## Conclusion

Conclude with the final outcome and remediation themes.
