# Adding Write-ups Guide

## How to Add a New Write-up

1. Open `src/components/Writeups.jsx`
2. Add a new object to the `writeups` array:

```javascript
{
  id: 1,
  title: 'Machine/Room Name',
  platform: 'HackTheBox', // or 'TryHackMe' or 'CTF Name'
  platformIcon: <SiHackthebox />, // or <SiTryhackme /> or custom icon
  difficulty: 'Medium', // Easy, Medium, Hard
  difficultyColor: '#f59e0b', // Easy: #22c55e, Medium: #f59e0b, Hard: #ef4444
  date: 'January 2026',
  tags: ['Linux', 'Web', 'PrivEsc', 'SQLi'], // Relevant tags
  preview: 'Brief description of the challenge and approach...',
  link: '/writeups/machine-name', // or external link
  completed: true
}
```

## Example

```javascript
const writeups = [
  {
    id: 1,
    title: 'Jerry',
    platform: 'HackTheBox',
    platformIcon: <SiHackthebox />,
    difficulty: 'Easy',
    difficultyColor: '#22c55e',
    date: 'January 2026',
    tags: ['Windows', 'Web', 'Apache Tomcat'],
    preview: 'Jerry is an easy Windows machine featuring an Apache Tomcat server with default credentials. The path to root involves deploying a malicious WAR file...',
    link: 'https://medium.com/@hungerballs/htb-jerry-writeup',
    completed: true
  },
  {
    id: 2,
    title: 'Blue',
    platform: 'TryHackMe',
    platformIcon: <SiTryhackme />,
    difficulty: 'Easy',
    difficultyColor: '#22c55e',
    date: 'December 2025',
    tags: ['Windows', 'EternalBlue', 'MS17-010'],
    preview: 'This room focuses on exploiting the infamous EternalBlue vulnerability (MS17-010) on a Windows machine. It covers reconnaissance, exploitation, and post-exploitation...',
    link: 'https://medium.com/@hungerballs/thm-blue-writeup',
    completed: true
  }
];
```

## Difficulty Colors

- **Easy**: `#22c55e` (Green)
- **Medium**: `#f59e0b` (Orange)
- **Hard**: `#ef4444` (Red)

## Platform Icons

Import the necessary icons at the top of the file:

```javascript
import { SiHackthebox, SiTryhackme } from 'react-icons/si';
```

For custom CTF events, you can use generic icons from `react-icons/fa`:

```javascript
import { FaFlag, FaLock, FaTrophy } from 'react-icons/fa';
```

## Tags Guidelines

Use relevant and descriptive tags:

- **Operating Systems**: Linux, Windows, BSD, Unix
- **Categories**: Web, Binary, Forensics, Crypto, Reverse Engineering, Pwn
- **Technologies**: Apache, Nginx, MySQL, PostgreSQL, Docker, Kubernetes
- **Techniques**: PrivEsc, SQLi, XSS, SSRF, RCE, LFI, RFI, Buffer Overflow
- **Tools**: Metasploit, Nmap, Burp Suite, Wireshark, etc.

## Link Options

1. **External Blog Post**: Full URL to Medium, personal blog, etc.
   ```javascript
   link: 'https://medium.com/@hungerballs/writeup-title'
   ```

2. **Internal Route** (if you have a routing system):
   ```javascript
   link: '/writeups/machine-name'
   ```

3. **GitHub Gist**:
   ```javascript
   link: 'https://gist.github.com/hungerballs/abc123'
   ```

## Preview Text

Keep the preview concise (2-3 sentences) and include:
- What the challenge involves
- Main vulnerability or technique
- Brief approach overview

Example:
```
"This machine features a vulnerable web application running PHP 5.6. 
The initial foothold is gained through a file upload vulnerability, 
followed by kernel exploitation for privilege escalation."
```

## Checklist Before Adding

- [ ] Write-up is complete and published
- [ ] Link is accessible and correct
- [ ] Tags are relevant and accurate
- [ ] Difficulty matches the actual challenge
- [ ] Preview text is informative
- [ ] ID is unique and sequential
- [ ] Date format is consistent

## Testing

After adding a write-up:

1. Save the file
2. Check the browser for any errors
3. Verify the card displays correctly
4. Test the link opens correctly
5. Check responsive design on mobile

## Notes

- Keep the `writeups` array sorted by date (newest first) or by ID
- Ensure all fields are filled correctly
- Test links before publishing
- Update the guide if you add new features or fields
