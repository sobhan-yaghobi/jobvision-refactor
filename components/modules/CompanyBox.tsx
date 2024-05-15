import React from "react"
import { cn } from "@/utils/utils.function"
import { supabaseUrl } from "@/utils/utils.variable"

import { CompaniesWithFollower } from "@/types/utils.type"

import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import FollowButton from "./FollowButton"
import Image from "next/image"

type CompanyBoxType = {
  className?: string
  company: CompaniesWithFollower
}

const CompanyBox: React.FC<CompanyBoxType> = ({ className, company }) => {
  return (
    <Card
      className={cn("bg-muted w-full h-72 flex flex-col justify-between p-3 shadow-md", className)}
    >
      <CardHeader className="h-16 center items-start p-0">
        <Image
          width={190}
          height={100}
          src={supabaseUrl + company.logo}
          className="rounded-sm w-16 h-auto"
          alt="logo-compnay"
        />
      </CardHeader>
      <CardTitle className="my-3">{company.name}</CardTitle>
      <CardContent className="p-0">
        <div className="flex items-center gap-3">
          <Star className="icon-lg fill-yellow-500 stroke-black stroke-1" stroke="1px" />
          <span className="text-lg">{company.score_company}</span>
        </div>
        <p className="truncate">{company.description}</p>
      </CardContent>
      <CardFooter className="mt-3 p-0">
        <FollowButton company={company} />
      </CardFooter>
    </Card>
  )
}

export default CompanyBox
