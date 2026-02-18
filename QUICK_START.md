# 🚀 Quick Start - Push to GitHub & Deploy

> **✨ New!** The app now includes enhanced animations, full mobile responsiveness, plan history, print/PDF support, and share functionality! See [ENHANCEMENTS.md](ENHANCEMENTS.md) for details.

## Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Repository name: **`athletiq`**
3. Keep it **Public**
4. **DO NOT** check any boxes (README, .gitignore, license)
5. Click **"Create repository"**

## Step 2: Push Your Code

Copy your GitHub repository URL from the page (looks like: `https://github.com/USERNAME/athletiq.git`)

Then run these commands in PowerShell:

```powershell
cd C:\Users\nclaw\.openclaw\workspace\athletiq
git remote add origin https://github.com/YOUR_USERNAME/athletiq.git
git branch -M main
git push -u origin main
```

**⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Deploy to Vercel

1. Go to: **https://vercel.com**
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select **"athletiq"** repository
5. Click **"Import"**
6. Before deploying, add environment variable:
   - Click **"Environment Variables"**
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key (get free from https://aistudio.google.com/app/apikey)
   - Click **"Add"**
7. Click **"Deploy"**

## Step 4: Get Your Live URL

After 1-2 minutes, Vercel will give you a URL like:
`https://athletiq-xxx.vercel.app`

Test it and share it! 🎉

---

## Commands Summary

```powershell
# Navigate to project
cd C:\Users\nclaw\.openclaw\workspace\athletiq

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/athletiq.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## If You Don't Have a Gemini API Key

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Create API key"**
4. Copy the key
5. **It's FREE!** No credit card required
6. Free tier includes 15 requests/minute, 1500 requests/day

---

**That's it! Your site will be live in ~15 minutes.** 🚀

For detailed help, see:
- **GITHUB_SETUP.md** - Full GitHub instructions
- **DEPLOYMENT.md** - Deployment troubleshooting
- **README.md** - Project documentation
- **PROJECT_SUMMARY.md** - Complete feature list
