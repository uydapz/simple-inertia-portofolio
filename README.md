🚀 Personal Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> A modern, interactive portfolio website showcasing my journey as a developer with stunning glassmorphism design and smooth animations.

✨ Features

🎨 **Modern Glassmorphism Design** - Beautiful glass-morphism effects with gradient borders
🌊 **Smooth Animations** - Engaging micro-interactions and transitions
📱 **Fully Responsive** - Optimized for all devices and screen sizes
⚡ **High Performance** - Built with Next.js 15 for lightning-fast loading
🎬 **Interactive Elements** - Video showcase, animated skill bars, and project cards
🌈 **Gradient Aesthetics** - Eye-catching cyan, purple, and blue color scheme
🔍 **SEO Optimized** - Meta tags and structured data for better visibility

🛠️ Tech Stack

Frontend
Framework: Next.js 15.1 (App Router)
UI Library: React 19
Language: TypeScript
Styling: TailwindCSS 3.4
Icons: Lucide React
Animations: CSS Animations + Tailwind transitions

Features Implementation
- Glassmorphism effects with backdrop-blur
- Gradient borders and shadows
- Sticky navigation with scroll detection
- Timeline-based education showcase
- Skill progress bars with shimmer effects
- Video integration with autoplay
- Responsive grid layouts

📂 Project Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Projects grid
│   │   └── Contact.tsx         # Contact form
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── video/
│   │   └── dapzVideo.mp4       # Profile video
│   └── images/                 # Project images
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

🚀 Getting Started

Prerequisites

Node.js 18+ 
npm, yarn, or pnpm

Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

🎨 Customization

Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#06b6d4', // cyan
      secondary: '#8b5cf6', // purple
      accent: '#3b82f6', // blue
    }
  }
}
```

Content
Update your personal information in the respective component files:
- `Hero.tsx` - Name, title, and introduction
- `About.tsx` - Biography and education history
- `Skills.tsx` - Technical skills and proficiency levels
- `Projects.tsx` - Portfolio projects and links

Styling
The project uses utility-first CSS with Tailwind. Key design patterns:
- `glass-morph` - Glassmorphism effect
- `glass-morph-light` - Light variant
- Gradient borders with `border-{color}/opacity`
- Hover effects with `group` and `group-hover:`

📦 Build for Production

```bash
npm run build
npm run start
```

🌐 Deployment

This portfolio is optimized for deployment on:

- **Vercel** (Recommended)
  ```bash
  vercel deploy
  ```

- **Netlify**
  - Connect your GitHub repository
  - Build command: `npm run build`
  - Publish directory: `.next`

- **Custom Server**
  ```bash
  npm run build
  npm run start
  ```

🎯 Key Sections

1. Hero Section
- Animated gradient text
- Call-to-action buttons
- Scroll indicator
- Particle effects

2. About Section
- Video showcase (landscape format)
- Origin story card
- Development journey
- Current focus
- Educational timeline with vertical progression

3. Skills Section
- Interactive skill cards
- Animated progress bars with shimmer effect
- Hover animations
- Color-coded proficiency levels

4. Projects Section
- Grid layout with project cards
- Live demo and GitHub links
- Technology tags
- Hover effects with image overlays

5. Contact Section
- Contact form
- Social media links
- Email integration

🎨 Design Philosophy

This portfolio embraces modern web design trends:

- **Glassmorphism**: Semi-transparent backgrounds with blur effects
- **Gradients**: Smooth color transitions for depth
- **Micro-interactions**: Subtle animations on hover and scroll
- **Dark Mode**: Eye-friendly dark theme with accent colors
- **Responsive**: Mobile-first approach
- **Performance**: Optimized assets and lazy loading

📝 License

This project is open source and available under the [MIT License](LICENSE).

🤝 Contributing

Contributions, issues, and feature requests are welcome!

👤 Author
Dapzverse

- Portfolio: [dapzgank.my.id](https://dapzgank.my.id)

⭐ Show Your Support
Give a ⭐️ if you like this project!


Built with ❤️ using Next.js and TailwindCSS
