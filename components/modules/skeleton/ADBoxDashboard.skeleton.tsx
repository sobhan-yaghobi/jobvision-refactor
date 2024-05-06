import React from "react"
import { Card, CardContent, CardHeader } from "../ui/card"

const ADBoxDashboardSkeleton: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row p-3">
        <section className="h-full">
          <p className="bg-muted h-7 w-32 animate-pulse"></p>
          <div className="flex flex-nowrap overflow-x-hidden">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-status-skeleton-${index}`}
                  className="bg-muted w-20 h-7 animate-pulse mt-3 ml-3"
                ></p>
              ))}
          </div>
          <p className="bg-muted h-7 w-36 my-3 animate-pulse"></p>
          <p className="bg-muted h-7 w-16 animate-pulse"></p>
        </section>
        <section className="h-full flex">
          <p className="bg-muted h-7 w-14 animate-pulse"></p>
          <p className="bg-muted h-10 w-10 mr-3 animate-pulse"></p>
        </section>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-2 gap-6 text-sm mt-3">
        <div>
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <div className="w-10/12 mt-2">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-key-indicator-skeleton-${index}`}
                  className="bg-muted w-20 h-7 inline-block ml-1 animate-pulse"
                ></p>
              ))}
          </div>
        </div>
        <div className="col-span-1">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <p className="bg-muted h-7 w-16 mt-2 animate-pulse"></p>
        </div>
        <div className="col-span-1">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <p className="bg-muted h-7 w-16 mt-2 animate-pulse"></p>
        </div>
        <div className="col-span-1">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <p className="bg-muted h-7 w-16 mt-2 animate-pulse"></p>
        </div>
        <div className="col-span-2">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <div className="mt-2">
            {Array(8)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-facilities-skeleton-${index}`}
                  className="bg-muted w-20 h-7 inline-block ml-1 animate-pulse"
                ></p>
              ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <div className="mt-2">
            {Array(8)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-tags-skeleton-${index}`}
                  className="bg-muted w-20 h-7 inline-block ml-1 animate-pulse"
                ></p>
              ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <div className="mt-2">
            {Array(8)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-edicational-level-skeleton-${index}`}
                  className="bg-muted w-20 h-7 inline-block ml-1 animate-pulse"
                ></p>
              ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className="bg-muted h-5 w-28 animate-pulse"></p>
          <div className="mt-2">
            {Array(8)
              .fill("")
              .map((_, index) => (
                <p
                  key={`ads-software-skills-skeleton-${index}`}
                  className="bg-muted w-20 h-7 inline-block ml-1 animate-pulse"
                ></p>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ADBoxDashboardSkeleton
