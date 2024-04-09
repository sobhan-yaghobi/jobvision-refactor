"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { toast } from "./ui/use-toast"

import sendCv from "@/app/action/cv/sendCv"

import { cn, getTime } from "@/utils/utils.function"

import { ad } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import PriceGenerator from "./PriceGenerator"
import TimeGenerator from "./TimeGenerator"

type AdsBoxProps = {
  ad: ad
  className?: string
  isFooter?: boolean
  active?: boolean
}

const AdsBox: React.FC<AdsBoxProps> = ({ ad, className, isFooter, active }) => {
  const router = useRouter()
  const clientAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    const cvResault = await sendCv(ad)
    if (cvResault.status) {
      return toast({ title: cvResault.message, variant: "default" })
    }
    return toast({ title: cvResault.message, variant: "destructive" })
  }

  return (
    <div
      title="مشاهده آگهی"
      className="cursor-pointer"
      onClick={() => router.push(`/jobs?id=${ad.id}`)}
    >
      <Card
        className={cn(
          `w-full *:p-3 shadow-md border-2 border-transparent ${
            active ? "border-solid border-primary" : ""
          }`,
          className
        )}
      >
        <CardHeader className="flex flex-row items-start">
          <img
            width={190}
            height={100}
            src={ad.company.logo}
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
              <Button onClick={clientAction} variant={"default"}>
                ارسال رزومه
              </Button>
            </CardFooter>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default AdsBox
