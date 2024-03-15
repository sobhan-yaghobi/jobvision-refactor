import React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import Link from "next/link"
import { MoveLeft, Star } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type CompanyBoxType = {
  className?: string
}

const CompanyBox: React.FC<CompanyBoxType> = ({ className }) => {
  return (
    <Card
      className={cn(
        "bg-muted w-[300px] h-[280px] flex flex-col justify-between p-3 shadow-md",
        className
      )}
    >
      <CardHeader className="h-16 center items-start p-0">
        <Image
          width={190}
          height={100}
          className="w-auto h-full"
          src="/images/Irancell_logo.webp"
          alt="company-image"
        />
      </CardHeader>
      <CardTitle className="my-3">MTN Irancell</CardTitle>
      <CardContent className="p-0">
        <div className="flex items-center gap-3">
          <Star className="icon-lg fill-yellow-500 stroke-black stroke-1" stroke="1px" />
          <span className="text-lg">3.5</span>
        </div>
        <Link href={"/jobs"} className="w-full flex items-center gap-3 mt-3">
          23 آگهی شغل فعال
          <MoveLeft />
        </Link>
      </CardContent>
      <CardFooter className="mt-3 p-0">
        <Button className="w-full">دنبال کنید</Button>
      </CardFooter>
    </Card>
  )
}

export default CompanyBox
