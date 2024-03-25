"use client"

import React, { useState } from "react"

import {
  BriefcaseBusiness,
  CalendarClock,
  CircleCheckBig,
  Code2,
  Earth,
  FileStack,
  FolderPen,
  GraduationCap,
  Handshake,
  MaximizeIcon,
  MinimizeIcon,
  SquareUserRound,
  Tags,
} from "lucide-react"

import Title from "@/components/modules/Title"
import { InputMessage } from "@/components/modules/ui/input"

const AddAds = () => {
  const [checked, setChecked] = useState({
    is_price_max: false,
    is_age_max: false,
  })
  return (
    <div>
      <Title>
        <h3>آگهی جدید</h3>
      </Title>
      <form>
        <div className="mt-6">
          <span className="morabba">عنوان آگهی</span>
          <InputMessage
            icon={<FolderPen className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">حقوق ماهانه</span>
          <div className="w-full">
            <div className="w-full flex items-center gap-3">
              <InputMessage
                type="number"
                icon={<MinimizeIcon className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="حداقل قیمت"
                name="min_price"
              />
              <InputMessage
                type="number"
                icon={<MaximizeIcon className="icon-stroke-light" />}
                parentWrapperClassName={`w-full ${checked.is_price_max ? "block" : "hidden"}`}
                placeholder="حداکثر قیمت"
                name="max_price"
              />
            </div>
            <span className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                id="check"
                onChange={(e) =>
                  setChecked((prev) => ({ ...prev, is_price_max: e.target.checked }))
                }
                className="select-none"
                name="is_max_price"
              />
              <label htmlFor="check" className="text-sm text-muted-foreground">
                حقوق
              </label>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <span className="morabba">زمان کار</span>
          <InputMessage
            icon={<CalendarClock className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مزایای مسافرتی</span>
          <InputMessage
            icon={<Earth className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شرایط سنی</span>
          <div className="w-full">
            <div className="w-full flex items-center gap-3">
              <InputMessage
                type="number"
                icon={<MinimizeIcon className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="حداقل سن"
                name="min_age"
              />
              <InputMessage
                type="number"
                icon={<MaximizeIcon className="icon-stroke-light" />}
                parentWrapperClassName={`w-full ${checked.is_age_max ? "block" : "hidden"}`}
                placeholder="حداکثر سن"
                name="max_age"
              />
            </div>
            <span className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                onChange={(e) => setChecked((prev) => ({ ...prev, is_age_max: e.target.checked }))}
                id="checkAge"
                className="select-none"
                name="is_age_price"
              />
              <label htmlFor="checkAge" className="text-sm text-muted-foreground">
                حداکثر سن
              </label>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <span className="morabba">میزان تحصیلات</span>
          <InputMessage
            icon={<GraduationCap className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شاخص های کلیدی</span>
          <InputMessage
            icon={<FileStack className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مهارت های نرم افزاری</span>
          <InputMessage
            icon={<Code2 className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">تگ های آگهی</span>
          <InputMessage
            icon={<Tags className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مزایا</span>
          <InputMessage
            icon={<CircleCheckBig className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">جنسیت</span>
          <InputMessage
            icon={<SquareUserRound className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">سطح ارشدیت</span>
          <InputMessage
            icon={<BriefcaseBusiness className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">نوع همکاری</span>
          <InputMessage
            icon={<Handshake className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
          />
        </div>
      </form>
    </div>
  )
}

export default AddAds
