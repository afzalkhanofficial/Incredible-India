<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</p>

<h1 align="center">Incredible India — Tourism Website</h1>

<p align="center">
  <strong>A stunning, fully responsive multi-page website promoting the beauty, culture, and heritage of India.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-pages">Pages</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-license">License</a>
</p>

---

## 📋 Overview

**Incredible India** is a visually rich, multi-page static website designed to showcase India as a premier travel destination. The site features immersive hero sections, interactive elements, smooth animations, and a modern glassmorphism design language — all built with pure HTML, CSS, and vanilla JavaScript on top of Bootstrap 5.

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Navigation** — Fixed transparent navbar with backdrop blur and scroll-aware shadow
- **Tricolor Text Gradient** — Hero text styled with the Indian flag's saffron, white, and green
- **CSS Custom Properties** — Centralized design tokens for colors, fonts, radii, and transitions
- **Dark Mode Ready** — Full dark mode styles defined across all pages
- **Smooth Animations** — Float, pulse, and fade animations using CSS keyframes
- **Custom Scrollbar** — Styled WebKit scrollbar matching the site's aesthetic

### ⚡ Interactive Elements
- **Animated Statistics Counter** — Numbers count up sequentially when scrolled into view
- **Festival Carousel** — Native horizontal scrolling for festival cards
- **FAQ Accordion** — Single-open accordion pattern with smooth max-height transitions
- **Contact Form** — Validated form with loading state and submission feedback
- **Newsletter Subscription** — Email validation with user-friendly alerts
- **Mobile Menu Auto-Close** — Menu closes on outside click or link selection

### 📱 Responsive Design
- Fully responsive across all breakpoints (mobile, tablet, desktop)
- Bootstrap 5 grid system with custom media query overrides
- Touch-friendly interactive elements
- Optimized typography scaling for smaller screens

## 📄 Pages

### 🏠 Home (`index.html`)
The landing page showcasing India's highlights:
| Section | Description |
|---|---|
| **Hero** | Full-viewport header with background image and tricolor gradient text |
| **Why Visit India** | 6 feature cards (Heritage, Culture, Geography, Hospitality, Spirituality, Languages) |
| **Featured Destinations** | Masonry-style grid featuring Taj Mahal, Kerala, Jaipur, Himalayas & more |
| **Land of Festivals** | Horizontal scrolling carousel with Diwali, Eid, Pongal, Christmas |
| **Cultural Tapestry** | Language orbit visualization + living arts gallery |
| **Statistics** | Animated counters for Heritage Sites, Languages, Annual Tourists, States |
| **Call to Action** | Gradient CTA section encouraging exploration |
| **Footer** | Multi-column footer with links, newsletter, and social icons |

### 🧭 Explore (`explore.html`)
A deep dive into India's nature, arts, and celebrations:
| Section | Description |
|---|---|
| **Hero** | Full-viewport with category chips and call-to-action |
| **Nature & Heritage** | Image cards highlighting natural and historical landmarks |
| **Seasonal Travel Guide** | 4 interactive season cards (Winter, Summer, Monsoon, Post-Monsoon) with packing checklists and best places |
| **Arts & Expression** | Art form cards and language exploration with gradient overlays |
| **Life & Celebrations** | Bento grid layout showcasing people, traditions, and festivals |
| **FAQ** | Accordion-style frequently asked questions |
| **Footer** | Shared footer (inherited from styles.css) |

### 📞 Contact (`contact.html`)
A contact and support page:
| Section | Description |
|---|---|
| **Hero** | Background pattern with trust indicator statistics |
| **Contact Info Cards** | Phone, email, and address cards with icon boxes |
| **Contact Form** | Full form with first/last name, email, phone, subject, and message fields |
| **Map** | Embedded Google Maps iframe |
| **FAQ** | Contact-specific FAQ accordion |
| **Newsletter** | Inline newsletter subscription card |
| **Footer** | Shared footer (inherited from styles.css) |

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **HTML5** | — | Semantic page structure |
| **CSS3** | — | Styling, animations, custom properties, media queries |
| **JavaScript** | Vanilla | Basic DOM manipulation and event handling |
| **Bootstrap** | 5.3.2 | Grid system, responsive utilities, navbar component |
| **Bootstrap Icons** | 1.11.3 | Icon library |
| **Google Fonts** | — | Playfair Display (headings) & Poppins (body) |
| **Material Icons** | — | UI icons and symbols |

## 📁 Project Structure

```
incredible-india/
│
├── index.html              # Home page
├── explore.html            # Explore India page
├── contact.html            # Contact & FAQ page
├── README.md               # Project documentation
│
├── css/
│   ├── styles.css          # Shared styles (variables, base, navbar, footer, utilities)
│   ├── explore.css         # Explore page-specific styles
│   └── contact.css         # Contact page-specific styles
│
├── js/
│   ├── script.js           # Shared JS (navbar, scroll, menu, newsletter, validation)
│   ├── home.js             # Home page JS (stats animation)
│   ├── explore.js          # Explore page JS (FAQ accordion)
│   └── contact.js          # Contact page JS (form, FAQ, newsletter)
│
└── assest/
    ├── p1.jpg              # Hero background
    ├── p2.jpg              # Explore hero background
    └── p3–p14.png          # Section images (destinations, festivals, gallery, etc.)
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required — this is a pure static website.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/incredible-india.git
   ```

2. **Navigate to the project**
   ```bash
   cd incredible-india
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve .
   ```

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#F7941D` | Brand orange — buttons, links, accents |
| `--primary-hover` | `#e6830d` | Hover/active state |
| `--secondary` | `#1A202C` | Dark headings |
| `--background-light` | `#FDFBF7` | Page background |
| `--background-dark` | `#1a1a1a` | Dark mode background |
| `--gold-accent` | `#D4AF37` | Decorative gold elements |

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Playfair Display** | 400, 600, 700 | Headings, display text |
| **Poppins** | 300, 400, 500, 600 | Body text, UI elements |

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Bootstrap](https://getbootstrap.com/) — Responsive grid and components
- [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins typefaces
- [Bootstrap Icons](https://icons.getbootstrap.com/) — Icon library
- [Material Icons](https://fonts.google.com/icons) — Google Material icon sets

---

<p align="center">
  Made with ❤️ for <strong>Incredible India</strong>
</p>
