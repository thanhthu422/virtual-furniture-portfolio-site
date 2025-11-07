# 🎨 AI GENERATION INSTRUCTIONS - Virtual Furniture Portfolio Website

**Complete guide for generating a Next.js 15 furniture portfolio site using AI tools**

---

## 🎯 PROJECT SUMMARY

Create a warm, cozy virtual furniture portfolio website with:

- **Tech Stack**: Next.js 15 (App Router), React, TypeScript, Tailwind CSS v4
- **Landing Page** with hero section and CTA
- **Product Gallery** with filtering by collections
- **Product Detail Pop-ups** using Radix UI Dialog
- **Aesthetic**: Warm, Cozy & Classic (inspired by Castlery, DWR)
- **Architecture**: Server Components by default, Client Components where needed
- **Technical**: Easy to maintain, expand, and update with GenAI

---

## 📦 QUICK START - COMPLETE PROJECT GENERATION

### Option 1: Generate Entire Project with AI

**Master Prompt for AI (Claude, ChatGPT, etc.):**

```
Create a Next.js 15 virtual furniture portfolio website with the following specifications:

TECH STACK:
- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS v4
- Radix UI components (Dialog, etc.)
- Lucide React icons

PROJECT STRUCTURE:
avirtual-furniture-portfolio-site/

├── src/
|   ├── app/
│   |    ├── about
|   │    |   └── page.tsx
│   |    ├── layout.tsx           # Root layout (metadata, global styles)
│   |    └── page.tsx             # Home page (main content + footer)
│   │    └── globals.css      # CSS custom properties
│   ├── components/
│   │   ├── ui/              # Radix UI primitives (shadcn/ui)
│   │   ├── Navigation.tsx   # CLIENT: Mobile menu state
│   │   ├── Hero.tsx         # SERVER: Static hero section
│   │   ├── ProductGallery.tsx  # CLIENT: Filtering + modal state
│   │   ├── ProductCard.tsx  # SERVER: Product display
│   │   └── ProductModal.tsx # Radix Dialog component
│   │   └── Footer.tsx       # Footer component
│   │   └── AboutUs.tsx      # AboutUs component
├── public/                  # Static assets (if any)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
└── prompt.md                # This file (AI generation guide)

DESIGN SYSTEM:
- Color Palette: Warm whites (#FAF8F5), cream (#F5F1EA), charcoal (#6B5E4C), taupe (#8B7355)
- Typography: Clean sans-serif (system fonts)
- Spacing: Consistent padding/margins
- Responsive: Mobile-first design

FEATURES:
1. Sticky navigation with mobile menu
2. Hero section with background image from Unsplash
3. Product gallery with category filtering (Sofas, Chairs, Tables, Storage, Seating)
4. Product cards with hover effects
5. Modal dialogs for product details
6. Footer with links

PRODUCTS DATA:
Include 8 sample products with:
- id, name, category, image (Unsplash URLs), description, dimensions, material

CONFIGURATION FILES:
- package.json with all dependencies
- next.config.ts (image optimization for Unsplash)
- tsconfig.json (Next.js settings)
- tailwind.config.ts
- .gitignore

Generate complete, production-ready code for all files.
```

### Option 2: Step-by-Step Generation (This Document)

Follow the sections below to generate each part individually.

---

## 📋 SECTION 1: VISUAL DESIGN GENERATION

### 1.1 Color Palette

**Prompt for AI:**

```
Generate a CSS color palette (hex codes) for a warm, cozy, classic furniture 
website. Include: warm whites, creams, beiges, warm grays, honey wood tones, 
soft terracotta, muted sage. Avoid cold whites and bright colors.
```

**Expected Result:**

```css
:root {
  /* Primary - Warm Neutrals */
  --warm-white: #FAF8F5;
  --cream: #F5F1E8;
  --warm-beige: #E8DCC8;
  --soft-taupe: #C9B8A0;
  
  /* Accent - Natural & Warm */
  --honey-wood: #D4A574;
  --walnut: #8B6F47;
  --soft-terracotta: #D4A79C;
  --muted-sage: #B8C5B0;
  
  /* Text */
  --charcoal: #3A3635;
  --warm-gray: #6B5F5A;
  --light-gray: #9B8F8A;
}
```

### 1.2 Typography

**Prompt for AI:**

```
Suggest a classic serif font for headlines (warm, timeless) and clean 
sans-serif for body text (readable). Provide CSS font-family declarations 
with web-safe fallbacks.
```

**Expected Result:**

```css
--font-heading: 'Playfair Display', 'Georgia', serif;
--font-body: 'Inter', 'Helvetica Neue', sans-serif;
```

### 1.3 Hero Image Generation

