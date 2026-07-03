# Portfolio Web App

A modern, high-performance portfolio website built with **Next.js 16**, **React**, and **Tailwind CSS**, featuring a "Deep Dark & Neon" aesthetic.

## 🌐 Live Website

[anhkhoa13-portfolio.vercel.app](https://anhkhoa13-portfolio.vercel.app/)

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Architecture**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theming**: `next-themes` with custom OKLCH color tokens.
- **Icons**: `lucide-react`, `@icons-pack/react-simple-icons`.

## ✨ Features

- **Deep Dark & Neon Theme**: Custom-engineered color palette using OKLCH for vibrant, accessible neon accents on a deep dark background.
- **Responsive Design**: Fully responsive layout with mobile-first approach, featuring a custom Glassmorphism Sheet Menu for mobile navigation.
- **Interactive Hero Section**: Split layout with a "Floating Code Card" visual that animates syntax-highlighted profile data.
- **Dynamic Content**: Data-driven components (Hero, About, Projects, Services) powered by centralized constants for easy maintenance.
- **Modern UI Components**:
  - **Glass Cards**: Translucent cards with neon glow effects.
  - **Timeline**: Vertical education pathway visualization.
  - **Theme Toggle**: Custom animated sun/moon toggle with neon glow.

## � Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── (main)/           # Main layout group
│   │   ├── _components/  # Page-specific components (Hero, About, etc.)
│   │   └── page.tsx      # Landing page
│   ├── globals.css       # Global styles & Tailwind variables
│   └── layout.tsx        # Root layout with Providers
├── components/           # Shared UI components
│   ├── ui/               # Shadcn primitives (Button, Card, Sheet...)
│   └── mode-toggle.tsx   # Theme switcher
├── constants/            # Centralized data files
│   ├── hero.ts           
│   ├── about.ts
│   ├── project.ts
│   └── service.ts
└── lib/                  # Utilities (clsx, twMerge)
```

## 🛠️ Getting Started

1. **Clone the repository**:

    ```bash
    git clone https://github.com/anhkhoa13-dev/Portfolio-WebApp.git
    cd Portfolio-WebApp
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    # or
    npm install
    ```

3. **Run the development server**:

    ```bash
    pnpm run dev
    # or
    npm run dev
    ```

4. **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📬 Contact

- **Email**: [tiendatnguyenxuan1607@gmail.com](mailto:contact@example.com)
- **GitHub**: [tiendatnguyenxuan-dev](https://github.com/tiendatnguyenxuan-dev)

