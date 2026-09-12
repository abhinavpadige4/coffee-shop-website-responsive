# Brew Haven Coffee Co. - Responsive Coffee Shop Website

A fully responsive, accessible, and SEO-friendly single-page website for a coffee shop featuring menu items, business hours, location with Google Maps, and a contact form.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**: Proper meta tags, Open Graph, schema.org LocalBusiness markup
- **Interactive Elements**: Mobile navigation, form validation, smooth scrolling
- **Performance**: Optimized images, lazy loading, minimal CSS/JS

## Sections

1. **Hero** - Welcome section with call-to-action
2. **Menu** - Coffee and pastry items with prices (Espresso, Latte, Pastries)
3. **Hours** - Business hours displayed in accessible format
4. **Location** - Address, contact info, and embedded Google Map
5. **Contact** - Functional contact form with client-side validation
6. **Footer** - Copyright, navigation links, and social media icons

## Technical Implementation

### HTML5
- Semantic elements (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy
- ARIA labels and attributes for accessibility
- Meta tags for SEO and social sharing

### CSS3
- CSS Custom Properties (Design Tokens)
- Flexbox and Grid layouts
- Responsive breakpoints
- Focus visible styles
- Print stylesheet considerations

### JavaScript
- Mobile navigation toggle
- Form validation with real-time feedback
- Smooth scrolling for anchor links
- Lazy loading images
- Schema.org JSON-LD for SEO

## File Structure

```
coffee-shop-website-responsive/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with design tokens and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # Project documentation
├── .gitignore          # Git ignore file
└── assets/             # Image assets (placeholder paths)
    ├── images/
    │   ├── hero.jpg
    │   ├── hero-mobile.jpg
    │   ├── hero-tablet.jpg
    │   ├── espresso.jpg
    │   ├── latte.jpg
    │   └── pastries.jpg
    └── icons/
        ├── phone.svg
        ├── email.svg
        └── location.svg
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels for navigation and form elements
- Sufficient color contrast (WCAG AA compliant)
- Keyboard navigable interface
- Focus visible indicators
- Screen reader only text for accessibility
- Proper heading hierarchy
- Label associations for form inputs
- Language attribute on HTML element
- Viewport meta tag for mobile responsiveness

## SEO Features

- Unique, descriptive title tag
- Meta description with relevant keywords
- Open Graph tags for social sharing
- Twitter card metadata
- Canonical URL
- Schema.org LocalBusiness structured data
- Proper heading hierarchy (H1-H6)
- Descriptive alt text for images
- Semantic HTML elements
- Fast loading performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/coffee-shop-website-responsive.git
   ```

2. Open `index.html` in your browser to view the website locally

3. For development, you can edit the HTML, CSS, and JavaScript files directly

## Deployment

This site is designed to be deployed to any static hosting service:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS Amplify

## Customization

### Colors
Edit the CSS variables in `:root` in `style.css`:
- `--color-primary`: Main brand color (#4B2E2A)
- `--color-secondary`: Secondary color (#8C6A43)
- `--color-accent`: Accent color (#D4A373)
- `--color-background`: Background color (#F9F5F0)
- `--color-text`: Text color (#2E2E2E)

### Content Updates
- Update menu items, prices, and descriptions in `index.html`
- Modify business hours in the Hours section
- Change location information and Google Maps embed
- Update contact information in the Contact and Location sections

### Images
Replace placeholder images in the `assets/images/` directory with your own:
- Hero images (desktop, mobile, tablet versions)
- Menu item photos
- Logo and icons

## License

This project is open source and available for personal and commercial use.

## Acknowledgments

- Design inspiration from modern coffee shop websites
- Accessibility guidelines from WCAG 2.1
- SEO best practices from Google's Search Central