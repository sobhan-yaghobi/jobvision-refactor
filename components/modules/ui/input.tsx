import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const wrapperInputVariants = cva("relative", {
  variants: {
    mainSize: {
      default: "h-10",
      sm: "h-9",
      lg: "h-11",
    },
  },
  defaultVariants: {
    mainSize: "default",
  },
})
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof wrapperInputVariants> {
  icon?: React.ReactNode
  wrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, wrapperClassName, mainSize, ...props }, ref) => {
    return (
      <div className={cn(wrapperInputVariants({ mainSize }), wrapperClassName)}>
        {icon && <div className="icon absolute right-3 top-1/2 -translate-y-1/2">{icon}</div>}
        <input
          type={type}
          className={cn(
            "flex w-full h-full rounded-sm border border-2 border-muted bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pr-12",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