**Prompt for AI Image Generator (Midjourney/DALL-E/Stable Diffusion):**

```
A warm, cozy living room interior, realistic 3D render, soft natural 
lighting from window, comfortable beige sofa with cushions, wooden coffee 
table, armchair, small plants, cream walls, warm wood tones, inviting 
atmosphere, Scandinavian-meets-classic style, lived-in but tidy, afternoon 
golden hour lighting, 16:9 aspect ratio, 1920x1080px
```

### 1.4 Furniture Product Renders

**Prompt Template for AI Image Generator:**

```
Realistic 2D render of a [FURNITURE_TYPE], 3/4 view angle, warm [WOOD_TYPE] 
wood, [FABRIC_COLOR] upholstery, soft natural lighting, subtle shadows, 
warm white background OR transparent background, cozy and inviting aesthetic, 
classic timeless design, 4:3 aspect ratio, 1200x900px minimum resolution, 
product photography style
```

**Examples:**

```
1. "Realistic 2D render of a classic armchair, 3/4 view, warm walnut wood 
   frame, cream linen upholstery, soft natural lighting, subtle shadows, 
   transparent background, cozy aesthetic, 1200x900px"

2. "Realistic 2D render of a dining table, top-down 45° angle, honey oak 
   wood, natural grain visible, warm lighting, soft shadows, white 
   background, classic design, 1200x900px"

3. "Realistic 2D render of a wooden bookshelf, front 3/4 view, walnut 
   finish, clean modern lines with classic touches, warm lighting, 
   transparent background, 1200x900px"
```

---

## 📝 SECTION 2: CONTENT GENERATION

### 2.1 Homepage Headlines

**Prompt for AI:**

```
Write 5 warm, inviting headline options for a virtual furniture website 
that makes visitors feel at home. Include a short subheading (15-20 words) 
for each. Tone: cozy, classic, inspiring, not corporate or salesy.
```

**Expected Output Examples:**

```
1. "Find Your Perfect Space"
   Subheading: "Furniture that feels like home, crafted for comfort and 
   timeless style."

2. "Where Comfort Meets Classic Design"
   Subheading: "Discover beautifully rendered pieces that bring warmth 
   to every room."

3. "Create Your Sanctuary"
   Subheading: "Explore furniture that invites you to relax, unwind, 
   and truly feel at home."
```

### 2.2 Product Descriptions

**Prompt for AI (per product):**

```
Write a warm, concise product description (30-40 words) for a virtual 
furniture item: [FURNITURE_NAME]. Focus on: cozy feeling, materials, 
inspiration. Tone: inviting and inspiring, not salesy. Use sensory language.
```

**Examples:**

```
Input: "Classic Walnut Armchair"
Output: "Sink into the cozy embrace of this classic armchair, crafted with 
warm walnut tones and soft linen cushioning. Perfect for your reading corner 
or by the fireplace. A timeless piece that invites relaxation."

Input: "Rustic Oak Dining Table"
Output: "This warm oak dining table brings family together. Its timeless 
design and solid construction make every meal feel special, from weeknight 
dinners to holiday gatherings."
```

### 2.3 Collection Names

**Prompt for AI:**

```
Generate 10 warm, inviting collection names for a virtual furniture website. 
Categories: Living Room, Bedroom, Dining, Home Office, Movie-Inspired themes. 
Tone: Cozy, classic, inspiring but simple and clear.
```

**Expected Output:**

```
1. Living Room Essentials
2. Cozy Reading Corners
3. Elegant Dining Spaces
4. Serene Bedroom Retreats
5. Productive Home Offices
6. Parisian Apartment Collection
7. Coastal Cottage Series
8. Mid-Century Classics
9. Scandinavian Simplicity
10. Timeless Traditional
```

---

## 💻 SECTION 3: NEXT.JS PROJECT SETUP

### 3.1 Initialize Next.js Project

**Manual Setup:**

```bash
# Create Next.js project
npx create-next-app@latest virtual-furniture-portfolio --typescript --tailwind --app --no-src-dir

# Or use the package.json from this project
npm install
```

**AI-Generated package.json:**

**Prompt for AI:**

```
Generate a package.json for a Next.js 15 project with:
- Next.js 15.1.3+
- React 18.3.1+
- TypeScript 5.7+
- Tailwind CSS 4.1+
- All Radix UI primitives (dialog, accordion, dropdown, etc.)
- lucide-react for icons
- class-variance-authority, clsx, tailwind-merge
- Scripts: dev, build, start, lint
```

### 3.2 Next.js Configuration Files

**next.config.ts - Prompt for AI:**

