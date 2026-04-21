# Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel for free.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com) - it's free!)

## Step-by-Step Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   cd portfolio
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will automatically detect it's a React app

3. **Configure and Deploy**
   - Project Name: `kaoser-anik-portfolio` (or your preferred name)
   - Framework Preset: Create React App (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `build` (auto-filled)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will build and deploy your site
   - This usually takes 1-2 minutes
   - You'll get a live URL like: `https://your-portfolio.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow Vercel's instructions to configure DNS

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: kaoser-anik-portfolio
   - Directory: ./
   - Override settings: No

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the main branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## Updating Your Portfolio

To update your live portfolio:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel will automatically deploy the changes

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test locally with `npm run build`

### Blank Page After Deployment
- Check browser console for errors
- Verify all file paths are correct
- Ensure all components are properly imported

### Styling Issues
- Clear browser cache
- Check if Tailwind CSS is properly configured
- Verify postcss.config.js and tailwind.config.js exist

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Compression
- ✅ Caching

## Monitoring

View your deployment analytics:
- Go to your project dashboard
- Click "Analytics" tab
- See visitor stats, performance metrics, etc.

## Free Tier Limits

Vercel's free tier includes:
- Unlimited deployments
- 100 GB bandwidth per month
- Automatic HTTPS
- Custom domains
- Preview deployments

This is more than enough for a portfolio website!

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Vercel Community](https://github.com/vercel/vercel/discussions)
- Contact Vercel Support

---

**Your portfolio will be live at**: `https://your-project-name.vercel.app`

Congratulations! 🎉
