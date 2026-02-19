# Vercel Deployment Guide - Gard Buket Website

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Git Repository**:
   - Click "Import Project"
   - Select "Import Git Repository"
   - Enter: `https://github.com/yxm011/flower-website`
   - Click "Continue"

3. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - Click "Deploy"

4. **Wait for Deployment**:
   - Vercel will build and deploy automatically (1-2 minutes)
   - You'll get a URL like: `https://flower-website-xxx.vercel.app`

5. **Done!** Your site is live on Vercel ✅

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd /Users/fusionbeat/flower\ shop/flower-website

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? flower-website
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Custom Domain (Optional)

To use a custom domain like `gardbuket.az`:

1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update your domain's DNS settings as instructed by Vercel

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add variables (e.g., API keys)
3. Redeploy the project

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Production**: Pushes to `main` branch
- **Preview**: Pushes to other branches or pull requests

## Vercel vs GitHub Pages

Both are configured to work:

- **Vercel**: Better performance, custom domains, automatic HTTPS
  - URL: `https://flower-website-xxx.vercel.app`
  
- **GitHub Pages**: Free, simple, integrated with GitHub
  - URL: `https://yxm011.github.io/flower-website/`

## Configuration Files

- `vercel.json` - Vercel configuration for SPA routing
- `vite.config.js` - Automatically detects Vercel environment

## Troubleshooting

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Routing Issues
- The `vercel.json` file handles SPA routing
- All routes redirect to `index.html`

### Updates Not Showing
- Clear browser cache
- Check deployment status in Vercel Dashboard
- Verify the correct branch is deployed

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
