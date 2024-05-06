import React from "react"

import { Separator } from "../ui/separator"

const CurrentSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-muted px-3 pt-3 rounded-sm flex flex-col">
      <div>
        <div className="bg-background w-full h-36 rounded-sm animate-pulse"></div>
      </div>
      <div className="bg-muted w-full h-28 flex justify-between sticky top-0 py-3 z-20">
        <div className="w-9/12">
          <p className="bg-background w-28 h-8 animate-pulse"></p>
        </div>
        <div className="w-2/12 flex items-start justify-end">
          <p className="bg-background w-28 h-10 animate-pulse"></p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col">
          <p className="bg-background w-32 h-6 animate-pulse"></p>
          <div className="flex flex-wrap mt-2">
            <p className="bg-background w-32 h-6 animate-pulse"></p>
            <p className="bg-background w-32 h-6 mr-2 animate-pulse"></p>
          </div>
          <div className="flex items-start justify-between my-2">
            <div className="flex flex-col gap-3">
              <p className="bg-background w-16 h-6 animate-pulse"></p>
              <p className="bg-background w-72 h-10 animate-pulse"></p>
            </div>
            <div className="flex text-2xl text-jv-primary">
              <p className="bg-background w-20 h-6 animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      <div className="w-full flex items-center justify-start gap-2">
        <div className="w-4/12 flex items-center">
          <p className="bg-background w-full h-6 animate-pulse"></p>
        </div>
        <div className="w-8/12 flex items-center">
          <p className="bg-background w-full h-6 animate-pulse"></p>
        </div>
      </div>
      <div className="w-1/2 flex gap-2 mt-3 mb-2">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <p key={index} className="bg-background w-full h-10 animate-pulse"></p>
          ))}
      </div>
      <div className="bg-background flex-1 w-full animate-pulse"></div>
    </div>
  )
}

export default CurrentSkeleton
