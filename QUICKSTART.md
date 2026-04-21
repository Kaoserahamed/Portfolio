# Quick Start Guide 🚀

Get your portfolio up and running in minutes!

## 1. Test Locally

```bash
cd portfolio
npm start
```

Your portfolio will open at `http://localhost:3000`

## 2. Deploy to Vercel (Free)

### Fastest Way:

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it: `portfolio` or `my-portfolio`

2. **Push your code**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (it's free!)
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy"
   - Wait 1-2 minutes ⏱️
   - Done! Your portfolio is live! 🎉

Your portfolio will be available at: `https://your-project.vercel.app`

## 3. Customize

Update these files with your information:

- `src/components/Hero.js` - Your name and introduction
- `src/components/About.js` - Your story
- `src/components/Skills.js` - Your technical skills
- `src/components/Projects.js` - Your projects
- `src/components/Education.js` - Your education
- `src/components/Contact.js` - Your contact info

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically redeploy! ✨

## Need Help?

Check out:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Detailed deployment guide

---

**That's it! You're done!** 🎊
