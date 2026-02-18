# GitHub Repository Setup

## Quick Steps to Get Your Project on GitHub

### 1. Create the Repository on GitHub

1. Go to **https://github.com/new**
2. Fill in the details:
   - **Repository name:** `athletiq`
   - **Description:** "AI-powered sports training planner built with Next.js 14"
   - **Visibility:** Public (or Private if you prefer)
   - **⚠️ Important:** Do NOT check any of the initialization options (README, .gitignore, license) - we already have these files!
3. Click **"Create repository"**

### 2. Push Your Code

After creating the empty repository on GitHub, copy your repository URL from GitHub (it will look like `https://github.com/YOUR_USERNAME/athletiq.git`), then run:

```bash
cd C:\Users\nclaw\.openclaw\workspace\athletiq
git remote add origin https://github.com/YOUR_USERNAME/athletiq.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 3. Verify on GitHub

Go to your repository URL: `https://github.com/YOUR_USERNAME/athletiq`

You should see:
- All your project files
- The README with project description
- 2 commits

### 4. Deploy to Vercel

Now that your code is on GitHub:

1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click **"Add New Project"**
4. **Import** your `athletiq` repository
5. Configure:
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Add Environment Variable:**
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key (get FREE at https://aistudio.google.com/app/apikey)
7. Click **"Deploy"**

Deployment takes 1-2 minutes. Once done, Vercel will give you a live URL like:
`https://athletiq-xxx.vercel.app`

### 5. Test Your Live Site

Visit your Vercel URL and test:
- Landing page loads with animations ✅
- Click through Sport → Goals → Schedule ✅
- Generate a workout plan (requires valid Gemini key - FREE at https://aistudio.google.com/app/apikey) ✅
- Verify the workout plan displays correctly ✅

## Alternative: Use GitHub CLI (if installed)

If you have GitHub CLI installed:

```bash
cd C:\Users\nclaw\.openclaw\workspace\athletiq
gh repo create athletiq --public --source=. --remote=origin --push
```

This creates the repo and pushes in one command!

## Common Issues

### Issue: "Permission denied" when pushing
**Solution:** Make sure you're authenticated with GitHub. Run `git config credential.helper store` and try again.

### Issue: "Remote origin already exists"
**Solution:** Run `git remote remove origin` first, then add it again.

### Issue: Build fails on Vercel
**Solution:** Check the Vercel build logs. Common causes:
- Missing `GEMINI_API_KEY` environment variable
- Make sure you added the key in Vercel dashboard, not just locally

### Issue: AI generation doesn't work
**Solution:** 
- Verify your Gemini API key is valid
- Gemini free tier is generous (1500 requests/day) - no credit card needed
- Look at Vercel function logs for specific errors

## Next Steps After Deployment

1. **Custom Domain (optional):** In Vercel dashboard, you can add a custom domain
2. **Analytics:** Vercel provides basic analytics in the dashboard
3. **Share:** Your app is live! Share the URL
4. **Iterate:** Make changes locally, commit, and push - Vercel auto-deploys

## Your Repository Location

**Local path:** `C:\Users\nclaw\.openclaw\workspace\athletiq`

**After setup, it will be at:** `https://github.com/YOUR_USERNAME/athletiq`

---

**Questions?** Check DEPLOYMENT.md for more detailed deployment options and troubleshooting.
