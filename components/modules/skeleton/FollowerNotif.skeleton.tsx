import React from "react"
import { cn } from "@/utils/utils.function"

const FollowerNotifSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn("bg-muted w-full h-10 animate-pulse", className)}></div>
}

export default FollowerNotifSkeleton
