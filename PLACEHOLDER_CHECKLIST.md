# Portfolio Customization Checklist

This file lists all placeholder data that needs to be replaced with your actual information before deploying your portfolio.

## 🔴 Critical - Must Update Before Deployment

### Contact Information

- [ ] **Email Address**: Replace `dummy@example.com` with your actual email
  - Files: `index.html`, `contact.html`
  - Lines: Multiple occurrences

- [ ] **Phone Number**: Replace `+00 000 0000000` with your actual phone
  - File: `contact.html`
  - Line: 94

### Social Media Links

- [ ] **LinkedIn**: Replace `https://example.com/linkedin` with your LinkedIn profile
  - Files: `index.html`, `about.html`, `projects.html`, `contact.html`
  - Example: `https://linkedin.com/in/your-username`

- [ ] **GitHub**: Replace `https://example.com/github` with your GitHub profile
  - Files: `index.html`, `about.html`, `projects.html`, `contact.html`
  - Example: `https://github.com/your-username`

- [ ] **WhatsApp**: Replace `https://example.com/whatsapp` with your WhatsApp link
  - Files: `index.html`, `contact.html`
  - Example: `https://wa.me/1234567890`

### Resume/CV

- [ ] **Resume PDF Link**: Replace `https://example.com/resume.pdf` with your actual resume link
  - Files: `index.html`, `contact.html`
  - Can use: Google Drive, Dropbox, or host on your server

### Project Links

- [ ] **Project Repository URLs**: Replace all `https://example.com/project1`, `https://example.com/project2`, etc.
  - File: `projects.html`
  - Lines: Throughout project cards
  - Replace with actual GitHub/GitLab repository URLs

## 🟡 Important - Recommended Updates

### Images

- [ ] **Profile Photo**: Replace placeholder at `https://via.placeholder.com/500x500`
  - File: `index.html`
  - Line: 96
  - Recommended: Create `images/` folder and use your actual photo

- [ ] **Project Images**: Replace all placeholder project images
  - File: `projects.html`
  - Lines: 72, 108, 144, 179, 215, 251, 286, 319, 352, 384, 417, 450
  - Create actual project screenshots

### Meta Tags & SEO

- [ ] **Website URL**: Replace `https://yourdomain.com/` with your actual domain
  - Files: All HTML files (meta tags section)
  - Update in Open Graph and Twitter meta tags

- [ ] **OG Image**: Replace `https://yourdomain.com/images/og-image.jpg`
  - Files: All HTML files
  - Create a 1200x630px image for social media sharing

### Console Messages

- [ ] **Console Email**: Update in `js/script.js`
  - File: `js/script.js`
  - Line: 496
  - Currently: `your-email@example.com (Update this with your actual email)`

## 🟢 Optional - Nice to Have

### Favicon

- [ ] **Create Favicon**: Add `favicon.ico` to root directory
  - Recommended size: 32x32px or 16x16px
  - Can use tools like favicon.io or realfavicongenerator.net

- [ ] **Apple Touch Icon**: Add `images/apple-touch-icon.png`
  - Recommended size: 180x180px

### Personal Content

- [ ] **About Page**: Customize your bio, experience, and skills
  - File: `about.html`
  - Update percentages, dates, company names

- [ ] **Projects**: Add your actual projects
  - File: `projects.html`
  - Update titles, descriptions, tech stacks

- [ ] **Color Scheme**: Customize colors to match your brand
  - File: `css/style.css`
  - Lines: 5-17 (CSS variables)

## ✅ Verification Checklist

Before deploying, verify:

- [ ] All social media links open correctly
- [ ] Resume downloads successfully
- [ ] All images load properly
- [ ] Email links work (mailto:)
- [ ] No "example.com" URLs remain
- [ ] No placeholder text like "dummy" remains
- [ ] All project links point to real repositories
- [ ] Mobile responsiveness works
- [ ] Forms validate correctly
- [ ] Console has no JavaScript errors

## 📝 Search for Placeholders

Use these search terms in your code editor to find remaining placeholders:

- `example.com`
- `dummy`
- `placeholder`
- `via.placeholder.com`
- `yourdomain.com`
- `+00 000`
- `TODO`
- `FIXME`

## 🚀 Ready to Deploy?

Once all items are checked:

1. ✅ Test all functionality locally
2. ✅ Validate HTML/CSS (W3C Validator)
3. ✅ Test on different browsers
4. ✅ Test on mobile devices
5. ✅ Check page load speed
6. ✅ Deploy to your hosting platform
7. ✅ Test live site thoroughly
8. ✅ Set up analytics (optional)

---

**Last Updated**: 2025-11-18
