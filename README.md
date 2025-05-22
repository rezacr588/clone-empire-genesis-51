# Clone Empire

A modern React application for an AI agent platform focused on creating and managing autonomous AI clones that can handle sales, support, and operations for businesses.

## 🚀 Features

- **Autonomous AI Agent Platform**: Create and deploy AI clones with your voice, personality, and expertise
- **Modern UI**: Built with React, TypeScript, and TailwindCSS
- **Dark Mode Support**: Elegant light and dark themes
- **Responsive Design**: Mobile-first approach for all screens
- **Animation Effects**: Smooth typewriter, network visualization, and UI motion effects

## 🧰 Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query + React Context
- **Animation**: Custom hooks + CSS animations
- **Icons**: Lucide Icons

## 📂 Project Structure

```
clone-empire-genesis-51/
├── public/             # Static assets
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Base UI components (shadcn)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   └── styles/         # Global styles
├── .env                # Environment variables
└── vite.config.ts      # Vite configuration
```

## 🧩 Custom Hooks

This project uses several custom hooks to abstract complex logic:

- **`useTypewriter`**: Creates typewriter text animation effects
- **`useMouseTracking`**: Tracks mouse position for interactive elements
- **`useNetworkAnimation`**: Renders network node animations on canvas
- **`useTheme`**: Manages dark/light theme preferences
- **`useIsMobile`**: Detects mobile viewport

See the [hooks documentation](src/hooks/README.md) for details.

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/clone-empire-genesis-51.git
   cd clone-empire-genesis-51
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser to http://localhost:8080

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be located in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📝 Development Guidelines

### Component Structure

- Use functional components with hooks
- Follow the pattern established in the codebase
- Separate business logic from UI components

### Styling

- Use TailwindCSS utility classes
- For complex components, use composition over a single large component
- Follow the design system for colors and spacing

### Custom Hooks

- Place reusable logic in custom hooks
- Follow the naming convention: `use[Name]`
- Include proper JSDoc comments and TypeScript types
- Keep hooks focused on a single responsibility

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributors

- Your Name - Creator and maintainer
