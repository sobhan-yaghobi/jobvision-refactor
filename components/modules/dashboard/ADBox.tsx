"use client"
import React, { useState } from "react"
import { find } from "lodash"

import { AD } from "@/types/utils.type"
import { cooperationTypeItems, genderItems, seniorityLevelItems } from "@/utils/utils.variable"

import { Trash } from "lucide-react"

import { Card, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

type ADBoxProps = {
  ad: AD
  remove: (id: string) => Promise<void>
}

const ADBox: React.FC<ADBoxProps> = ({ ad, remove }) => {
  const [isLogoutDialog, setIsLogoutDialog] = useState(false)
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row p-3">
        <section className="h-full">
          <p className="text-base font-semibold text-muted-foreground">{ad.name}</p>
          <div className="text-xs flex flex-nowrap overflow-x-hidden">
            <div className="box-info-type">امکان جذب کارآموز</div>
            <div className="box-info-type">امکان دورکاری</div>
          </div>

          <p className="truncate text-xs my-2">
            {ad.price.max
              ? `${ad.price.min.toLocaleString("ir-fs")} - ${ad.price.max.toLocaleString(
                  "ir-fs"
                )} میلیون تومان`
              : `${ad.price.min.toLocaleString("ir-fs")} میلیون تومان`}
          </p>
          <div className="truncate text-xs">6 اسفند 1400</div>
        </section>
        <section className="h-full flex">
          <p className="box-info-type !h-full m-0">4 روز پیش</p>
          <Dialog open={isLogoutDialog} onOpenChange={setIsLogoutDialog}>
            <DialogTrigger asChild>
              <Button size={"sm"} variant={"destructiveOutline"} className="mr-3">
                <Trash className="icon-sm" />
              </Button>
            </DialogTrigger>
            <DialogContent isDirectionCloseLeft>
              <DialogHeader className="mb-3">
                <DialogTitle>آیا از حذف کردن آگهی خود مطمعن هستید !؟</DialogTitle>
              </DialogHeader>
              <DialogFooter className="flex gap-2">
                <Button variant={"outline"} onClick={() => setIsLogoutDialog(false)} type="button">
                  خیر
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => remove(ad.id)}
                  className="text-destructive border-destructive hover:text-white hover:bg-destructive"
                  type="button"
                >
                  بله
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-2 gap-6 text-sm mt-3">
        <div>
          <span className="text-secondary font-semibold morabba">شاخص های کلیدی</span>
          <div className="w-10/12 mt-2">
            {ad.key_indicator.map((item, index) => (
              <span key={`key-indicator-${index + 1}`} className="box-info-type">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-secondary font-semibold morabba">نوع همکاری</span>
          <p className="mt-2">
            {
              find(cooperationTypeItems, function (item) {
                return item.type === ad.cooperation_type
              })?.name
            }
          </p>
        </div>

        <div className="col-span-1">
          <span className="text-secondary font-semibold morabba">جنسیت</span>
          <p className="mt-2">
            {
              find(genderItems, function (item) {
                return item.type === ad.gender
              })?.name
            }
          </p>
        </div>
        <div className="col-span-1">
          <span className="text-secondary font-semibold morabba">سطح ارشدیت</span>
          <p className="mt-2">
            {
              find(seniorityLevelItems, function (item) {
                return item.type === ad.seniority_level
              })?.name
            }
          </p>
        </div>

        <div className="col-span-2">
          <span className="text-secondary font-semibold morabba">مزایا و امکانات</span>
          <div className="flex flex-wrap">
            {ad.facilities?.map((item) => (
              <span className="box-info-type" key={item.id}>
                {item.type}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <span className="text-secondary font-semibold morabba">تگ های آگهی</span>
          <div className="flex flex-wrap">
            {ad.tags?.map((item) => (
              <span className="box-info-type" key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <span className="text-secondary font-semibold morabba">میزان تحصیلات</span>
          <div className="flex flex-wrap">
            {ad.edicational_level?.map((item, index) => (
              <span className="box-info-type" key={`edicational-level-${index + 1}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <span className="text-secondary font-semibold morabba">مهارت های نرم افزاری</span>
          <div className="flex flex-wrap">
            {ad.software_skills.map((item, index) => (
              <span className="box-info-type" key={`software-skills-${index + 1}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ADBox
