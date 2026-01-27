# Write-ups (Markdown)

Add a folder per write-up under `public/writeups/`, then place a unique markdown
file inside that folder. Reference the markdown file path in `src/data/writeups.js`.

Example structure:

```
public/writeups/pickle-rick/pickle-rick.md
public/writeups/pickle-rick/pickle_rick_page_1.png
```

Template:

---
id: 1
title: "Machine Name"
platform: "TryHackMe"
difficulty: "Medium"
date: "January 2026"
tags: ["Linux", "Web", "PrivEsc"]
preview: "Short 2-3 sentence summary for the card."
link: "https://tryhackme.com/room/your-room-name" # optional
---

# Machine Name

Write your full markdown write-up here.
