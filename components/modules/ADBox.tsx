"use client"

import React from "react"
import { cn } from "@/utils/utils.function"
import { supabaseUrl } from "@/utils/utils.variable"

import { useRouter, useSearchParams } from "next/navigation"

import { AD } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import PriceGenerator from "./PriceGenerator"
import TimeGenerator from "./TimeGenerator"
import SendCVButton from "./SendCVButton"
import Image from "next/image"

type ADBoxProps = {
  isFooter?: boolean
  active?: boolean
  className?: string
  ad: AD
}

const ADBox: React.FC<ADBoxProps> = ({ isFooter, active, className, ad }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const routeAction = () => {
    const params = new URLSearchParams(searchParams)
    params.set("id", ad.id)
    replace(`/jobs?${params.toString()}`)
  }

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
        <div onClick={routeAction}>
          <CardHeader className="flex flex-row items-start p-0 px-3">
            <Image
              width={190}
              height={100}
              src={supabaseUrl + ad?.company?.logo}
              className="w-16 h-auto rounded-sm"
              alt="logo-compnay"
            />
            <div className="flex-1 flex flex-col !mt-0 !mr-3 overflow-hidden">
              <p className="text-sm dana-bold">{ad.name}</p>
              <span className="text-sm">{ad?.company?.name}</span>
              <div className="text-secondary text-sm flex items-center flex-wrap gap-y-1">
                <p className="ml-1.5">{`${ad?.company?.location.city.name} , ${ad?.company?.location.address}`}</p>
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
        </div>
        {!isFooter ? (
          <>
            <div>
              <Separator />
            </div>
            <CardFooter className="flex justify-between">
              <span className="text-sm">
                <TimeGenerator date={ad.created_at} />
              </span>
              <SendCVButton ad={ad} />
            </CardFooter>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default ADBox
