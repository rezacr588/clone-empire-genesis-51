import { useEffect, RefObject } from 'react';

interface NodeOptions {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  minOpacity?: number;
  maxOpacity?: number;
  colors?: string[];
  connectionDistance?: number;
  connectionOpacity?: number;
  connectionWidth?: number;
}

class Node {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  connected: boolean;
  
  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = (Math.random() - 0.5) * 0.5; // Random velocity
    this.vy = (Math.random() - 0.5) *.5;
    this.connected = false;
  }
  
  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;
    
    // Bounce off edges
    if (this.x < this.radius || this.x > canvasWidth - this.radius) {
      this.vx = -this.vx;
    }
    
    if (this.y < this.radius || this.y > canvasHeight - this.radius) {
      this.vy = -this.vy;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

/**
 * A custom hook that creates a network animation effect on a canvas element
 * 
 * @param canvasRef - React ref object for the canvas element
 * @param containerRef - React ref object for the parent container (for sizing)
 * @param options - Configuration options for the nodes and animations
 */
export function useNetworkAnimation(
  canvasRef: RefObject<HTMLCanvasElement>,
  containerRef: RefObject<HTMLElement>,
  options: NodeOptions = {}
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Setup options with defaults
    const {
      count = Math.min(50, Math.floor(container.offsetWidth * container.offsetHeight / 20000)),
      minRadius = 1,
      maxRadius = 3,
      minOpacity = 0.1,
      maxOpacity = 0.4,
      colors = ['rgba(30, 174, 219, %o)', 'rgba(225, 59, 93, %o)', 'rgba(0, 230, 118, %o)', 'rgba(123, 97, 255, %o)'],
      connectionDistance = 150,
      connectionOpacity = 0.4,
      connectionWidth = 0.5
    } = options;
    
    // Adjust canvas size to match parent
    const resizeCanvas = () => {
      if (canvas && container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create nodes
    const nodes: Node[] = [];
    
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * (maxRadius - minRadius) + minRadius;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex].replace('%o', opacity.toString());
      
      nodes.push(new Node(x, y, radius, color));
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update(canvas.width, canvas.height);
        nodes[i].draw(ctx);
        nodes[i].connected = false;
      }
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * connectionOpacity;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(80, 80, 160, ${opacity})`;
            ctx.lineWidth = connectionWidth;
            ctx.stroke();
            
            nodes[i].connected = true;
            nodes[j].connected = true;
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [canvasRef, containerRef, options]);
}

export default useNetworkAnimation; 