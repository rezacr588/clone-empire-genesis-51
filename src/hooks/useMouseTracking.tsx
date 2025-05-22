import { useEffect, RefObject } from 'react';

/**
 * A custom hook that tracks mouse position relative to a container element
 * and sets CSS variables for the mouse coordinates
 * 
 * @param ref - React ref object for the container element to track mouse position against
 * @param cssVarNames - Object containing the names of CSS variables to set (default: { x: '--mouse-x', y: '--mouse-y' })
 * @param debounceMs - Optional debounce time in milliseconds (default: 16ms which is roughly one frame)
 */
export function useMouseTracking(
  ref: RefObject<HTMLElement>,
  cssVarNames = { x: '--mouse-x', y: '--mouse-y' },
  debounceMs = 16
) {
  useEffect(() => {
    // Simple debounce function
    function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
      let timeoutId: NodeJS.Timeout;
      return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      } as T;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      ref.current.style.setProperty(cssVarNames.x, `${x}`);
      ref.current.style.setProperty(cssVarNames.y, `${y}`);
    };
    
    const debouncedHandleMouseMove = debounce(handleMouseMove, debounceMs);
    
    document.addEventListener('mousemove', debouncedHandleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', debouncedHandleMouseMove);
    };
  }, [ref, cssVarNames, debounceMs]);
}

export default useMouseTracking; 