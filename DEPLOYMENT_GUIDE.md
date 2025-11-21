# Deployment Guide

## 🚀 Deploy to GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these lines to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Replace `yourusername` with your actual GitHub username.

### Step 3: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `portfolio`
3. Don't initialize with README
4. Click "Create repository"

### Step 5: Push to GitHub
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/portfolio`

---

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **portfolio**
- In which directory is your code located? **./portfolio**
- Want to override settings? **N**

#### Step 4: Deploy to Production
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard (Easier)

#### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

#### Step 2: Import to Vercel
1. Go to https://vercel.com/
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

#### Step 3: Add Environment Variables (for EmailJS)
1. Go to Project Settings → Environment Variables
2. Add:
   ```
   REACT_APP_EMAILJS_SERVICE_ID = your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID = your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY = your_public_key
   ```

#### Step 4: Deploy
Click **"Deploy"** - Done! ✅

Your site will be live at: `https://portfolio-yourusername.vercel.app`

### Auto-Deploy on Git Push
Vercel automatically deploys when you push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## 🔧 Before Deploying - Checklist

### 1. Update Personal Information
- [x] Replace all placeholder text with your actual info
- [x] Update social media links (GitHub, LinkedIn)
- [x] Add your resume PDF to assets
- [x] Add your profile photo to assets

### 2. Configure EmailJS
- [ ] Set up EmailJS account
- [ ] Add credentials to `.env` file
- [ ] Test contact form locally

### 3. Optimize for Production
```bash
# Remove console.logs
# Optimize images (compress to WebP if possible)
# Test all links and buttons
```

### 4. Build Test
```bash
npm run build
```

Check for errors. If successful, you're ready to deploy!

---

## 🎯 Domain Setup (Optional)

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For GitHub Pages:
1. Go to Repository Settings → Pages
2. Add custom domain
3. Create CNAME file in public folder:
   ```
   yourdomain.com
   ```

---

## 📱 Performance Tips

### Optimize Images
```bash
# Install image optimizer
npm install imagemin imagemin-webp

# Convert images to WebP format for better performance
```

### Enable HTTPS
- ✅ Vercel: Automatic
- ✅ GitHub Pages: Automatic (if using github.io domain)

---

## 🐛 Troubleshooting

### Blank Page After Deploy
- Check `homepage` in package.json
- Ensure build folder has index.html
- Check browser console for errors

### Environment Variables Not Working
- Prefix with `REACT_APP_`
- Restart dev server after changes
- Set in Vercel dashboard for production

### 404 on Routes
Add to `public/` folder: `_redirects` (for Vercel) or `404.html` (for GitHub Pages)

---

## 🔄 Update Workflow

### Local Development
```bash
npm start
```

### Deploy Updates (Vercel)
```bash
git add .
git commit -m "Update description"
git push
# Auto-deploys!
```

### Deploy Updates (GitHub Pages)
```bash
git add .
git commit -m "Update description"
git push
npm run deploy
```

---

## 📊 Analytics (Optional)

### Add Google Analytics
1. Get tracking ID from https://analytics.google.com
2. Add to `public/index.html` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Post-Deployment

1. **Test Everything:**
   - All navigation links
   - Resume download
   - Contact form
   - Mobile responsiveness

2. **Share Your Portfolio:**
   - Update LinkedIn
   - Update GitHub profile README
   - Add to resume

3. **Monitor:**
   - Check analytics
   - Fix bugs as reported
   - Keep content updated

---

**Recommended: Use Vercel for best performance, automatic HTTPS, and seamless deployments!** 🚀
