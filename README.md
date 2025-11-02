# Protocontents - Brand Identity for Tech Startups

A modern, colorful, feel-good single-page website for Protocontents, a digital marketing and branding studio specializing in tech startup brand identity.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

### Run End-to-End Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run tests
npm run test:e2e
```

Tests are located in `/tests/e2e` and cover:
- Page loading and navigation
- Form validation
- Responsive design at multiple breakpoints
- Accessibility checks
- Interactive elements

## 📁 Project Structure

```
/protocontents
 ├─ src/
 │   ├─ components/      # React components
 │   │   ├─ Header.jsx
 │   │   ├─ Hero.jsx
 │   │   ├─ About.jsx
 │   │   ├─ Services.jsx
 │   │   ├─ Work.jsx
 │   │   ├─ Contact.jsx
 │   │   └─ Footer.jsx
 │   ├─ styles/          # Global styles
 │   │   └─ index.css
 │   ├─ App.jsx          # Main app component
 │   └─ main.jsx         # Entry point
 ├─ tests/
 │   └─ e2e/             # Playwright tests
 ├─ tailwind.config.js   # Tailwind configuration
 ├─ vite.config.js       # Vite configuration
 ├─ playwright.config.js # Playwright configuration
 └─ package.json
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **Playwright** - End-to-end testing

## ✨ Features

- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered transitions and scroll reveals
- **Accessible** - WCAG AA compliant, keyboard navigable, semantic HTML
- **Form Validation** - Client-side validation with error messages
- **Modern Design** - Vibrant color palette and feel-good aesthetics

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:e2e` - Run Playwright tests

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: [Lucide React](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com) - Inter & Poppins

For detailed information about color choices, animations, and design decisions, see `DELIVERABLES.md`.

