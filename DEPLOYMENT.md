# GitHub Pages Deployment Setup

This document explains how to enable automatic deployment of your portfolio to GitHub Pages using the GitHub Actions workflow that has been configured in this PR.

## Current Setup

The repository now includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically build and deploy your portfolio whenever you push to the `main` branch.

## Required Steps to Enable Deployment

### Step 1: Configure GitHub Pages Settings

1. **Navigate to Repository Settings:**
   - Go to your repository: https://github.com/DiogoCunha1/Portfolio
   - Click on **Settings** (top menu)

2. **Enable GitHub Pages:**
   - In the left sidebar, click on **Pages**
   - Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - This tells GitHub to use the Actions workflow for deployment
   - The setting should look like the reference image provided in the issue

3. **Save:**
   - GitHub will automatically save this setting
   - You should see a message confirming GitHub Pages is enabled

### Step 2: Merge This Pull Request

Once the GitHub Pages source is set to "GitHub Actions":

1. Review and approve this pull request
2. Merge it into the `main` branch
3. The workflow will automatically trigger and deploy your site

### Step 3: Verify Deployment

After merging:

1. Go to the **Actions** tab in your repository
2. You should see a workflow run for "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at: https://diogocunha1.github.io/Portfolio/

## How It Works

### Automatic Deployment

The workflow (`.github/workflows/deploy.yml`) runs automatically when:
- Code is pushed to the `main` branch
- You manually trigger it from the Actions tab

### Workflow Steps

1. **Checkout:** Gets the latest code from the repository
2. **Setup Node.js:** Installs Node.js 18 with npm caching
3. **Install Dependencies:** Runs `npm ci` to install packages
4. **Build:** Creates optimized production build with `npm run build`
5. **Upload Artifact:** Packages the build for deployment
6. **Deploy:** Publishes to GitHub Pages

### No More Manual Deployment

You no longer need to run `npm run deploy` manually. Every time you:
- Merge a PR to main
- Push directly to main
- Click "Run workflow" in Actions tab

...your site automatically rebuilds and redeploys.

## Manual Deployment (Fallback)

If you ever need to deploy manually, the legacy `npm run deploy` command still works:

```bash
npm run deploy
```

This will build and push to the `gh-pages` branch.

## Troubleshooting

### Workflow Fails

If the deployment workflow fails:

1. Check the Actions tab for error logs
2. Common issues:
   - Build errors (check your React code)
   - Missing dependencies (ensure package.json is up to date)
   - Permission issues (check repository settings)

### Site Not Updating

If your site doesn't update after deployment:

1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 1-2 minutes for GitHub's CDN to update
3. Check the Actions tab to confirm deployment succeeded

### Pages Settings Not Available

If you don't see "GitHub Actions" as an option:

1. Ensure GitHub Pages is enabled for your repository
2. Check that your repository is public (or you have GitHub Pro)
3. Try refreshing the settings page

## Additional Notes

### Environment Variables

The workflow sets `CI=false` during build to prevent warnings from being treated as errors in production.

### Caching

npm dependencies are cached between workflow runs for faster builds.

### Permissions

The workflow uses these permissions:
- `contents: read` - To read repository code
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For secure deployment

### Workflow File Location

The workflow is located at:
```
.github/workflows/deploy.yml
```

You can edit it if you need to customize the deployment process.

## Questions?

If you encounter any issues setting up GitHub Pages or with the automatic deployment:

1. Check the GitHub Pages documentation: https://docs.github.com/en/pages
2. Review the Actions workflow logs in your repository
3. Ensure all settings match the instructions above

---

**After completing these steps, your portfolio will automatically deploy whenever you update the main branch!**
