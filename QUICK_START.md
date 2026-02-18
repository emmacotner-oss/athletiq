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
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (get from https://platform.openai.com/api-keys)
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

## If You Don't Have an OpenAI API Key

1. Go to: https://platform.openai.com/signup
2. Sign up or log in
3. Go to: https://platform.openai.com/api-keys
4. Click **"Create new secret key"**
5. Copy the key (starts with `sk-...`)
6. Add $5-10 in credits: https://platform.openai.com/account/billing

---

**That's it! Your site will be live in ~15 minutes.** 🚀

For detailed help, see:
- **GITHUB_SETUP.md** - Full GitHub instructions
- **DEPLOYMENT.md** - Deployment troubleshooting
- **README.md** - Project documentation
- **PROJECT_SUMMARY.md** - Complete feature list
