# Vercel Deployment Guide

## Quick Update (If Already Connected)

Your portfolio is automatically deployed to Vercel whenever you push to GitHub!

```bash
git add .
git commit -m "Your changes"
git push
```

That's it! Vercel will automatically:
1. Detect the push to main branch
2. Build your React app
3. Deploy to production
4. Update your live site (usually within 2 minutes)

## First Time Setup

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Portfolio" from your repositories
   - Click "Import"

3. **Configure (Auto-detected)**
   - Framework: Create React App ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `build` ✓
   - Click "Deploy"

4. **Done!**
   - Your site will be live at: `https://your-project.vercel.app`
   - Future pushes to GitHub will auto-deploy

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd portfolio
   vercel
   ```

4. **Follow Prompts**
   - Set up and deploy: Yes
   - Which scope: [Your account]
   - Link to existing project: No
   - Project name: portfolio
   - Directory: ./
   - Override settings: No

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Checking Deployment Status

### Via Dashboard
1. Go to https://vercel.com
2. Click on your project
3. See deployment status and logs

### Via CLI
```bash
vercel ls
```

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (5-30 minutes)

## Environment Variables (If Needed)

If you add API keys or secrets later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy (automatic on next push)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

### Changes Not Showing
- Check if deployment completed successfully
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for CDN to update

### Deployment Not Triggering
- Verify GitHub integration is connected
- Check if you pushed to the correct branch (main)
- Manually trigger deployment from Vercel dashboard

## Useful Commands

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Open project in browser
vercel open

# Remove deployment
vercel rm [deployment-name]
```

## Automatic Deployments

Once connected, Vercel automatically:
- ✅ Deploys every push to main branch
- ✅ Creates preview deployments for pull requests
- ✅ Shows deployment status in GitHub
- ✅ Provides instant rollback if needed

## Your Portfolio URLs

After deployment, you'll have:
- **Production**: `https://your-project.vercel.app`
- **Custom Domain** (optional): `https://yourdomain.com`
- **Preview URLs**: For each deployment

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support
