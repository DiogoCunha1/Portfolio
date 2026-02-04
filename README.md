# Portfolio - Diogo Cunha

Cybersecurity Specialist portfolio website built with React, featuring a neon cybersecurity theme with glassmorphism effects.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and Create React App
- **Cybersecurity Theme**: Neon green accents (#00ff41) with dark backgrounds
- **Glassmorphism Effects**: Modern UI with backdrop blur effects
- **Auto-Deployment**: GitHub Actions workflow for automatic deployment to GitHub Pages
- **SEO Optimized**: Comprehensive meta tags for social media sharing
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with skills and statistics
  - Professional experience timeline
  - Featured projects showcase
  - CTF platform profiles (HackTheBox, TryHackMe)
  - Write-ups with search and filter functionality
  - Certifications and achievements
  - Education background
  - Contact information

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/DiogoCunha1/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000/Portfolio`

## 🏗️ Build

```bash
# Create production build
npm run build
```

Build output will be in the `build/` directory.

## 🌐 Deployment

### Automatic Deployment (Recommended)

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Automatic Deployment:**
   - Every push to the `main` branch automatically triggers deployment
   - The workflow builds the React app and deploys to GitHub Pages
   - View workflow status in the "Actions" tab

3. **Manual Deployment:**
   - You can also trigger deployment manually from the Actions tab
   - Click on "Deploy to GitHub Pages" workflow
   - Click "Run workflow" button

### Manual Deployment (Legacy)

If you prefer manual deployment:

```bash
npm run deploy
```

This command builds the app and pushes it to the `gh-pages` branch.

## 📁 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── index.html              # HTML template with SEO meta tags
│   ├── write_ups/              # Write-up markdown files
│   └── ...                     # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── CTFPlatforms.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Writeups.jsx        # Enhanced with search/filter
│   │   └── ...
│   ├── hooks/                  # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── styles/                 # CSS modules
│   │   ├── variables.css       # Design system tokens
│   │   ├── utilities.css       # Utility classes
│   │   ├── animations.css      # Animation definitions
│   │   └── ...                 # Component styles
│   ├── App.jsx                 # Main app component
│   └── index.js                # Entry point
├── AGENTS.md                   # Developer agent instructions
├── DESIGN_SYSTEM.md            # Design system documentation
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

The portfolio uses a consistent design system with:

- **Colors**: Neon green primary (#00ff41), cyan accent (#64ffda), dark navy backgrounds
- **Typography**: System fonts with responsive sizing
- **Spacing**: 8px base unit with consistent scales
- **Animations**: Fade-in, slide-in, and glow effects
- **Glassmorphism**: Backdrop blur with semi-transparent backgrounds

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for complete documentation.

## ✨ Recent Enhancements

### GitHub Actions Auto-Deploy
- Automatic deployment on push to main branch
- Uses official GitHub Pages deployment action
- Workflow includes build optimization and artifact upload

### SEO Improvements
- Enhanced meta descriptions
- OpenGraph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- Proper favicon handling

### Write-ups Section
- Search functionality across titles, tags, and descriptions
- Platform-based filtering (TryHackMe, HackTheBox)
- Difficulty-based filtering with color coding
- Responsive grid layout with improved mobile experience

### UI/UX Enhancements
- Enhanced hover states across all sections
- Improved micro-interactions and animations
- Better spacing consistency
- Glassmorphism effects with backdrop blur
- Smooth transitions and shadow effects

## 🧪 Testing

```bash
# Run tests in watch mode
npm test

# Run tests in CI mode
CI=true npm test -- --watchAll=false
```

## 📝 Adding Write-ups

To add a new write-up:

1. Create a markdown file in `public/write_ups/[name]/`
2. Add entry to the `writeups` array in `src/components/Writeups.jsx`:

```javascript
{
  id: 2,
  title: 'Write-up Title',
  room: 'Room Name',
  platform: 'TryHackMe', // or 'HackTheBox'
  difficulty: 'Easy',    // 'Easy', 'Medium', or 'Hard'
  path: `${process.env.PUBLIC_URL}/write_ups/[folder]/[file].md`,
  cover: null,           // Optional: URL to cover image
  tags: ['Tag1', 'Tag2', 'Tag3'],
  summary: 'Brief description of the write-up.',
}
```

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: https://diogocunha1.github.io/Portfolio/
- **GitHub**: https://github.com/DiogoCunha1
- **TryHackMe**: https://tryhackme.com/p/HungerBalls
- **HackTheBox**: https://app.hackthebox.com/users/2122156

## 📧 Contact

For inquiries, please use the contact form on the portfolio website.

---

Built with ❤️ and React by Diogo Cunha
