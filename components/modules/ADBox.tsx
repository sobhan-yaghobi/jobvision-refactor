import React from "react"

import { cn, getTime } from "@/utils/utils.function"

import { ad } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import PriceGenerator from "./PriceGenerator"
import TimeGenerator from "./TimeGenerator"
import SendCvButton from "./SendCvButton"
import Link from "next/link"
import Image from "next/image"

type ADBoxProps = {
  ad: ad
  className?: string
  isFooter?: boolean
  active?: boolean
}

const ADBox: React.FC<ADBoxProps> = ({ ad, className, isFooter, active }) => {
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
              className="rounded-sm w-16 h-auto"
              alt="logo-compnay"
            />
            <div className="flex flex-col !mt-0 !mr-3">
              <p className="dana-bold text-sm">{ad.name}</p>
              <span className="text-sm">{ad.company.name}</span>
              <div className="flex items-center text-secondary text-sm">
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
              <div className="h-9 overflow-x-auto flex !mt-2 text-muted-foreground text-xs gap-1.5">
                {ad.itern ? <div className="box-info-type !ml-1">امکان جذب کارآموز</div> : null}
                {ad.telecommuting ? <div className="box-info-type !ml-1">امکان دورکاری</div> : null}
              </div>
              {isFooter ? (
                <div className="text-xs mt-3">
                  <TimeGenerator dateInfo={getTime(ad.created_at)} />
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
                <TimeGenerator dateInfo={getTime(ad.created_at)} />
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
