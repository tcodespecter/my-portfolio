# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Fastest Way to Get Started

### Step 1: Add Images (2 minutes)
1. Add your profile picture: `images/profile.jpg` (350x350px)
2. Add 6 project images to the `images/` folder (or use placeholders for now)

### Step 2: Update Personal Info (3 minutes)
Replace these key items in **ALL HTML files**:

```plaintext
Find: "Muhammad Tahir Hussain"
Replace: Your Full Name

Find: "tahir.hussain@example.com"
Replace: your.email@domain.com

Find: "923001234567"
Replace: your-whatsapp-number

Find: "muhammad-tahir-hussain"
Replace: your-github-username

Find: "YOUR_RESUME_ID"
Replace: your-google-drive-file-id
```

### Step 3: Open in Browser
- Simply open `index.html` in your web browser
- Or use Live Server in VS Code for live preview

## 🎯 What to Update (Priority Order)

### Priority 1: Essential (Do This First)
- [ ] Add profile picture (`images/profile.jpg`)
- [ ] Update your name in all pages
- [ ] Update social media links (LinkedIn, GitHub, WhatsApp, Email)
- [ ] Update resume download link

### Priority 2: Content (Do This Next)
- [ ] Update About page with your experience and skills
- [ ] Update Projects page with your actual projects
- [ ] Update contact information

### Priority 3: Polish (Do Before Deploying)
- [ ] Add project screenshots
- [ ] Customize colors (optional)
- [ ] Proofread all content
- [ ] Test on mobile devices

## 📱 Social Media Links Format

### WhatsApp
```
Format: https://wa.me/COUNTRYCODEPHONENUMBER
Example: https://wa.me/923001234567 (for +92 300 1234567)
No spaces, dashes, or parentheses!
```

### LinkedIn
```
Format: https://linkedin.com/in/your-username
Example: https://linkedin.com/in/john-doe
```

### GitHub
```
Format: https://github.com/your-username
Example: https://github.com/johndoe
```

### Resume (Google Drive)
1. Upload resume PDF to Google Drive
2. Right-click → Share → "Anyone with link can view"
3. Copy link: `https://drive.google.com/file/d/1AbC123XyZ456/view`
4. Extract ID: `1AbC123XyZ456`
5. Use format: `https://drive.google.com/file/d/YOUR_ID/view`

## 🖼️ Quick Image Solution

Don't have images ready? Use placeholders:

### Profile Placeholder
```html
https://ui-avatars.com/api/?name=Your+Name&size=350&background=6366f1&color=fff
```

### Project Placeholders
```html
https://picsum.photos/600/400
```

Replace with actual images later!

## 🔧 Using Find & Replace (VS Code)

1. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
2. Enter text to find
3. Enter replacement text
4. Click "Replace All" for each item

**Search in**: All HTML files (*.html)

## ✅ 5-Minute Checklist

1. ✓ Replace "Muhammad Tahir Hussain" with your name
2. ✓ Update email address
3. ✓ Update WhatsApp number
4. ✓ Update LinkedIn URL
5. ✓ Update GitHub username
6. ✓ Add profile picture
7. ✓ Update resume link
8. ✓ Test in browser

## 🌐 Quick Deploy (After Customization)

### GitHub Pages (Free & Easy)
```bash
# Create repo on GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Enable GitHub Pages in repo settings
# Your site: https://YOUR_USERNAME.github.io/portfolio
```

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your portfolio folder
3. Get instant URL
4. Done!

## 📞 Need Help?

1. Check `README.md` for detailed documentation
2. See `CUSTOMIZATION_CHECKLIST.md` for complete list
3. Review HTML comments in files for guidance
4. Check browser console for errors (F12)

## 🎨 Color Customization (Optional)

In `css/style.css`, find `:root` and change:

```css
--primary-color: #6366f1;    /* Your brand color */
--secondary-color: #8b5cf6;  /* Accent color */
--accent-color: #ec4899;     /* Highlight color */
```

Use a [color picker](https://htmlcolorcodes.com/) to find hex codes!

## ⚠️ Common Mistakes to Avoid

- ❌ Forgetting to update resume link
- ❌ Wrong WhatsApp format (include country code)
- ❌ Not testing on mobile
- ❌ Using too-large images (compress them!)
- ❌ Leaving placeholder text in projects
- ❌ Not proofreading content

## 🎉 You're Ready!

Once you've completed the 5-minute checklist:
- Open `index.html` in your browser
- Test all links
- Share with friends/colleagues for feedback
- Deploy to GitHub Pages or Netlify

**Remember**: It's better to launch with real content than wait for perfection!

---

**Pro Tip**: Bookmark the `CUSTOMIZATION_CHECKLIST.md` for a complete step-by-step guide!

Good luck! 🚀
