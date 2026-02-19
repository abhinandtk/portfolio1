# Alex Chen — Portfolio

A dark, editorial-style developer portfolio inspired by [edwinle.com](https://edwinle.com), built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

## ✨ Features

- **Custom cursor** with smooth trailing ring animation
- **Parallax hero** with Pexels background image
- **Marquee tech stack** banner
- **Project cards** with grayscale-to-color hover effect (Pexels images)
- **Work history** with staggered scroll reveals
- **About section** with mosaic photo grid (Pexels images)
- **Big CTA footer** with contact email
- **Noise grain overlay** for texture
- **Scroll-triggered animations** via custom `useInView` hook
- **Mobile responsive** with hamburger menu
- Fully **TypeScript** typed

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Cormorant Garamond + Outfit (Google Fonts)
- **Images**: Next.js `<Image>` with Pexels CDN

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, cursor, noise overlay
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page
├── components/
│   ├── Cursor.tsx        # Custom cursor with lag effect
│   ├── Nav.tsx           # Sticky nav + mobile menu
│   ├── Hero.tsx          # Full-screen hero with parallax
│   ├── MarqueeBanner.tsx # Scrolling tech stack strip
│   ├── Projects.tsx      # 2x2 project card grid
│   ├── WorkHistory.tsx   # Experience list
│   ├── About.tsx         # Photo mosaic + skills grid
│   └── Footer.tsx        # Big CTA + links
├── hooks/
│   └── useInView.ts      # IntersectionObserver hook
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## ✏️ Customization

Replace all sample data with your own in:
- `components/Hero.tsx` — name, tagline, CTA
- `components/Projects.tsx` — project names, descriptions, tags, images
- `components/WorkHistory.tsx` — job titles, companies, dates
- `components/About.tsx` — bio, skills, photos
- `components/Footer.tsx` — email, social links, location
- `app/layout.tsx` — page `<title>` and meta description

## 🖼 Images

All images use the **Pexels CDN** via Next.js `<Image>` for automatic optimization (WebP, lazy loading, blur placeholder). To use your own images, place them in `/public` and update the `src` props.
