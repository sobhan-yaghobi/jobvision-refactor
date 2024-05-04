import React from "react"
import { cn } from "@/utils/utils.function"

import { ad } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import PriceGenerator from "./PriceGenerator"
import TimeGenerator from "./TimeGenerator"
import SendCvButton from "./SendCvButton"
import Link from "next/link"
import Image from "next/image"

type ADBoxProps = {
  isFooter?: boolean
  active?: boolean
  className?: string
  ad: ad
}

const ADBox: React.FC<ADBoxProps> = ({ isFooter, active, className, ad }) => {
  return (
    <div title="مشاهده آگهی" className="cursor-pointer">
      <Card
        className={cn(
          `w-full *:p-3 shadow-md border-2 border-transparent ${
            active ? "border-solid border-primary" : ""
          }`,
          className
        )}
      >
        <Link href={`/jobs?id=${ad.id}`}>
          <CardHeader className="flex flex-row items-start p-0 px-3">
            <Image
              width={190}
              height={100}
              src={`/uploads/${ad.company.logo}`}
              className="w-16 h-auto rounded-sm"
              alt="logo-compnay"
            />
            <div className="flex-1 flex flex-col !mt-0 !mr-3 overflow-x-hidden">
              <p className="text-sm dana-bold">{ad.name}</p>
              <span className="text-sm">{ad.company.name}</span>
              <div className="text-secondary text-sm flex items-center">
                <p className="ml-1.5">{`${ad.company.location.city.name} , ${ad.company.location.address}`}</p>
                <p className="text-primary text-xs pr-1.5 border-r">
                  <PriceGenerator price={ad.price.min} />
                  {ad.price.max ? (
                    <>
                      {" "}
                      - <PriceGenerator price={ad.price.max} />
                    </>
                  ) : null}
                </p>
              </div>
              <div className="text-muted-foreground w-full h-9 text-xs flex gap-1.5 !mt-2 overflow-x-auto">
                {ad.itern ? <div className="box-info-type !ml-1">امکان جذب کارآموز</div> : null}
                {ad.telecommuting ? <div className="box-info-type !ml-1">امکان دورکاری</div> : null}
              </div>
              {isFooter ? (
                <div className="text-xs mt-3">
                  <TimeGenerator date={ad.created_at} />
                </div>
              ) : null}
            </div>
          </CardHeader>
        </Link>
        {!isFooter ? (
          <>
            <div>
              <Separator />
            </div>
            <CardFooter className="flex justify-between">
              <span className="text-sm">
                <TimeGenerator date={ad.created_at} />
              </span>
              <SendCvButton ad={ad} />
            </CardFooter>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default ADBox
