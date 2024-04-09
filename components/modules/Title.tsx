import React from "react"
import { cn } from "@/utils/utils.function"
import { VariantProps, cva } from "class-variance-authority"

const TitleVariant = cva("", {
  variants: {
    size: {
      default: "title-sm",
      md: "title-md",
      lg: "title-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type TitleProps = {
  className?: string
} & VariantProps<typeof TitleVariant>
const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({ size, children, className }) => {
  return <div className={cn(TitleVariant({ size, className }))}>{children}</div>
}

export default Title
