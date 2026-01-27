---
id: 1
title: "Pickle Rick"
platform: "TryHackMe"
difficulty: "Unknown"
date: "January 2026"
tags: ["Web", "RCE", "PrivEsc", "Linux"]
preview: "Assessment of the Pickle Rick target uncovered exposed credentials, command execution, and sudo misconfiguration, resulting in full compromise and retrieval of all three ingredients."
---

# Penetration Test Report
## Target: Pickle Rick (TryHackMe)

**Author:** [Your Name]
**Date:** [Engagement Date]
**Target IP:** 10.66.148.130
**Platform:** TryHackMe
**Assessment Type:** Black-box Web & System Penetration Test

---

## Executive Summary

The objective of this assessment was to evaluate the security posture of the target machine "Pickle Rick" and retrieve three secret ingredients stored on the system.

The test identified multiple security weaknesses, including exposed sensitive information in `robots.txt`, weak authentication controls, arbitrary command execution in a web panel, and misconfigured sudo permissions. These issues allowed full system compromise and privilege escalation to root.

**Overall Risk Level:** High

---

## Scope & Objectives

### Scope
- Target Host: `10.66.148.130`
- Services in scope:
  - SSH (22)
  - HTTP (80)

### Objectives
- Identify vulnerabilities
- Gain remote code execution
- Escalate privileges to root
- Retrieve three secret ingredient files

---

## Phase 1: Reconnaissance

### Host Discovery

```bash
ping 10.66.148.130
```

### Port Scanning

```bash
nmap -sC -sV 10.66.148.130
```

**Open Services:**

| Port | Service | Version |
|------|----------|---------|
| 22 | SSH | OpenSSH 8.2p1 |
| 80 | HTTP | Apache 2.4.41 |

**Evidence:**

![Nmap Scan](/writeups/pickle-rick/pickle_rick_page_1.png)

---

## Phase 2: Web Enumeration

![Website](/writeups/pickle-rick/pickle_rick_page_1.png)

Source code inspection revealed:

```
Username: R1ckRul3s
```

![Source Code](/writeups/pickle-rick/pickle_rick_page_2.png)

---

## Phase 3: Directory Enumeration

```bash
gobuster dir -u http://10.66.148.130 -w /usr/share/wordlists/dirb/common.txt
```

Discovered:

- /login.php
- /robots.txt
- /assets/

![Gobuster](/writeups/pickle-rick/pickle_rick_page_2.png)

---

## Phase 4: Sensitive File Disclosure

robots.txt contained:

```
Wubbalubbadubdub
```

![robots](/writeups/pickle-rick/pickle_rick_page_3.png)

---

## Phase 5: Authentication

Login successful using:

```
Username: R1ckRul3s
Password: Wubbalubbadubdub
```

![Login](/writeups/pickle-rick/pickle_rick_page_3.png)

---

## Phase 6: Remote Code Execution

Command execution confirmed:

![Command Execution](/writeups/pickle-rick/pickle_rick_page_4.png)

Reverse shell obtained:

![Reverse Shell](/writeups/pickle-rick/pickle_rick_page_4.png)

---

## Phase 7: Post Exploitation

First ingredient:

```
mr. meeseek hair
```

![First Ingredient](/writeups/pickle-rick/pickle_rick_page_4.png)

Clue file:

```
Look around the file system for the other ingredient.
```

![Clue](/writeups/pickle-rick/pickle_rick_page_5.png)

Second ingredient:

```
1 jerry tear
```

![Second Ingredient](/writeups/pickle-rick/pickle_rick_page_5.png)

---

## Phase 8: Privilege Escalation

Sudo misconfiguration allowed root:

```
(ALL) NOPASSWD: ALL
```

![Root](/writeups/pickle-rick/pickle_rick_page_5.png)

---

## Phase 9: Final Ingredient

```
fleeb juice
```

![Third Ingredient](/writeups/pickle-rick/pickle_rick_page_5.png)

---

## Findings Summary

| ID | Vulnerability | Severity |
|----|---------------|----------|
| F-01 | Sensitive Data in robots.txt | Medium |
| F-02 | Hardcoded Credentials | High |
| F-03 | Arbitrary Command Execution | Critical |
| F-04 | Misconfigured Sudo | Critical |

---

## Proof of Compromise

| Ingredient | Value |
|------------|-------|
| 1st | mr. meeseek hair |
| 2nd | 1 jerry tear |
| 3rd | fleeb juice |

---

## Conclusion

Full system compromise achieved via exposed credentials, command execution, and privilege escalation.

**End of Report**
