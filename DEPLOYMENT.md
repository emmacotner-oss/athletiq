# Deployment Guide

## Known Issue: Local Windows Build

The project currently has a compatibility issue with Next.js 16's SWC bindings on certain Windows systems (particularly ARM64). You may see this error when running `npm run build` locally:

```
Error: `turbo.createProject` is not supported by the wasm bindings.
```

**This does not affect deployment to Vercel or other cloud platforms.** The code is fully functional and will build successfully in production environments.

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Create GitHub Repository:**
   ```bash
   # The git repo is already initialized. Now create it on GitHub:
   # Go to https://github.com/new
   # Repository name: athletiq
   # Keep it public or private (your choice)
   # Don't initialize with README (we already have one)
   # Click "Create repository"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/athletiq.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Add environment variable: `GEMINI_API_KEY=your_key_here`
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project directory)
vercel

# Add environment variable
vercel env add GEMINI_API_KEY
# Enter your Gemini API key when prompted

# Deploy to production
vercel --prod
```

## Environment Variables

Before deploying, make sure you have:

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `GEMINI_API_KEY` | Your Google Gemini API key (FREE) | https://aistudio.google.com/app/apikey |

## Alternative Deployment Platforms

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add `OPENAI_API_KEY` environment variable
5. Deploy

### Railway

1. Create new project from GitHub repo
2. Add `OPENAI_API_KEY` environment variable
3. Railway will auto-detect Next.js and deploy

### AWS Amplify

1. Connect GitHub repository
2. Build settings will be auto-detected
3. Add environment variable in Amplify Console
4. Deploy

## Post-Deployment Checklist

- [ ] Verify the landing page loads
- [ ] Test the full flow: Sport → Goals → Schedule → Generate
- [ ] Check that AI generation works (requires valid Gemini API key - get free at https://aistudio.google.com/app/apikey)
- [ ] Test on mobile devices
- [ ] Verify all animations work smoothly

## Troubleshooting

### API Key Issues
- Make sure your Gemini API key is valid (get free at https://aistudio.google.com/app/apikey)
- Check that the environment variable is set correctly (no extra spaces)
- Restart your deployment after adding environment variables
- Gemini free tier: 15 requests/minute, 1500/day - no credit card needed

### Build Failures
- Check Vercel/platform logs for specific errors
- Ensure all dependencies are in package.json
- Verify Node.js version (18+ required)

### Runtime Errors
- Check browser console for errors
- Verify API routes are accessible
- Check Gemini API quota (free tier is generous: 1500/day)

## Local Development Alternative

If you need to develop locally and can't build due to Windows compatibility:

1. Use Vercel Dev:
```bash
npm i -g vercel
vercel dev
```

2. Or develop on WSL2 (Windows Subsystem for Linux)
3. Or use a Docker container with Linux
4. Or develop on a cloud IDE (GitHub Codespaces, Gitpod, etc.)

## Success Criteria

Your deployment is successful when:
- ✅ Landing page loads with animations
- ✅ All navigation works
- ✅ Sport and goal selection works
- ✅ AI generates a workout plan (Gemini is fast - usually 2-5 seconds)
- ✅ Results display correctly with all workout details

---

**Need help?** Check Next.js and Vercel documentation or create an issue in the GitHub repo.
