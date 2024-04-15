import React from "react"
import { cn } from "@/utils/utils.function"

import { companiesWithFollower } from "@/types/utils.type"

import { MoveLeft, Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import useUser from "@/hook/store/useUser"
import { createFollower } from "@/app/action/follower"
import { toast } from "./ui/use-toast"

type CompanyBoxType = {
  className?: string
  company: companiesWithFollower
}

const CompanyBox: React.FC<CompanyBoxType> = ({ className, company }) => {
  const { user } = useUser()

  const clientAction = async () => {
    const cvResault = await createFollower(company.id)
    if (cvResault.status) {
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
        <Link href={"/jobs"} className="w-full flex items-center gap-3 mt-3">
          آگهی شغل فعال
          <MoveLeft />
        </Link>
      </CardContent>
      <CardFooter className="mt-3 p-0">
        {company.followers.some((follower) => follower.user_id === user?.id) ? (
          <Button variant={"outline"} className="w-full">
            دنبال کرده اید
          </Button>
        ) : (
          <Button onClick={clientAction} className="w-full">
            دنبال کنید
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default CompanyBox