```
Generate a next.config.ts file for Next.js 15 with:
- TypeScript configuration
- Image optimization for Unsplash domain (images.unsplash.com)
- Production-ready settings
```

**Expected Output:**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

**tsconfig.json - Prompt for AI:**

```
Generate a tsconfig.json for Next.js 15 with:
- Strict mode enabled
- Path alias @/* pointing to ./src/*
- Next.js plugin configured
- Modern ES2017 target
```

**tailwind.config.ts - Prompt for AI:**

```
Generate a tailwind.config.ts for Tailwind CSS v4 with:
- Content paths for src/app/, src/, src/components/
- No custom theme extensions needed (using CSS variables)
```

### 3.3 App Router Structure

**src/app/layout.tsx - Prompt for AI:**

```
Generate a Next.js 15 src/app/layout.tsx file with:
- Metadata export (title: "Virtual Furniture Portfolio Website", description)
- Import global CSS from ./globals.css
- Root HTML structure with lang="en"
- Clean, minimal layout
- TypeScript with proper types
```

**Expected Output:**

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtual Furniture Portfolio Website",
  description: "Curating beautiful virtual furniture for your design inspiration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen bg-[#FAF8F5]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

**app/page.tsx - Prompt for AI:**

```
Generate a Next.js 15 src/app/page.tsx (home page) with:
- Import Navigation, Hero, ProductGallery components from @/components/
- Main container with min-h-screen and warm background color (#FAF8F5)
- Footer section with:
  - 3-column grid (responsive)
  - Company info, Quick Links, Connect sections
  - Copyright notice
  - Warm color scheme (#6B5E4C background, #FAF8F5 text)
- TypeScript, server component (no "use client")
```

### 3.4 Component Generation

**Navigation Component - Prompt for AI:**

```
Generate src/components/Navigation.tsx as a Next.js client component with:
- "use client" directive at top
- TypeScript
- useState for mobile menu toggle
- Sticky navigation bar with warm background (#FAF8F5)
- Logo text "Virtuo"
- Desktop nav links: Home, Gallery, About, Contact (anchor links)
- Mobile hamburger menu using lucide-react Menu/X icons
- Responsive design (hidden on mobile, visible on md+)
- Tailwind CSS classes
- Smooth transitions
```

**Hero Component - Prompt for AI:**

```
Generate src/components/Hero.tsx as a Next.js server component with:
- TypeScript (no "use client" needed)
- Full-height section (70vh on mobile, 80vh on desktop)
- Background image from Unsplash (cozy living room)
- Gradient overlay (from charcoal #6B5E4C to transparent)
- Centered content with:
  - Headline: "Curated Virtual Furniture"
  - Subheading about the collection
  - CTA button linking to #gallery
- Responsive text sizing
- Tailwind CSS classes
```

**ProductGallery Component - Prompt for AI:**

```
Generate src/components/ProductGallery.tsx as a Next.js client component with:
- "use client" directive
- TypeScript with Product interface (id, name, category, image, description, dimensions, material)
- useState for selectedCategory and modal state
- Array of 8 sample products with Unsplash images
- Category filter buttons (All, Sofas, Chairs, Tables, Storage, Seating)
- Responsive grid (1 col mobile, 2 sm, 3 lg, 4 xl)
- ProductCard components with onClick handlers
- ProductModal component integration
- Warm color scheme
- Tailwind CSS classes
```

**ProductCard Component - Prompt for AI:**

```
Generate src/components/ProductCard.tsx as a server component with:
- TypeScript interface for props (name, image, category, onClick)
- Card with hover effects (shadow, scale)
- Aspect-square image container
- Category label (small, uppercase)
- Product name
- Cursor pointer
- Warm colors and borders
- Tailwind CSS classes
```

**ProductModal Component - Prompt for AI:**

```
Generate src/components/ProductModal.tsx using Radix UI Dialog with:
- TypeScript
- Import Dialog components from @/components/ui/dialog
- Props: product (Product | null), isOpen, onClose
- Two-column layout (image left, details right) on desktop
- Product image, name, category, description, dimensions, material
- Close button with X icon from lucide-react
- "Add to Collection" button (placeholder)
- Warm color scheme
- Tailwind CSS classes
```

### 3.5 Styling with Tailwind CSS

**src/app/globals.css - Prompt for AI:**
```
Generate src/app/globals.css with CSS custom properties for:
- @import "tailwindcss" directive
- Tailwind base, components, utilities layers
- Color palette (warm whites, creams, charcoal, taupe)
- Typography variables
- Spacing scale
- Border radius values
- Shadow definitions
- Transition timings
- Use semantic variable names
```

## 💻 SECTION 4: LEGACY CODE GENERATION (Vanilla JS/HTML)

