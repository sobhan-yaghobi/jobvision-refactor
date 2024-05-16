import React from "react"
import { cvVaraiant } from "../dashboard/CVRequest"

const CVRequestSkeleton: React.FC<{ isLight?: boolean }> = ({ isLight }) => {
  const background = isLight ? "bg-muted" : "bg-background"
  return (
    <div className={cvVaraiant({ status: "none" })}>
      <div className="h-1/3 flex justify-between">
        <section className="h-full flex">
          <span className={`${background} w-11 h-11 ml-2 rounded-full animate-pulse`}></span>
          <span className="text-muted-foreground">
            <p className={`${background} w-16 h-5 mb-1 animate-pulse`}></p>
            <p className={`${background} w-24 h-5 animate-pulse`}></p>
          </span>
        </section>
        <section className="h-full">
          <p className={`${background} w-20 h-7 animate-pulse`}></p>
        </section>
      </div>
      <div className="h-2/3 flex flex-col justify-end pb-3 mt-3 text-xs">
        <div className="flex items-center justify-end gap-3">
          <p className={`${background} w-12 h-8 animate-pulse`}></p>
          <p className={`${background} w-12 h-8 animate-pulse`}></p>
        </div>
      </div>
    </div>
  )
}

export default CVRequestSkeleton
