"use client"

import React from "react"
import { getMyCompany } from "@/utils/utils.fetch"
import { supabaseUrl } from "@/utils/utils.variable"

import useSWR from "swr"

import { FollowerWithUser } from "@/types/utils.type"

import { DoorOpen, FilePlus2, GitPullRequestArrow, ImageDown, LogOut, Pencil } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/modules/ui/card"
import FollowerNotifSkeleton from "@/components/modules/skeleton/FollowerNotif.skeleton"
import QuickAccessCompany from "@/components/modules/skeleton/QuickAccessCompany"
import LogOutButtonAction from "@/components/modules/LogOutButtonAction"
import { Button } from "@/components/modules/ui/button"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  {
    id: 1,
    name: "آگهی جدید",
    href: "/dashboard/ads?page=add-ads",
    icon: <FilePlus2 className="icon-sm" />,
  },
  {
    id: 2,
    name: "درخواست ها",
    href: "/dashboard/request_all",
    icon: <GitPullRequestArrow className="icon-sm" />,
  },
  {
    id: 3,
    name: "ویرایش شرکت",
    href: "/dashboard?page=company",
    icon: <Pencil className="icon-sm" />,
  },
]

const QuickAccess: React.FC = () => {
  const { data: company, isLoading } = useSWR("api/myCompany", getMyCompany)
  const { data: followers, isLoading: isFollowerLoading } = useSWR("api/follower", async () => {
    const res = await fetch("/api/follower")
    const data: FollowerWithUser[] = await res.json()
    return data
  })

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-end gap-3">
        <Link href={"/"}>
          <Button variant={"outline"} aria-label="خررج از داشبورد" title="خروج از داشبورد">
            <DoorOpen className="icon" />
          </Button>
        </Link>
        <LogOutButtonAction
          includeProps
          variant={"destructiveOutline"}
          redirect="/"
          aria-label="خروج از حساب"
          title="خروج از حساب"
        >
          <LogOut className="icon rotate-180" />
        </LogOutButtonAction>
      </div>
      <Card className="my-3 p-3 border-none shadow-lg">
        <CardHeader className="center p-0">
          <div className="w-24 h-44 center mb-3">
            {isLoading ? (
              <QuickAccessCompany />
            ) : company && "id" in company ? (
              <div className="center flex-col">
                <div className="w-24 h-24 center">
                  <Image
                    width={500}
                    height={500}
                    src={supabaseUrl + company?.logo}
                    alt="company-logo"
                    className="w-24 h-auto max-h-24 rounded-full object-contain"
                  />
                </div>
                <p className="truncate p-1 my-3 morabba text-xl">{company?.name}</p>
              </div>
            ) : (
              <div className="center flex-col">
                <div className="bg-muted w-24 h-24 center rounded-full">
                  <ImageDown className="icon-lg" />
                </div>
                <p className="text-xl p-1 mt-3 morabba truncate">شرکتی یافت نشد</p>
                <Button variant={"link"}>
                  <Link className="text-sm dana" href={"/dashboard?page=company"}>
                    ثبت شرکت
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        {company !== null ? (
          <CardContent className="w-full flex justify-around p-0">
            {quickLinks.map((item) => (
              <Link key={`quick-link-${item.id}`} href={item.href}>
                <Button variant={"fill"} size={"sm"} title={item.name} aria-label={item.name}>
                  {item.icon}
                </Button>
              </Link>
            ))}
          </CardContent>
        ) : null}
      </Card>
      <div className="flex-1 overflow-hidden">
        <Card className="h-fit max-h-full p-3 border-none shadow-lg overflow-y-auto">
          <CardHeader className="p-0">
            <h3 className="text-xl morabba">دنبال کنندگان</h3>
          </CardHeader>
          <CardContent className="mt-3 p-0">
            {isFollowerLoading ? (
              <FollowerNotifSkeleton />
            ) : followers?.length ? (
              <ul>
                {followers.map((follower) => (
                  <li
                    className="bg-muted h-10 center justify-start px-1 mb-1 last:mb-0 rounded-sm"
                    key={follower.id}
                  >
                    {follower.user?.email}
                  </li>
                ))}
              </ul>
            ) : (
              <h5 className="text-white bg-destructive/50 h-10 center justify-start px-1 rounded-sm">
                درخواستی پیدا نشد
              </h5>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QuickAccess