### 4.1 Complete Style Guide CSS

**Prompt for AI:**

```
Generate a complete CSS file with custom properties for a warm, cozy 
furniture website. Include: color palette (warm whites, beiges, browns), 
typography scale (h1-h6, body), spacing system (8px base unit), border 
radius values, box shadows (subtle), transition timings. Use semantic 
variable names. Add base styles for body, headings, and links.
```

**Expected Output Structure:**

```css
:root {
  /* Colors */
  --color-warm-white: #FAF8F5;
  --color-cream: #F5F1E8;
  /* ... */
  
  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', 'Helvetica Neue', sans-serif;
  
  /* Type Scale */
  --text-h1: 48px;
  --text-h2: 36px;
  /* ... */
  
  /* Spacing (8px base) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  /* ... */
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  /* ... */
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--color-charcoal);
  background-color: var(--color-warm-white);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-charcoal);
  line-height: 1.2;
}

/* ... more base styles */
```

### 3.2 products data

**Use List Typescript Product**

```ts
{
    id: 1,
    name: "Modern Velvet Sofa",
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1759722667456-71e7bfd118b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjM3MDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A luxurious velvet sofa with clean lines and contemporary styling. Perfect for modern living spaces seeking comfort and elegance.",
    dimensions: "84\" W x 36\" D x 32\" H",
    material: "Velvet upholstery, hardwood frame"
  },
  {
    id: 2,
    name: "Minimalist Armchair",
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1759722667079-1a4e23d9ead9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJtY2hhaXJ8ZW58MXx8fHwxNzYyNDAyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sleek and comfortable armchair with a minimalist design. Ideal for reading nooks or accent seating in contemporary interiors.",
    dimensions: "30\" W x 32\" D x 34\" H",
    material: "Linen fabric, oak legs"
  },
  {
    id: 3,
    name: "Rustic Coffee Table",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1609413000158-859980fa07e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NjI0MDI0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Handcrafted wooden coffee table with a natural finish. Brings warmth and organic beauty to any living space.",
    dimensions: "48\" W x 28\" D x 18\" H",
    material: "Solid reclaimed wood"
  },
  {
    id: 4,
    name: "Contemporary Dining Chair",
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1758977404510-6ab7e07ff1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjBjaGFpcnxlbnwxfHx8fDE3NjIzNDk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Stylish dining chair featuring ergonomic design and premium materials. Combines comfort with modern aesthetics.",
    dimensions: "18\" W x 22\" D x 36\" H",
    material: "Molded plastic, steel legs"
  },
  {
    id: 5,
    name: "Elegant Nightstand",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwbmlnaHRzdGFuZHxlbnwxfHx8fDE3NjIzMzE2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Refined bedside table with ample storage and sophisticated detailing. Perfect companion for modern bedrooms.",
    dimensions: "20\" W x 16\" D x 24\" H",
    material: "Walnut veneer, brass hardware"
  },
  {
    id: 6,
    name: "Modern Bookshelf",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMzA3ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Spacious bookshelf with clean lines and adjustable shelving. Ideal for displaying books, art, and decorative objects.",
    dimensions: "36\" W x 12\" D x 72\" H",
    material: "Oak wood, metal brackets"
  },
  {
    id: 7,
    name: "Plush Ottoman",
    category: "Seating",
    image: "https://images.unsplash.com/photo-1626551039948-ddd7e595fe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjQwMjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Versatile ottoman perfect for extra seating or as a footrest. Features soft upholstery and a sturdy wooden base.",
    dimensions: "24\" W x 24\" D x 18\" H",
    material: "Fabric upholstery, hardwood"
  },
  {
    id: 8,
    name: "Sleek Console Table",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1752061289543-de2e7720b029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zb2xlJTIwdGFibGUlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyNDAyNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Streamlined console table perfect for entryways or behind sofas. Features elegant proportions and quality craftsmanship.",
    dimensions: "54\" W x 14\" D x 30\" H",
    material: "Metal frame, glass top"
  },
```

**About us page content:***
```
Mission: bringing peace of mind to your home through thoughtful crafts and carefully sourced materials
Story: Our company was born from the search for 'home.' When our founder couldn't find market products that felt right—discovering only poor designs and unsustainable materials—he decided to create his own.


He began handcrafting furniture and decor for his own space, pieces with purpose and quality. His family saw the passion in his work and encouraged him to share it. From those humble beginnings in a small shop, a personal hobby has grown into a business that shares that same feeling of authentic, sustainable living with a wider public.
How we build: 
from carefully selected materials (climate awareness, locally sourced, sustainable)
how we prepare and process our materials: efficiency through good planning and applying technologies
how we build: efficiency through good planning, technologies
and present our final products: keep home in mind, prevent wastefulness
```
** About Us page: `How we build` just use grid **

