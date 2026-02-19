# Deployment Guide - Gard Buket Website

## GitHub Pages Deployment

This website is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. **Push to GitHub** (if not already done):
   ```bash
   cd /Users/fusionbeat/flower\ shop/flower-website
   git add .
   git commit -m "Initial commit - Gard Buket website"
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: https://github.com/yxm011/flower-website
   - Click on **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - Save the settings

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Wait 2-3 minutes for the first deployment
   - Your site will be live at: `https://yxm011.github.io/flower-website/`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

Then push the changes to GitHub.

### Updating the Website

Every time you push changes to the `main` branch, the website will automatically rebuild and redeploy.

```bash
git add .
git commit -m "Update website"
git push
```

### Local Development

To run the website locally:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

To build the site locally:

```bash
npm run build
npm run preview
```

## Custom Domain (Optional)

To use a custom domain like `gardbuket.az`:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

- If the site doesn't load, check the GitHub Actions tab for build errors
- Make sure GitHub Pages is enabled in repository settings
- Verify the base path in `vite.config.js` matches your repository name
