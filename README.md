# 157 WORK - E-commerce Landing Page

An e-commerce landing page faithful to the 157 WORK design, developed with Next.js, React, TypeScript and Tailwind CSS.

## 🚀 Features

- **Faithful design**: Exact reproduction of the 157 WORK interface
- **Navigation sidebar**: Dark sidebar with product categories
- **Product grid**: Responsive product display with hover effects
- **Promotional offers**: Special cards for deals and limited editions
- **Modern interface**: Clean design with refined typography and spacing
- **Responsive**: Adapted to all screens (mobile, tablet, desktop)

## 🛠️ Technologies

- **Next.js 14+** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **ESLint** for code quality

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start in production mode
npm start
```

## 🎨 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Main layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Header with navigation and search
│   ├── Sidebar.tsx      # Sidebar with categories
│   ├── ProductCard.tsx  # Individual product card
│   └── PromoCard.tsx    # Promotional offer card
├── data/
│   └── mockData.ts      # Mock data
└── types/
    └── index.ts         # TypeScript types
```

## 🎯 Main Components

### Header
- 157 WORK logo
- Search bar
- User and cart icons
- Free shipping bar
- Navigation breadcrumb

### Sidebar
- Category navigation
- Filters and sorting
- Company information
- Newsletter and social networks

### ProductCard
- Product image with hover
- Discount badges
- Color selection
- Rating system
- Prices with discounts

### PromoCard
- Images with overlay
- "SUPERDEAL" and "LIMITED EDITION" badges
- Large format prices
- Detailed descriptions

## 🚀 Getting Started

1. Clone the project
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

The landing page faithfully reproduces the design from the provided image with all visual and functional elements.

## 📱 Responsive Design

- **Mobile**: Adapted navigation, 1-column grid
- **Tablet**: 2-3 column grid
- **Desktop**: Full 4+ column grid with sidebar

## 🎨 Customization

Colors, styles and data can be easily modified in:
- `tailwind.config.js` for colors
- `src/data/mockData.ts` for products
- `src/components/` for components