### 3.4 Typescript - Filter by Collection

**Prompt for AI:**

```
Write JavaScript function to filter products by collection. Function takes 
collection name (string or 'all'), filters products array, calls 
displayProducts(), and updates active state on filter buttons. Include 
event listener setup for filter buttons with data-collection attribute.
```

### 3.5 Typescript - Product Modal/Pop-up

**Prompt for AI:**

```Write JavaScript to: 1) Open modal when product card clicked, 2) Populate
modal with product data (image, name, description, collection, materials), 
3) Close modal on X button click or outside click, 4) Close on ESC key. 
Modal has id="productModal", uses data attributes for content elements.
```

### 3.6 Complete HTML Structure

**Prompt for AI:**

```Generate complete HTML5 structure for a furniture portfolio website with:
1) Header with logo and nav links (Home, Collections)
2) Hero section with background image, h1 headline, subheading, CTA button
3) Product gallery section with filter buttons and product grid container
4) Modal overlay for product details with close button, image, and info
5) Simple footer with copyright
```

---

## 🚀 SECTION 5: DEPLOYMENT INSTRUCTIONS

### 5.1 GitHub Setup

**Instructions:**

```bash
# Initialize git repository
git init

# Create .gitignore (Next.js specific)
cat > .gitignore << EOF
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

# Commit and push
git add .
git commit -m "Initial commit: Next.js furniture portfolio"
git branch -M main
git remote add origin [YOUR_REPO_URL]
git push -u origin main
```

### 5.2 Vercel Deployment (Recommended for Next.js)

**Quick Steps:**

```
1. Go to vercel.com and sign up with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: npm run build (auto-filled)
   - Output Directory: .next (auto-filled)
5. Click "Deploy"
6. Get deployment URL (e.g., virtual-furniture-portfolio.vercel.app)
7. Every push to main = automatic deployment
```

**Environment Variables (if needed):**

- Add in Vercel dashboard under Settings > Environment Variables
- For Unsplash API keys, analytics, etc.

### 5.3 Alternative Deployment Options

**Netlify:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

## ✅ SECTION 6: IMPLEMENTATION CHECKLIST (Next.js)

### Phase 1: Project Setup

- [ ] Initialize Next.js 15 project with TypeScript and Tailwind CSS
- [ ] Install dependencies (Radix UI, Lucide icons, etc.)
- [ ] Create project structure (src/app/, src/components/)
- [ ] Configure next.config.ts for image optimization
- [ ] Set up tsconfig.json with path aliases
- [ ] Configure tailwind.config.ts
- [ ] Create .gitignore for Next.js

### Phase 2: Design Assets & Content

- [ ] Define color palette in CSS variables (globals.css)
- [ ] Choose typography (system fonts or Google Fonts)
- [ ] Source hero image from Unsplash (1920x1080px)
- [ ] Source 8-15 product images from Unsplash (1200x900px each)
- [ ] Write homepage headline + subheading
- [ ] Write 8-15 product descriptions (30-40 words each)
- [ ] Define product categories (Sofas, Chairs, Tables, Storage, Seating)

### Phase 3: Core Components Development

- [ ] Create src/app/layout.tsx with metadata and global styles
- [ ] Create src/app/page.tsx with main layout and footer
- [ ] Create `src/app/about/page.tsx` with mission and story content
- [ ] Build Navigation.tsx (client component with mobile menu)
- [ ] Build Hero.tsx (server component with background image)
- [ ] Build ProductGallery.tsx (client component with filtering)
- [ ] Build ProductCard.tsx (server component)
- [ ] Build ProductModal.tsx (using Radix UI Dialog)
- [ ] Build `Footer.tsx` (server component) and add into layout
- [ ] Add Radix UI components to src/components/ui/ (if using shadcn/ui)

### Phase 4: Styling & Responsiveness

- [ ] Create src/app/globals.css with CSS custom properties, with Tailwind directives
- [ ] Implement responsive navigation (mobile hamburger menu)
- [ ] Style product grid (1 col mobile, 2 sm, 3 lg, 4 xl)
- [ ] Add hover effects and transitions
- [ ] Test responsive design on all breakpoints
- [ ] Ensure warm color scheme throughout

### Phase 5: Data & State Management

- [ ] Define Product TypeScript interface
- [ ] Create products array with sample data (in ProductGallery.tsx)
- [ ] Implement category filtering with useState
- [ ] Implement modal state management
- [ ] Add product click handlers
- [ ] Test filtering functionality
- [ ] Verify modal open/close behavior

