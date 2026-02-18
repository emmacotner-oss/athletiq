# Push AthletIQ to GitHub - Quick Guide

## Option 1: Create repo on GitHub.com (2 minutes)

1. Go to: https://github.com/new
2. Repository name: `athletiq`
3. Description: `AI-powered sports training planner with Gemini`
4. Set to **Public** (or Private if you prefer)
5. **DO NOT** initialize with README (we already have one)
6. Click **Create repository**

Then run these commands in PowerShell:

```powershell
cd C:\Users\nclaw\.openclaw\workspace\athletiq
git remote add origin https://github.com/emma_cotner/athletiq.git
git branch -M main
git push -u origin main
```

## Option 2: Use GitHub CLI (if installed)

```powershell
cd C:\Users\nclaw\.openclaw\workspace\athletiq
gh repo create athletiq --public --source=. --remote=origin --push
```

## After Pushing

Your repo will be live at: `https://github.com/emma_cotner/athletiq`

Next step: Deploy to Vercel (see DEPLOYMENT.md)
