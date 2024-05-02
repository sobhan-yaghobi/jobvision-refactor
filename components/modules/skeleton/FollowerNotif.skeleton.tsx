import { cn } from "@/utils/utils.function"
import React from "react"

const FollowerNotifSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn("bg-muted w-full h-10 animate-pulse", className)}></div>
}

export default FollowerNotifSkeleton
