import React from "react"
import { cn } from "@/utils/utils.function"

const FormCompanySkeleton: React.FC = () => {
  return (
    <div>
      <div className="bg-muted w-52 h-7 animate-pulse"></div>
      <div className="bg-muted w-full h-16 mt-6 animate-pulse"></div>
      {Array(2)
        .fill("")
        .map((_, index) => (
          <NormalFieldSkeleton key={`normal-skeleton-one-${index}`} />
        ))}
      <div className="flex flex-col mt-6">
        <div className="bg-muted w-32 h-5 animate-pulse"></div>
        <div className="bg-muted w-full h-20 mt-1 animate-pulse"></div>
      </div>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <NormalFieldSkeleton key={`normal-skeleton-two-${index}`} />
        ))}
      <div className="bg-muted w-full h-10 mt-6 animate-pulse"></div>
    </div>
  )
}

const NormalFieldSkeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex flex-col mt-6", className)}>
    <div className="bg-muted w-32 h-5 animate-pulse"></div>
    <div className="bg-muted w-full h-10 mt-1 animate-pulse"></div>
  </div>
)

export default FormCompanySkeleton
