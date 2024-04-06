import React from "react"

import { cn, getTime } from "@/lib/utils"

import { ad } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import PriceGenerator from "./PriceGenerator"
import TimeGenerator from "./TimeGenerator"

type AdsBoxProps = {
  ad: ad
  className?: string
  isFooter?: boolean
  active?: boolean
}

const AdsBox: React.FC<AdsBoxProps> = ({ ad, className, isFooter, active }) => {
  return (
    <Link href={`/jobs?id=${ad?.id}`}>
      <Card
        className={cn(
          `w-full *:p-3 shadow-md border-2 border-transparent ${
            active ? "border-solid border-primary" : ""
          }`,
          className
        )}
      >
        <CardHeader className="flex flex-row items-start">
          <Image
            width={190}
            height={100}
            src={"/images/Irancell_logo.webp"}
            className="rounded-sm w-20"
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
        {!isFooter ? (
          <>
            <div>
              <Separator />
            </div>
            <CardFooter className="flex justify-between">
              <span className="text-sm">
                <TimeGenerator dateInfo={getTime(ad.created_at)} />
              </span>
              <Button variant={"default"}>ارسال رزومه</Button>
            </CardFooter>
          </>
        ) : null}
      </Card>
    </Link>
  )
}

export default AdsBox
