import React from "react"

import { Card, CardFooter, CardHeader } from "../ui/card"
import { Separator } from "../ui/separator"

const ADBoxSkeleton: React.FC<{ isFooter?: boolean }> = ({ isFooter }) => {
  return (
    <Card className="h-full w-full flex flex-col justify-between *:p-3 shadow-md border-2 border-transparent">
      <CardHeader className="flex flex-row items-start p-0 px-3">
        <p className="bg-muted h-16 w-16 animate-pulse"></p>
        <div className="flex-1 flex flex-col !mt-0 !mr-3">
          <p className="bg-muted w-3/4 h-4 animate-pulse"></p>
          <p className="bg-muted w-2/4 h-4 my-2 animate-pulse"></p>
          <p className="bg-muted w-full h-4 ml-1.5 animate-pulse"></p>
          <div className="h-9 flex gap-1.5 !mt-2 overflow-x-auto">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <div key={`card-header-skeleton-${index}`} className="bg-muted flex-1 h-6"></div>
              ))}
          </div>
          {isFooter ? <div className="bg-muted w-20 h-5 mt-3 animate-pulse"></div> : null}
        </div>
      </CardHeader>
      {!isFooter ? (
        <>
          <div>
            <Separator />
          </div>
          <CardFooter className="flex justify-between">
            {Array(2)
              .fill("")
              .map((_, index) => (
                <p
                  key={`card-footer-skeleton-${index}`}
                  className="bg-muted w-24 h-10 animate-pulse"
                ></p>
              ))}
          </CardFooter>
        </>
      ) : null}
    </Card>
  )
}

export default ADBoxSkeleton
