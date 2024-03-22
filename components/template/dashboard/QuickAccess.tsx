import React from "react"

import { DoorOpen, LogOut } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/modules/ui/card"
import LogOutButtonAction from "@/components/modules/LogOutButtonAction"
import { Button } from "@/components/modules/ui/button"
import Link from "next/link"

const QuickAccess = () => {
  return (
    <div className="h-full flex-col">
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
      <div className="bg-secondary/10 flex flex-col mt-3 p-3 rounded-sm">
        <Card className="border-none shadow-lg p-3">
          <CardHeader className="center pt-0">
            <div className="w-16 h-16 bg-secondary/40 rounded-full"></div>
          </CardHeader>
          <CardTitle className="center text-center">
            {/* <div className="w-20 h-5 bg-secondary/40 animate-pulse"></div> */}
            <div className="flex flex-col">
              <span className="morabba">شرکتی یافت نشد</span>
              <Button variant={"link"}>
                <Link className="mt-3 text-sm" href={"/"}>
                  ثبت شرکت
                </Link>
              </Button>
            </div>
          </CardTitle>
        </Card>
        <Card className="flex-1 mt-3 p-3 border-none shadow-lg">
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
