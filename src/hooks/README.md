# Clone Empire Custom Hooks

This directory contains custom React hooks used throughout the Clone Empire application. These hooks provide reusable logic for UI animations, state management, and other common functionality.

## Available Hooks

### UI and Animation Hooks

#### `useTypewriter`
Creates a typewriter animation effect for text, cycling through a list of strings.

```tsx
const { animatedText, isDeleting, currentTextIndex, isDone } = useTypewriter(
  ["First text", "Second text", "Third text"],
  80, // typingSpeed (ms)
  50, // deletingSpeed (ms)
  1500, // delayAfterType (ms)
  500 // delayAfterDelete (ms)
);
```

#### `useMouseTracking`
Tracks mouse position relative to a container element and sets CSS variables for the coordinates.

```tsx
const containerRef = useRef<HTMLDivElement>(null);

// Sets --mouse-x and --mouse-y CSS variables on the container element
useMouseTracking(containerRef);

// Use custom CSS variable names and debounce time
useMouseTracking(
  containerRef,
  { x: '--cursor-x', y: '--cursor-y' },
  32 // debounce in ms
);
```

#### `useNetworkAnimation`
Creates a network animation effect on a canvas element with connected nodes.

```tsx
const containerRef = useRef<HTMLDivElement>(null);
const canvasRef = useRef<HTMLCanvasElement>(null);

// Basic usage
useNetworkAnimation(canvasRef, containerRef);

// With custom options
useNetworkAnimation(canvasRef, containerRef, {
  count: 100, // number of nodes
  minRadius: 1,
  maxRadius: 3,
  connectionDistance: 150,
  colors: ['rgba(30, 174, 219, %o)', 'rgba(225, 59, 93, %o)']
});
```

### State Management Hooks

#### `useTheme`
Manages theme state (light/dark) and persists user preferences in localStorage.

```tsx
const { theme, toggleTheme, setTheme, isDark, isLight } = useTheme();

// Toggle between light and dark mode
<button onClick={toggleTheme}>
  {isDark ? <Sun /> : <Moon />}
</button>

// Set theme directly
<button onClick={() => setTheme('dark')}>Dark Mode</button>
```

#### `useIsMobile`
Detects if the viewport is mobile-sized.

```tsx
const isMobile = useIsMobile();

return (
  <div>
    {isMobile ? <MobileMenu /> : <DesktopMenu />}
  </div>
);
```

#### `useToast`
Provides a toast notification system.

```tsx
const { toast } = useToast();

// Show a success toast
<button onClick={() => toast({ 
  title: "Success", 
  description: "Operation completed successfully",
  variant: "success"
})}>
  Submit
</button>
```

## Best Practices

1. **Cleanup Effects**: All hooks with event listeners or timers have proper cleanup functions in their useEffect returns.

2. **Performance Optimization**: Where appropriate, hooks use debouncing, memoization, and other performance techniques.

3. **TypeScript Support**: All hooks are fully typed for better developer experience and code safety.

4. **Reusability**: Hooks are designed to be reusable across different components without tight coupling to specific UI elements.

## Contributing

When adding new hooks:

1. Follow the naming convention: `use[Name]`
2. Add proper JSDoc comments
3. Include type definitions
4. Export the hook in the `index.ts` file
5. Update this documentation 