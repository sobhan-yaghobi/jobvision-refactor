import React from "react"

import { cn } from "@/lib/utils"

import { ad } from "@/types/utils.type"

import { Card, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

type AdsBoxProps = {
  ad: ad
  className?: string
}

const AdsBox: React.FC<AdsBoxProps> = ({ ad, className }) => {
  return (
    <Link href={`/jobs?id=${ad?.id}`}>
      <Card className={cn("w-full *:p-3 shadow-md", className)}>
        <CardHeader className="flex flex-row items-start">
          <Image
            width={190}
            height={100}
            src={"/images/Irancell_logo.webp"}
            className="rounded-sm w-20"
            alt="logo-compnay"
          />
          <div className="flex flex-col !mt-0 !mr-3">
            <p className="dana-bold text-sm">برنامه نویس فرانت اند</p>
            <span className="text-sm">ایرانسل</span>
            <div className="flex items-center text-secondary text-sm">
              <span className="ml-1.5">مشهد ، قاسم آباد</span>
              <span className="text-primary pr-1.5 border-r">15 تا 20 میلیون</span>
            </div>
            <div className="overflow-x-auto flex !mt-2 text-muted-foreground text-xs gap-1.5">
              <span className="p-1 bg-muted rounded-sm">امکان دورکاری</span>
            </div>
          </div>
        </CardHeader>
        <div>
          <Separator />
        </div>
        <CardFooter className="flex justify-between">
          <span className="text-xs text-secondary">2 روز پیش</span>
          <Button variant={"default"}>ارسال رزومه</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AdsBox