### Phase 6: Testing & Optimization

- [ ] Test on Chrome, Safari, Firefox
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test product filtering (all categories)
- [ ] Test modal open/close (click outside, ESC key)
- [ ] Check Lighthouse scores (Performance, Accessibility, SEO)
- [ ] Verify all images load correctly
- [ ] Test with slow 3G network
- [ ] Check for console errors/warnings
- [ ] Verify TypeScript compilation (npm run build)

### Phase 7: Deployment

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Connect repository to Vercel
- [ ] Configure environment variables (if any)
- [ ] Deploy to production
- [ ] Test live site thoroughly
- [ ] Set up automatic deployment (push to main)
- [ ] Configure custom domain (optional)
- [ ] Share URL with stakeholders

### Phase 8: Documentation

- [ ] Write comprehensive README.md
- [ ] Document project structure
- [ ] Document how to add new products
- [ ] Document how to add new pages/routes
- [ ] Document deployment process
- [ ] Create MIGRATION.md (if migrating from another stack)
- [ ] Update .github/copilot-instructions.md
- [ ] Add code comments for complex logic

---

## 🎯 QUALITY CHECKLIST

### Visual Design

- [ ] Colors feel warm and cozy (not cold/sterile)
- [ ] Typography is classic and readable
- [ ] Generous white space throughout
- [ ] Product images are high-quality
- [ ] Consistent visual style across all pages

### User Experience

- [ ] Navigation is intuitive and clear
- [ ] Products are easy to browse
- [ ] Information is uncluttered
- [ ] Modal opens/closes smoothly
- [ ] Website feels welcoming and inviting

### Technical

- [ ] Website loads in <3 seconds
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Images optimized for web
- [ ] Code is clean and organized

### Maintenance & Expandability

- [ ] Products stored in JSON (easy to update)
- [ ] CSS uses variables (easy to restyle)
- [ ] Modular code structure
- [ ] Clear file organization
- [ ] Can add products without touching code

---

## 💡 SECTION 7: TIPS FOR AI GENERATION

### When Generating Images

- Always specify "warm lighting" and "cozy atmosphere"
- Use terms like "realistic render" or "product photography style"
- Specify resolution (minimum 1200x900px for products)
- Request "transparent background" OR "warm white background"
- Avoid words like "minimalist" or "modern" (too cold)
- Use Unsplash for quick prototyping (free, high-quality images)

### When Generating Next.js Code

- **Always specify Next.js version**: "Next.js 15 with App Router"
- **Specify component type**: "server component" or "client component with 'use client'"
- **Request TypeScript**: "TypeScript with proper types and interfaces"
- **Specify imports**: "Use @/ path alias for imports from src/"
- **Request responsive design**: "Mobile-first responsive design with Tailwind CSS"
- **Ask for error handling**: "Include error boundaries and loading states"
- **Specify styling approach**: "Use Tailwind CSS v4 with CSS custom properties"

**Example Prompt:**

```
Generate a Next.js 15 client component for a product gallery with TypeScript.
Use "use client" directive, useState for filtering, Tailwind CSS for styling,
and @/ path alias for imports. Make it responsive (mobile-first).
```

### When Generating React Components

- **Server Components (default)**: No hooks, no browser APIs, better performance
  - Use for: Static content, data fetching, layouts
  - Examples: Hero, ProductCard, Footer

- **Client Components ("use client")**: Can use hooks and browser APIs
  - Use for: Interactive elements, state management, event handlers
  - Examples: Navigation (mobile menu), ProductGallery (filtering), Modals

- **Always define TypeScript interfaces** for props and data structures
- **Use semantic HTML** (nav, main, section, article, footer)
- **Follow accessibility best practices** (ARIA labels, keyboard navigation)

### When Generating Content

- Emphasize "warm, cozy, inviting" tone
- Request "conversational" not "corporate" language
- Specify word count (e.g., "30-40 words")
- Ask for "sensory language" in descriptions
- Avoid "salesy" or "marketing" tone
- Focus on feelings and experiences, not just features

### When Generating Styles

- **Use CSS custom properties** for theme values (colors, spacing, etc.)
- **Mobile-first approach**: Base styles for mobile, then use md:, lg:, xl: breakpoints
- **Consistent spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, 24, 32, etc.)
- **Warm color palette**: Stick to warm whites, creams, beiges, browns
- **Subtle animations**: Use transition-all duration-300 for smooth effects
- **Accessibility**: Ensure sufficient color contrast (WCAG AA minimum)

---

## 📞 SECTION 8: TROUBLESHOOTING & COMMON ISSUES

### Next.js Specific Issues

**"Module not found" errors:**

