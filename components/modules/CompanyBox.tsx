"use client"

import React, { useState } from "react"
import { cn } from "@/utils/utils.function"
import useUser from "@/hook/store/useUser"
import { toast } from "./ui/use-toast"

import { createFollower, removeFollower } from "@/app/action/follower"

import { companiesWithFollower } from "@/types/utils.type"

import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

type CompanyBoxType = {
  className?: string
  company: companiesWithFollower
}

const CompanyBox: React.FC<CompanyBoxType> = ({ className, company }) => {
  const { user } = useUser()
  const [isFollow, setIsFollow] = useState(
    company.followers.some((follower) => follower.user_id === user?.id)
  )

  const followAction = async () => {
    const cvResault = await createFollower(company.id)
    if (cvResault.status) {
      setIsFollow(true)
      return toast({ title: cvResault.message, variant: "default" })
    }
    return toast({ title: cvResault.message, variant: "destructive" })
  }

  const unFollowAction = async () => {
    const cvResault = await removeFollower(company.id)
    if (cvResault.status) {
      setIsFollow(false)
      return toast({ title: cvResault.message, variant: "default" })
    }
    return toast({ title: cvResault.message, variant: "destructive" })
  }
  return (
    <Card
      className={cn(
        "bg-muted w-[300px] h-[280px] flex flex-col justify-between p-3 shadow-md",
        className
      )}
    >
      <CardHeader className="h-16 center items-start p-0">
        <img
          width={190}
          height={100}
          src={company.logo}
          className="w-auto h-full"
          alt="company-image"
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
        {isFollow ? (
          <Button onClick={unFollowAction} variant={"outline"} className="w-full">
            لغو دنبال کردن
          </Button>
        ) : (
          <Button onClick={followAction} className="w-full">
            دنبال کنید
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default CompanyBox
