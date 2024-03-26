"use client"

import React, { useState } from "react"

import { categoryWithCollection } from "@/types/utils.type"
import { category_collections } from "@prisma/client"

import { cooperationTypeItems, genderItems, seniorityLevelItems } from "@/types/utils.variable"

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
} from "lucide-react"

import SingleSelect, { TypeMainSelect } from "@/components/modules/dashboard/SignleSelect"
import MultipleTagsSelect from "@/components/modules/dashboard/MultipleTagsSelect"
import { InputMessage } from "@/components/modules/ui/input"
import Title from "@/components/modules/Title"

type AddAdsProps = {
  categories: categoryWithCollection[]
}

const AddAds: React.FC<AddAdsProps> = ({ categories }) => {
  const [gender, setGender] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [seniorityLevel, setSeniorityLevel] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [cooperationType, setCooperationType] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [tags, setTags] = useState<category_collections[]>([] as category_collections[])

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
            placeholder="برای مثال از شنبه تا چهارشنبه ساعت 8 صبح تا 2 عصر"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مزایای مسافرتی</span>
          <InputMessage
            icon={<Earth className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال سفر به کیش"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شرایط سنی</span>
          <div className="w-full">
            <div className="w-full flex items-center gap-3">
              <InputMessage
                min={10}
                type="number"
                icon={<MinimizeIcon className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="حداقل سن"
                name="min_age"
              />
              <InputMessage
                min={10}
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
            placeholder="برای مثال لیسانس دکترا ، مدرک زبان معتبر"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شاخص های کلیدی</span>
          <InputMessage
            icon={<FileStack className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال 3 سال سابقه کار با react"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مهارت های نرم افزاری</span>
          <InputMessage
            icon={<Code2 className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال react - متوسط ، next js - مقدماتی"
            name="name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">تگ های آگهی</span>
          <MultipleTagsSelect state={tags} setState={setTags} categories={categories} />
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
          <SingleSelect
            state={gender}
            setState={setGender}
            items={genderItems}
            placeholder="جنسیت را انتخاب کنید"
            icon={<SquareUserRound className="icon-stroke-light" />}
          />
        </div>

        <div className="mt-6">
          <span className="morabba">سطح ارشدیت</span>
          <SingleSelect
            state={seniorityLevel}
            setState={setSeniorityLevel}
            items={seniorityLevelItems}
            placeholder="سطح ارشدیت را انتخاب کنید"
            icon={<BriefcaseBusiness className="icon-stroke-light" />}
          />
        </div>

        <div className="mt-6">
          <span className="morabba">نوع همکاری</span>
          <SingleSelect
            state={cooperationType}
            setState={setCooperationType}
            items={cooperationTypeItems}
            placeholder="نوع همکاری را انتخاب کنید"
            icon={<Handshake className="icon-stroke-light" />}
          />
        </div>
      </form>
    </div>
  )
}

export default AddAds
