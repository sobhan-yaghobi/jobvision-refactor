import React from "react"
import { Card, CardFooter, CardHeader } from "../ui/card"
import { Separator } from "../ui/separator"

const ADBoxSkeleton: React.FC<{ isFooter?: boolean }> = ({ isFooter }) => {
  return (
    <div className="h-full min-h-[167.5px]">
      <Card className="h-full w-full *:p-3 shadow-md border-2 border-transparent flex flex-col justify-between">
        <CardHeader className="flex flex-row items-start p-0 px-3">
          <div className="bg-muted h-16 w-16 animate-pulse"></div>
          <div className="flex-1 flex flex-col !mt-0 !mr-3">
            <p className="bg-muted w-3/4 h-4 animate-pulse"></p>
            <p className="bg-muted w-2/4 h-4 my-2 animate-pulse"></p>
            <p className="bg-muted w-full h-4 animate-pulse ml-1.5"></p>
            <div className="h-9 overflow-x-auto flex !mt-2 gap-1.5">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <div key={index} className="bg-muted flex-1 h-6"></div>
                ))}
            </div>
            {isFooter ? <div className="bg-muted mt-3 w-20 h-5 animate-pulse"></div> : null}
          </div>
        </CardHeader>
        {!isFooter ? (
          <>
            <div>
              <Separator />
            </div>
            <CardFooter className="flex justify-between">
              <p className="bg-muted w-24 h-10 animate-pulse"></p>
              <p className="bg-muted w-24 h-10 animate-pulse"></p>
            </CardFooter>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default ADBoxSkeleton
