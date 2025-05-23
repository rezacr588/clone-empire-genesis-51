import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-empire-canyon-deep text-empire-light hover:bg-empire-canyon-deep/90",
        destructive:
          "bg-empire-canyon text-empire-light hover:bg-empire-canyon/90",
        outline:
          "border border-empire-silver/50 bg-transparent hover:bg-empire-silver/10 hover:text-empire-light text-empire-silver",
        secondary:
          "bg-empire-medium text-empire-light hover:bg-empire-medium/80",
        ghost: "hover:bg-empire-silver/10 hover:text-empire-light text-empire-silver",
        link: "text-empire-canyon-deep underline-offset-4 hover:underline",
        light: "bg-empire-light text-empire-darkest hover:bg-empire-light/80",
        medium: "bg-empire-medium text-empire-light hover:bg-empire-medium/80",
        primary: "bg-empire-cyan text-empire-darkest hover:bg-empire-cyan/80",
        primaryCanyonGradient: 
          "bg-gradient-to-br from-empire-canyon to-empire-canyon-deep text-empire-light font-medium rounded-lg shadow-md hover:from-empire-canyon/90 hover:to-empire-canyon-deep/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200",
        glass: 
          "bg-empire-canyon/20 backdrop-blur-sm border border-empire-silver/20 text-empire-light font-medium rounded-lg shadow-md hover:bg-empire-canyon/40 hover:border-empire-cyan/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:bg-empire-canyon/50 active:shadow-sm transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