- Check that path aliases are configured in tsconfig.json
- Verify imports use @/ prefix (e.g., @/components/Hero)
- Ensure file extensions are correct (.tsx for React components)
- Run `npm install` to ensure all dependencies are installed

**"use client" directive errors:**

- Add "use client" at the very top of the file (before imports)
- Only use in components that need hooks or browser APIs
- Don't use in server components (default)

**Hydration errors:**

- Ensure server and client render the same HTML
- Avoid using browser-only APIs (window, document) in server components
- Use useEffect for client-only code
- Check for mismatched HTML tags

**Image optimization errors:**

- Verify next.config.ts has correct remotePatterns for Unsplash
- Use next/image component instead of <img> for optimization
- Ensure image URLs are valid and accessible

**TypeScript errors:**

- Run `npm run build` to see all type errors
- Define proper interfaces for props and data
- Use `type` or `interface` for component props
- Enable strict mode in tsconfig.json

**Tailwind CSS not working:**

- Verify tailwind.config.ts has correct content paths
- Check that @import "tailwindcss" is in index.css
- Restart dev server after config changes
- Clear .next folder and rebuild: `rm -rf .next && npm run dev`

### General Issues

**Development server issues:**

1. Check terminal for error messages
2. Verify port 3000 is not in use: `lsof -ti:3000 | xargs kill -9`
3. Clear cache: `rm -rf .next node_modules package-lock.json && npm install`
4. Restart dev server: `npm run dev`

**Build failures:**

1. Run `npm run build` to see detailed errors
2. Fix TypeScript errors first
3. Check for missing dependencies
4. Verify all imports are correct
5. Ensure no console.log or debugger statements in production code

**Styling issues:**

1. Check browser DevTools for applied styles
2. Verify CSS custom properties are defined in globals.css
3. Ensure Tailwind classes are spelled correctly
4. Check for conflicting styles
5. Use browser's responsive design mode to test breakpoints

**State management issues:**

1. Verify useState is only used in client components
2. Check that state updates are triggering re-renders
3. Use React DevTools to inspect component state
4. Ensure event handlers are properly bound

**Modal/Dialog issues:**

1. Verify Radix UI Dialog is installed: `npm list @radix-ui/react-dialog`
2. Check that Dialog.Root, Dialog.Trigger, Dialog.Content are properly nested
3. Ensure isOpen and onOpenChange props are connected to state
4. Test keyboard navigation (ESC to close)

### Debugging Tips

**Enable verbose logging:**

```bash
# Run dev server with verbose output
npm run dev -- --verbose
```

**Check Next.js build output:**

```bash
# See bundle sizes and route info
npm run build
```

**Use React DevTools:**

- Install React DevTools browser extension
- Inspect component tree and props
- Monitor state changes and re-renders

**Use Next.js built-in debugging:**

```typescript
// Add to next.config.ts for debugging
const nextConfig: NextConfig = {
  reactStrictMode: true, // Highlights potential problems
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
```

### Getting Help

If you're still stuck:

1. **Check Next.js documentation**: <https://nextjs.org/docs>
2. **Search GitHub issues**: <https://github.com/vercel/next.js/issues>
3. **Ask on Discord**: <https://nextjs.org/discord>
4. **Stack Overflow**: Tag questions with [next.js] and [typescript]
5. **Vercel Support**: If deployed on Vercel, use their support chat

---

## 🎯 SECTION 9: QUICK REFERENCE

### Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Package Management
npm install              # Install all dependencies
npm install <package>    # Add new dependency
npm uninstall <package>  # Remove dependency
npm update               # Update dependencies

# Git & Deployment
git add .
git commit -m "message"
git push origin main     # Auto-deploys on Vercel

# Troubleshooting
rm -rf .next             # Clear Next.js cache
rm -rf node_modules      # Clear dependencies
npm install              # Reinstall dependencies
lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
```

### Project File Structure

```
virtual-furniture-portfolio-site/

