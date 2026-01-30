# 🚗 AutoNova - Premium Car Dealership Website

A modern, responsive car dealership website built with **React + Vite** and **Tailwind CSS**. Features a clean, professional UI with smooth animations and an excellent user experience.

![AutoNova](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎨 **Design & UI**
- Modern, clean, and professional design
- Fully responsive (mobile-first approach)
- Smooth animations and hover effects
- Premium color scheme with elegant typography
- Card-based layouts with subtle shadows

### 🏗️ **Sections & Pages**
1. **Hero Section** - Full-width hero with call-to-action buttons
2. **Featured Cars** - Showcase of premium vehicles
3. **Cars Listing** - Browse all available cars with search & filter
4. **Car Details** - Individual car pages with image gallery
5. **Brand Logos** - Trusted automotive manufacturers
6. **Why Choose Us** - Key features and benefits
7. **Testimonials** - Customer reviews with slider
8. **About Page** - Company story and team information
9. **Contact Page** - Contact form with business information

### ⚡ **Technical Features**
- React Router DOM for seamless navigation
- Component-based architecture
- Reusable components
- Optimized image handling
- Smooth scroll animations
- Mobile menu with transitions
- Form validation
- Interactive image galleries
- Search and filter functionality

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn

### **Installation**

1. **Clone or download the project**
```bash
cd autonova-dealership
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
# React Router
npm install react-router-dom

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Lucide React (for icons)
npm install lucide-react
```

4. **Add your images**
Place all your car images in the `src/assets/images/` directory:
- Hero.jpg
- Featured car images (FEATURED-CAR-*.jpg)
- Car listing images (9 cars with exterior/interior variants)
- Brand logos (*.PNG)
- Customer testimonial images
- About page images
- Contact page images

5. **Start development server**
```bash
npm run dev
```

6. **Open in browser**
```
http://localhost:5173
```

---

## 📁 Project Structure
```
autonova-dealership/
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # All images go here
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── FeaturedCars.jsx # Featured cars carousel
│   │   ├── BrandLogos.jsx   # Brand logos grid
│   │   ├── WhyChooseUs.jsx  # Features section
│   │   └── Testimonials.jsx # Customer reviews slider
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Cars.jsx         # Cars listing page
│   │   ├── CarDetails.jsx   # Individual car details
│   │   ├── About.jsx        # About page
│   │   └── Contact.jsx      # Contact page
│   ├── data/
│   │   └── carsData.js      # Car inventory data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Customization

### **Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF4C29',      // Main accent color
  secondary: '#334257',    // Text color
  accent: '#EEEEEE',       // Background accent
}
```

### **Fonts**
Fonts are loaded from Google Fonts in `index.html`:
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

To change fonts, update the Google Fonts link and Tailwind config.

### **Car Data**
Edit `src/data/carsData.js` to:
- Add/remove cars
- Update pricing
- Modify descriptions
- Change features

### **Images**
Replace images in `src/assets/images/` with your own. Ensure filenames match those in `carsData.js`.

---

## 📱 Responsive Breakpoints
```
Mobile:    < 640px   (1 column)
Tablet:    640-1024px (2-3 columns)
Desktop:   ≥ 1024px   (3-4 columns)
```

---

## 🧩 Key Components

### **Navbar**
- Fixed navigation with scroll effect
- Transparent on homepage, white on other pages
- Mobile hamburger menu
- Active link highlighting

### **Hero**
- Full-screen background image
- Fade-in animations
- Call-to-action buttons
- Scroll indicator

### **FeaturedCars**
- Grid layout (responsive)
- Hover effects with image zoom
- Smooth transitions

### **Cars Listing**
- Search functionality
- Brand filter dropdown
- Grid layout with cards
- Clickable cards linking to details

### **CarDetails**
- Image gallery with thumbnails
- Exterior/Interior view toggle
- Car specifications
- Contact buttons

### **Testimonials**
- Auto-playing slider
- Manual navigation
- Star ratings
- Customer photos

### **Contact Form**
- Form validation
- Success message
- Responsive layout
- Map placeholder

---

## 🛠️ Scripts
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.x.x",
  "lucide-react": "^0.x.x"
}
```

### **Dev Dependencies**
```json
{
  "@vitejs/plugin-react": "^4.3.1",
  "vite": "^5.4.2",
  "tailwindcss": "^3.4.x",
  "postcss": "^8.4.x",
  "autoprefixer": "^10.4.x"
}
```

---

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Image Requirements

### **Required Images:**

#### Hero Section:
- `Hero.jpg` (1920x1080px recommended)

#### Featured Cars (6 images):
- `FEATURED-CAR-HONDA.jpg`
- `FEATURED-CAR-TOYATA.jpg`
- `FEATURED-CAR-TESLA.jpg`
- `FEATURED-CAR-AUDI.jpg`
- `FEATURED-CAR-BENZ.jpg`
- `FEATURED-CAR-BMW.jpg`

#### Cars Listing (9 cars, 27 images total):
Each car needs 3 images:
1. Main thumbnail
2. Exterior view
3. Interior view

Example:
- `Blue Toyota Prius Hybrid.jpg`
- `Blue Toyota Prius Hybrid-Exterior.jpg`
- `Blue Toyota Prius Hybrid-Interior.jpg`

#### Brand Logos (7 images):
- `Benz-Logo.PNG`
- `Toyota-Logo.PNG`
- `Audi-Logo.PNG`
- `Mazda-Logo.PNG`
- `Nissan-Logo.PNG`
- `Honda-Logo.PNG`
- `BMW-Logo.PNG`

#### Why Choose Us (4 icons):
- `Trusted Dealers.PNG`
- `Warranty & Support.PNG`
- `Best Price Guarantee.PNG`
- `Certified Cars.PNG`

#### Testimonials (2 images):
- `customer1.JPG`
- `customer2.JPG`

#### About Page (3 images):
- `Team.JPG`
- `Cars Lined Up.JPG`
- `Entrance.JPG`

#### Contact Page (1 image):
- `Parking.JPG`

---

## 🐛 Troubleshooting

### **Images not loading?**
- Check file paths in `src/assets/images/`
- Ensure filenames match exactly (case-sensitive)
- Verify image formats (.jpg, .png, .JPG, .PNG)

### **Tailwind styles not working?**
- Run `npm install` again
- Clear cache: `npm run dev -- --force`
- Check `tailwind.config.js` content paths

### **React Router not working?**
- Ensure `react-router-dom` is installed
- Check import statements
- Verify route paths in `App.jsx`

### **Mobile menu not closing?**
- Check `useEffect` in Navbar component
- Verify `location` dependency

---

## 🚀 Deployment

### **Build for production:**
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### **Deploy to:**
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload `dist/` folder

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ for AutoNova

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for lightning-fast development
- Tailwind CSS for utility-first styling
- Lucide React for beautiful icons
- Google Fonts for typography

---

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Email: support@autonova.com
- Website: www.autonova.com

---

## 🎉 Future Enhancements

- [ ] Add backend integration
- [ ] Implement user authentication
- [ ] Add car comparison feature
- [ ] Integrate payment gateway
- [ ] Add live chat support
- [ ] Implement wish list
- [ ] Add advanced filters (price, year, mileage)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Progressive Web App (PWA)

---

**Made with React ⚛️ + Vite ⚡ + Tailwind CSS 🎨**

*Happy coding! 🚗💨*
