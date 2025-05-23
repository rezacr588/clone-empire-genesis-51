# Clone Empire Genesis

A futuristic web application for The Clone Empire, featuring AI agent management and visualization.

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

## Codebase Architecture

The codebase has been refactored for better reusability, maintainability, and reduced code duplication. Below is an overview of the key architectural components:

### Component Structure

```
src/
  components/
    animations/                  # Animation-related components
      AnimatedArrowRight.tsx     # Individual animated SVG components
      AnimatedCalendar.tsx
      AnimatedFallbackIcon.tsx
      AnimatedTag.tsx
      AnimatedUser.tsx
      MotionCard.tsx             # Wrapper for animated cards/sections
      index.tsx                  # Exports all animation components
    blog/                        # Blog-specific components
      BlogPostCard.tsx           # Card for blog posts
      FeaturedBlogPost.tsx       # Featured blog post component
      index.tsx                  # Exports all blog components
    ui/                          # General UI components
      CallToAction.tsx           # Reusable CTA component
      GradientBackground.tsx     # Gradient background with variants
      SectionHeader.tsx          # Section header with title and subtitle
      button.tsx                 # Button component
      badge.tsx                  # Badge component
      index.tsx                  # Exports all UI components
```

### Reusable Components

#### Animation Components

- **MotionCard**: A versatile wrapper for cards with various animation options.
  ```tsx
  <MotionCard 
    delay={0.3} 
    hoverEffect="lift"
    appearAnimation="slide"
    className="your-class-name"
  >
    {children}
  </MotionCard>
  ```

- **Animated Icons**: SVG-based icons with Framer Motion animations.
  ```tsx
  <AnimatedArrowRight className="h-5 w-5 text-empire-cyan" />
  ```

#### Blog Components

- **BlogPostCard**: Card display for blog posts.
  ```tsx
  <BlogPostCard 
    post={postData} 
    onImageError={handleError}
    imageError={hasError}
    index={0}
  />
  ```

- **FeaturedBlogPost**: Highlighted blog post with enhanced styling.
  ```tsx
  <FeaturedBlogPost 
    post={featuredPost}
    onImageError={handleImageError}
    imageError={imageHasError}
  />
  ```

#### UI Components

- **SectionHeader**: Consistent section headers throughout the site.
  ```tsx
  <SectionHeader 
    badge="Optional Badge"
    badgeVariant="primary"
    title="Section Title"
    titleHighlight="Title" // Part of title to highlight
    subtitle="Optional subtitle text"
    center={true}
  />
  ```

- **GradientBackground**: Background with animated gradients in various styles.
  ```tsx
  <GradientBackground variant="cyan" animated={true}>
    {children}
  </GradientBackground>
  ```

- **CallToAction**: Standard CTA sections with calendar integration.
  ```tsx
  <CallToAction
    title="Your CTA Title"
    description="Description text goes here"
    calendarId="your-calendar-id"
    buttonText="Schedule Now"
  />
  ```

### Best Practices

1. **Imports**: Use the index files to import components:
   ```tsx
   import { BlogPostCard, FeaturedBlogPost } from '@/components/blog';
   import { SectionHeader, GradientBackground } from '@/components/ui';
   ```

2. **Type Safety**: Component props are typed with TypeScript interfaces.

3. **Customization**: Components accept className props for styling overrides.

4. **Animation Consistency**: Use MotionCard for consistent animation behavior.

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
