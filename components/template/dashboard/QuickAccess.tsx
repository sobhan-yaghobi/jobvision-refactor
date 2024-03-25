import React from "react"

import { companies } from "@prisma/client"

import { DoorOpen, FilePlus2, GitPullRequestArrow, LogOut, Pencil } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/modules/ui/card"
import LogOutButtonAction from "@/components/modules/LogOutButtonAction"
import { Button } from "@/components/modules/ui/button"
import Link from "next/link"

type QuickAccessProps = {
  company: companies | null
}

const QuickAccess: React.FC<QuickAccessProps> = ({ company }) => {
  return (
    <div className="h-full flex-col">
      <div className="bg-muted flex flex-col p-3 rounded-sm">
        <div className="flex justify-end gap-3">
          <Link href={"/"}>
            <Button variant={"outline"} aria-label="خررج از داشبورد" title="خروج از داشبورد">
              <DoorOpen className="icon" />
            </Button>
          </Link>
          <LogOutButtonAction redirectPath="/">
            <Button variant={"destructiveOutline"} aria-label="خروج از حساب" title="خروج از حساب">
              <LogOut className="icon rotate-180" />
            </Button>
          </LogOutButtonAction>
        </div>
        <Card className="border-none shadow-lg my-3 p-3">
          <CardHeader className="center pt-0">
            {company?.logo ? (
              <img
                width={100}
                height={100}
                src={company?.logo}
                alt="company-logo"
                className="p-1 bg-muted rounded-full"
              />
            ) : (
              <div className="w-16 h-16 bg-muted rounded-full"></div>
            )}
          </CardHeader>
          <CardTitle className="center text-center morabba">
            {company?.name ? (
              <span>{company.name}</span>
            ) : (
              <div className="flex flex-col">
                <span>شرکتی یافت نشد</span>
                <Button variant={"link"}>
                  <Link className="mt-3 text-sm dana" href={"/"}>
                    ثبت شرکت
                  </Link>
                </Button>
              </div>
            )}
          </CardTitle>
          {company !== null ? (
            <CardContent className="w-full flex justify-around mt-6 p-0">
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
        <Card className="flex-1 p-3 border-none shadow-lg">
          <CardHeader className="p-0">
            <h3 className="morabba text-xl">درخواست های اخیر</h3>
          </CardHeader>
          <CardContent className="mt-3 p-0">
            <h5 className="text-white bg-destructive/50 py-2 px-1 rounded-sm">درخواستی پیدا نشد</h5>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default QuickAccess
