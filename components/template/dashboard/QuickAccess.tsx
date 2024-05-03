"use client"

import React from "react"

import { DoorOpen, FilePlus2, GitPullRequestArrow, ImageDown, LogOut, Pencil } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/modules/ui/card"
import LogOutButtonAction from "@/components/modules/LogOutButtonAction"
import { Button } from "@/components/modules/ui/button"
import Link from "next/link"

import useSWR from "swr"
import { getMyCompany } from "@/utils/utils.fetch"
import Image from "next/image"
import { followerWithUser } from "@/types/utils.type"
import FollowerNotifSkeleton from "@/components/modules/skeleton/FollowerNotif.skeleton"

const QuickAccess: React.FC = () => {
  const { data: company, isLoading } = useSWR("api/myCompany", getMyCompany)
  const { data: followers, isLoading: isFollowerLoading } = useSWR("api/follower", async () => {
    const res = await fetch("/api/follower")
    const data: followerWithUser[] = await res.json()
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
      <Card className="border-none shadow-lg my-3 p-3">
        <CardHeader className="center p-0">
          <div className="w-24 h-44 mb-3 center">
            {isLoading ? (
              <div className="center flex-col">
                <div className="bg-muted w-24 h-24 rounded-full animate-pulse"></div>
                <p className="bg-muted w-32 h-7 mt-3 animate-pulse"></p>
                <p className="bg-muted w-14 h-5 mt-3 animate-pulse"></p>
              </div>
            ) : company?.logo ? (
              <div className="center flex-col">
                <div className="w-24 h-24 center">
                  <Image
                    width={500}
                    height={500}
                    src={`/uploads/${company?.logo}`}
                    alt="company-logo"
                    className="w-24 h-auto max-h-24"
                  />
                </div>
                <p className="truncate p-1 my-3 morabba text-xl">{company?.name}</p>
              </div>
            ) : (
              <div className="center flex-col">
                <div className="bg-muted w-24 h-24 center rounded-full">
                  <ImageDown className="icon-lg" />
                </div>
                <p className="truncate p-1 mt-3 morabba text-xl">شرکتی یافت نشد</p>
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
            <Link href={"/dashboard/ads?page=add-ads"}>
              <Button variant={"fill"} size={"sm"} title="آگهی جدید" aria-label="آگهی جدید">
                <FilePlus2 className="icon-sm" />
              </Button>
            </Link>
            <Link href={"/dashboard/request_all"}>
              <Button variant={"fill"} size={"sm"} title="درخواست ها" aria-label="درخواست ها">
                <GitPullRequestArrow className="icon-sm" />
              </Button>
            </Link>
            <Link href={"/dashboard?page=company"}>
              <Button variant={"fill"} size={"sm"} title="ویرایش شرکت" aria-label="ویرایش شرکت">
                <Pencil className="icon-sm" />
              </Button>
            </Link>
          </CardContent>
        ) : null}
      </Card>
      <div className="flex-1 overflow-hidden">
        <Card className="h-fit max-h-full p-3 overflow-y-auto border-none shadow-lg">
          <CardHeader className="p-0">
            <h3 className="morabba text-xl">درخواست های اخیر</h3>
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
