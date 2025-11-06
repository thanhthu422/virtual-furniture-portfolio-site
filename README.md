# Virtual Furniture Portfolio Website

A beautiful virtual furniture portfolio site built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Next.js 15 App Router** - Modern React framework with server and client components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Product Gallery** - Filterable product showcase
- **Product Modals** - Detailed product views
- **Radix UI Components** - Accessible UI primitives

## 📁 Project Structure

```
virtual-furniture-portfolio-site/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI primitives (shadcn/ui)
│   │   ├── figma/          # Figma-inspired components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Navigation.tsx  # Navigation bar (client component)
│   │   ├── ProductCard.tsx # Product card component
│   │   ├── ProductGallery.tsx # Product gallery (client component)
│   │   └── ProductModal.tsx # Product detail modal
│   ├── styles/             # Global styles
│   │   └── globals.css     # Global CSS variables
│   └── index.css           # Tailwind CSS imports
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd virtual-furniture-portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## 🎨 Design System

The project uses a warm, cozy color palette:

- **Warm White**: `#FAF8F5` - Background
- **Cream**: `#F5F1EA` - Secondary background
- **Charcoal**: `#6B5E4C` - Primary text
- **Taupe**: `#8B7355` - Accent color
- **Light Beige**: `#E8E1D8` - Borders

## 🧩 Component Architecture

### Server Components (Default)
- `Hero` - Static hero section
- `ProductCard` - Product display card

### Client Components (with "use client")
- `Navigation` - Interactive navigation with mobile menu
- `ProductGallery` - Product filtering and modal state
- `ProductModal` - Dialog component with Radix UI

## 🔧 Configuration

### Next.js Config
- Image optimization configured for Unsplash
- TypeScript strict mode enabled

### Tailwind CSS
- Custom color palette
- Responsive breakpoints
- Tailwind CSS v4 with CSS variables

## 📦 Key Dependencies

- **next**: ^15.1.3
- **react**: ^18.3.1
- **typescript**: ^5.7.2
- **tailwindcss**: ^4.1.3
- **@radix-ui/react-***: Various UI primitives
- **lucide-react**: Icon library

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## 📝 Adding New Products

Products are currently defined in `src/components/ProductGallery.tsx`. To add new products, add objects to the `products` array:

```typescript
{
  id: 9,
  name: "Product Name",
  category: "Category",
  image: "https://...",
  description: "Product description",
  dimensions: "W x D x H",
  material: "Material description"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

