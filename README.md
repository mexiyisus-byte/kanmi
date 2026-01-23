# KANMI - Premium Event Drinks

A modern, editorial-style landing page for KANMI, a premium mobile coffee and cocktail bar service for events.

## About KANMI

KANMI specializes in serving specialty coffee, matcha, desserts, and cocktails in unique transparent cans or traditional cups. The service provides professional baristas and mixologists for event catering.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mexiyisus-byte/kanmi.git
   cd kanmi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
kanmi/
├── components/
│   ├── ui/
│   │   └── Button.tsx       # Reusable button component
│   ├── Background.tsx       # Animated gradient background
│   ├── Hero.tsx             # Hero section
│   ├── Concept.tsx          # Brand concept section
│   ├── Showcase.tsx         # Menu gallery
│   ├── HowItWorks.tsx       # Process steps
│   ├── Packages.tsx         # Pricing tiers
│   ├── SocialProof.tsx      # Testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── App.tsx                  # Main application
├── index.tsx                # Entry point
├── index.html               # HTML template
├── types.ts                 # TypeScript definitions
└── vite.config.ts           # Vite configuration
```

## License

All rights reserved.