├── src/
|   ├── app/
│   |    ├── about
|   │    |   └── page.tsx         #About us page
│   |    └── layout.tsx           # Root layout (metadata, global styles, header + footer)
│   |    └── page.tsx             # Home page (main content)
│   │    └── globals.css          # CSS custom properties
│   ├── components/
│   │   ├── ui/              # Radix UI primitives (shadcn/ui)
│   │   ├── Navigation.tsx   # CLIENT: Mobile menu state
│   │   ├── Hero.tsx         # SERVER: Static hero section
│   │   ├── ProductGallery.tsx  # CLIENT: Filtering + modal state
│   │   ├── ProductCard.tsx  # SERVER: Product display
│   │   └── ProductModal.tsx # Radix Dialog component
│   │   └── AboutUs.tsx      # About Us component
├── public/                  # Static assets (if any)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
└── prompt.md                # This file (AI generation guide)
```

### Key Dependencies

```json
{
  "next": "^15.1.3",
  "react": "^18.3.1",
  "typescript": "^5.7.2",
  "tailwindcss": "^4.1.3",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "lucide-react": "^0.468.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

### Color Palette Reference

```css
/* Warm Neutrals */
--warm-white: #FAF8F5;
--cream: #F5F1EA;
--light-beige: #E8E1D8;

/* Text Colors */
--charcoal: #6B5E4C;
--taupe: #8B7355;

/* Usage */
background-color: #FAF8F5;  /* Warm white background */
color: #6B5E4C;             /* Charcoal text */
border-color: #E8E1D8;      /* Light beige borders */
```

### Component Patterns

**Server Component (default):**

```typescript
// src/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="...">
      {/* Static content */}
    </section>
  );
}
```

**Client Component (with state):**

```typescript
// src/components/ProductGallery.tsx
"use client";

import { useState } from 'react';

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="...">
      {/* Interactive content */}
    </section>
  );
}
```

### Useful Resources

- **Next.js Docs**: <https://nextjs.org/docs>
- **React Docs**: <https://react.dev>
- **Tailwind CSS**: <https://tailwindcss.com/docs>
- **Radix UI**: <https://www.radix-ui.com/primitives>
- **shadcn/ui**: <https://ui.shadcn.com>
- **Lucide Icons**: <https://lucide.dev>
- **Unsplash**: <https://unsplash.com>
- **TypeScript**: <https://www.typescriptlang.org/docs>
- **Vercel Deployment**: <https://vercel.com/docs>

---

## 📝 NOTES

### Hero Image Source

Generated from Unsplash: <https://images.unsplash.com/photo-1760981348070-ffa100647759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbSUyMHNvZnQlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjI0MDI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral>

### Version History

- **v2.0** (Current): Next.js 15 with App Router, TypeScript, Tailwind CSS v4
- **v1.0**: Vite + React (migrated to Next.js)

### Future Enhancements

- Add dynamic product pages with `/products/[id]` routes
- Implement Server Actions for form submissions
- Add page-specific metadata for SEO
- Replace `<img>` with Next.js `<Image>` component throughout
- Add loading states and error boundaries
- Implement API routes for backend functionality
- Add authentication (if needed)
- Integrate CMS (Sanity, Contentful, etc.)
- Add analytics (Vercel Analytics, Google Analytics)
- Implement internationalization (i18n)

---

**Last Updated**: 2025-11-06
**Project**: Virtual Furniture Portfolio Website
**Stack**: Next.js 15 + TypeScript + Tailwind CSS v4

## Project Overview
- **Framework**: Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS v4
- **Purpose**: Virtual furniture portfolio site with a filterable product gallery, product modals, and a modern, responsive UI.
- **Key UI**: Uses shadcn/ui (Radix UI primitives) and Lucide icons.

## Architecture & Patterns
- **App Router**: All routing and layouts are in `src/app/` (e.g., `layout.tsx`, `page.tsx`).
- **Components**: Main React components in `src/components/`.
  - `ui/`: Reusable UI primitives (from shadcn/ui, Radix UI)
  - `Hero.tsx`: Static hero section (server component)
  - `Navigation.tsx`: Client navigation bar ("use client")
  - `ProductGallery.tsx`: Client component, manages product list/filtering
  - `ProductModal.tsx`: Client dialog/modal for product details
- **Products**: Defined in a local array in `ProductGallery.tsx`. To add products, update this array.
- **Styling**: Tailwind CSS v4 with custom color palette and CSS variables. Global styles in `src/styles/globals.css`.

## Developer Workflows
- **Install**: `npm install`
- **Dev Server**: `npm run dev` (http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Production**: `npm run start`
- **Deployment**: Vercel (auto-detects Next.js)

## Conventions & Tips
- **Component Types**: Server components by default; use `"use client"` for interactivity/state.
- **UI Primitives**: Prefer using/adding to `src/components/ui/` for new UI elements.
- **No API/Backend**: All data is static/local; no backend or API calls.
- **Images**: Use Unsplash links for product images.
- **Design System**: Follow the warm, cozy palette in README.md.

## Examples
- **Add Product**: Edit `products` array in `ProductGallery.tsx`.
- **Add UI**: Place new primitives in `src/components/ui/`.
- **Update Navigation**: Edit `Navigation.tsx` (client component).

## References
- See `README.md` for full setup, design, and deployment details.
- See `src/components/` for all main UI logic.

---

For any unclear or missing conventions, consult the README or ask for clarification.