# Muhammad Tahir Hussain - Backend Developer Portfolio

A modern, professional, and eye-catching portfolio website showcasing backend development skills and projects.

## 🌟 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimalistic design with eye-catching animations
- **4 Main Pages**: Home, About, Projects, and Contact
- **Smooth Animations**: Fade-in effects, hover animations, and scroll-triggered animations
- **Interactive Elements**: Hover effects on profile image, buttons, and project cards
- **Form Validation**: JavaScript-based contact form validation
- **Social Integration**: Links to LinkedIn, GitHub, WhatsApp, and Email
- **SEO Optimized**: Proper meta tags for search engine optimization
- **Fast Loading**: Optimized images and code for quick load times

## 📁 Project Structure

```
muhammad-tahir-portfolio/
│
├── index.html              # Home page
├── about.html              # About page with experience and skills
├── projects.html           # Projects showcase page
├── contact.html            # Contact page with form
├── README.md               # Project documentation
│
├── css/
│   └── style.css          # Custom styles and animations
│
├── js/
│   └── script.js          # JavaScript functionality
│
└── images/                # Image assets
    ├── profile.jpg        # Profile picture (350x350px recommended)
    ├── project-ecommerce.jpg
    ├── project-realtime.jpg
    ├── project-analytics.jpg
    ├── project-microservices.jpg
    ├── project-auth.jpg
    └── project-blog.jpg
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for customization
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Download or clone the project**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Add your images**
   - Place your profile picture in `images/profile.jpg` (recommended size: 350x350px)
   - Add project screenshots to the `images/` folder
   - Update image paths in HTML files if needed

3. **Customize personal information**
   - Update name, contact details, and social links in all HTML files
   - Replace placeholder GitHub/LinkedIn URLs with your actual profiles
   - Update resume Google Drive link in `index.html` and `contact.html`
   - Modify project information in `projects.html`

4. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

### Using a Local Server (Optional)

For better development experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` (or the port shown) in your browser.

## 🎨 Customization Guide

### Updating Personal Information

1. **Home Page (`index.html`)**
   - Line 56: Update your full name
   - Line 58: Update your title/role
   - Line 60: Update introduction tagline
   - Lines 64-76: Update social media links
   - Line 81: Update resume download link
   - Line 95: Replace `images/profile.jpg` with your image

2. **About Page (`about.html`)**
   - Lines 50-62: Update "Who I Am" section
   - Lines 68-166: Update work experience details
   - Lines 175-364: Update technical skills and percentages
   - Lines 373-441: Update strengths and personal qualities

3. **Projects Page (`projects.html`)**
   - Update each project card with:
     - Project title
     - Description
     - Tech stack tags
     - GitHub repository links
     - Project images

4. **Contact Page (`contact.html`)**
   - Lines 64-92: Update contact information
   - Line 97: Update resume download link
   - Lines 105-121: Update social media links

### Customizing Colors

Edit `css/style.css` to change the color scheme:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #ec4899;       /* Accent highlights */
    --dark-bg: #0f172a;            /* Main background */
    --darker-bg: #020617;          /* Darker sections */
    /* ... other variables */
}
```

### Adding/Removing Projects

To add a new project in `projects.html`:

```html
<div class="col-lg-4 col-md-6 fade-in-up">
    <div class="project-card">
        <div class="project-image">
            <img src="images/your-project.jpg" alt="Project Name" class="img-fluid">
            <div class="project-overlay">
                <div class="project-links">
                    <a href="https://github.com/your-repo" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h4 class="project-title">Your Project Name</h4>
            <p class="project-description">Project description...</p>
            <div class="tech-stack">
                <span class="tech-tag">Technology 1</span>
                <span class="tech-tag">Technology 2</span>
            </div>
            <div class="project-footer">
                <a href="https://github.com/your-repo" target="_blank" class="btn btn-sm btn-outline-primary">
                    <i class="fab fa-github me-2"></i>View Code
                </a>
            </div>
        </div>
    </div>
</div>
```

## 🖼️ Image Requirements

### Profile Picture
- **Location**: `images/profile.jpg`
- **Recommended Size**: 350x350px (square)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for sharp display

### Project Images
- **Recommended Size**: 600x400px (3:2 ratio)
- **Format**: JPG, PNG, or WebP
- **Names**: Use descriptive names (e.g., `project-ecommerce.jpg`)
- **Optimization**: Compress images for faster loading

## 📝 Resume Setup

To enable resume download functionality:

1. Upload your resume PDF to Google Drive
2. Set sharing permissions to "Anyone with the link can view"
3. Get the shareable link
4. Extract the file ID from the URL
5. Update the download links in:
   - `index.html` (line 81)
   - `contact.html` (line 97)

**Example:**
```
Google Drive URL: https://drive.google.com/file/d/1AbC123dEf456GhI789/view
File ID: 1AbC123dEf456GhI789
```

Replace `YOUR_RESUME_ID` with your actual file ID.

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select branch (usually `main`) and root folder
5. Save and wait for deployment
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up for [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be deployed instantly with a custom URL

### Vercel

1. Sign up for [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## 🔧 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactivity and form validation
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome 6**: Icons and social media symbols
- **Google Fonts**: Custom typography (Poppins, Playfair Display)

## ✨ Key Features Breakdown

### Animations
- Fade-in animations on scroll
- Gradient shifting on name
- Rotating border on profile image
- Hover effects on cards and buttons
- Progress bar animations
- Smooth scroll navigation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Hamburger menu for mobile devices
- Touch-friendly buttons and links

### Performance
- Lazy loading for images
- Optimized CSS and JavaScript
- Minified resources for production
- Fast page load times

## 📱 Social Media Integration

Update these placeholders with your actual profiles:

- **LinkedIn**: `https://linkedin.com/in/your-profile`
- **GitHub**: `https://github.com/your-username`
- **WhatsApp**: `https://wa.me/your-phone-number`
- **Email**: `your.email@example.com`

## 🐛 Troubleshooting

### Images not displaying
- Check that image files are in the `images/` folder
- Verify image file names match those in HTML
- Ensure proper file extensions (.jpg, .png)

### Animations not working
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure script.js is loaded correctly

### Form not validating
- Check browser console for errors
- Verify that script.js is properly linked
- Test in different browsers

## 📄 License

This project is open source and available for personal and commercial use. Feel free to customize it for your own portfolio!

## 👨‍💻 Author

**Muhammad Tahir Hussain**
- Backend Developer
- Python | Django | FastAPI | DRF

## 🙏 Acknowledgments

- Bootstrap 5 for the responsive framework
- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

## 📞 Contact & Support

If you have any questions or need help customizing this portfolio:

- Email: tahir.hussain@example.com
- LinkedIn: [Muhammad Tahir Hussain](https://linkedin.com/in/muhammad-tahir-hussain)
- GitHub: [muhammad-tahir-hussain](https://github.com/muhammad-tahir-hussain)

---

**Note**: Remember to update all placeholder information with your actual details before deploying!

Built with ❤️ using HTML, CSS, JavaScript, and Bootstrap 5
