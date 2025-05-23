import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-empire-silver text-empire-darkest hover:bg-empire-silver/80",
        secondary:
          "border-transparent bg-empire-medium text-empire-darkest hover:bg-empire-medium/80",
        destructive:
          "border-transparent bg-empire-canyon text-empire-light hover:bg-empire-canyon/80",
        outline: "text-foreground border-current",
        canyon: "border-transparent bg-empire-canyon/10 text-empire-canyon-deep",
        silver: "border-transparent bg-empire-silver/20 text-empire-darkest dark:text-empire-silver dark:bg-empire-darkest dark:border-empire-silver/30",
        light: "border-transparent bg-empire-light/80 text-empire-darkest dark:bg-empire-medium/20 dark:text-empire-light",
        medium: "border-transparent bg-empire-medium/20 text-empire-darkest dark:text-empire-medium dark:bg-empire-darkest dark:border-empire-medium/30",
        primary: "border-transparent bg-empire-cyan/20 text-empire-cyan hover:bg-empire-cyan/30"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
