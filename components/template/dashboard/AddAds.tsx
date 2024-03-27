"use client"

import React, { useEffect, useState } from "react"

import { categoryWithCollection } from "@/types/utils.type"
import {
  advantage,
  category_collections,
  cooperation_type,
  gender,
  seniority_level,
} from "@prisma/client"

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
import MultipleTextInput from "@/components/modules/dashboard/MultipleTextInput"
import { InputMessage } from "@/components/modules/ui/input"
import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { TypeAd, adSchema } from "@/validation/zod.validations"
import { getLastMessage } from "@/lib/utils"

type AddAdsProps = {
  categories: categoryWithCollection[]
  advantages: advantage[]
}

const AddAds: React.FC<AddAdsProps> = ({ categories, advantages }) => {
  const [errs, setErrs] = useState<{ path: string; message: string }[]>()

  const [gender, setGender] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [seniorityLevel, setSeniorityLevel] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [cooperationType, setCooperationType] = useState<TypeMainSelect>({} as TypeMainSelect)
  const [tags, setTags] = useState<category_collections[]>([] as category_collections[])

  const [softwareSkills, setSoftwareSkills] = useState<string[]>([] as string[])
  const [keyIndicator, setKeyIndicator] = useState<string[]>([] as string[])
  const [edicationalLevel, setEdicationalLevel] = useState<string[]>([] as string[])
  const [facilities, setFacilities] = useState<advantage[]>([] as advantage[])

  const [checked, setChecked] = useState({
    is_price_max: false,
    is_age_max: false,
  })

  const clientAction = async (formData: FormData) => {
    const newAd: TypeAd = {
      name: formData.get("name") as string,
      price: {
        min: Number(formData.get("min_price")),
        max: Number(formData.get("max_price")),
      },
      work_time: formData.get("work_time") as string,
      travel_benefits: formData.get("travel_benefits") as string,
      age: {
        min: Number(formData.get("min_age")),
        max: Number(formData.get("max_age")),
      },
      edicational_level: edicationalLevel,
      key_indicator: keyIndicator,
      software_skills: softwareSkills,
      tags,
      facilities,
      gender: gender.type as gender,
      seniority_level: seniorityLevel.type as seniority_level,
      cooperation_type: cooperationType.type as cooperation_type,
    }

    const resualt = adSchema.safeParse(newAd)
    if (!resualt.success) {
      const newErrs = resualt.error.issues.map((item) => ({
        path: item.path.at(0) as string,
        message: item.message,
      }))
      setErrs(newErrs)
    }
  }

  useEffect(() => {
    console.log("errs", errs)
  }, [errs])

  return (
    <div>
      <Title>
        <h3>آگهی جدید</h3>
      </Title>
      <form action={clientAction}>
        <div className="mt-6">
          <span className="morabba">عنوان آگهی</span>
          <InputMessage
            icon={<FolderPen className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال برنامه نویس فرانت اند"
            name="name"
            message={getLastMessage({ array: errs, key: "path", main_id: "name" })?.message}
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
                message={getLastMessage({ array: errs, key: "path", main_id: "price" })?.message}
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
            name="work_time"
            message={getLastMessage({ array: errs, key: "path", main_id: "work_time" })?.message}
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مزایای مسافرتی</span>
          <InputMessage
            icon={<Earth className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال سفر به کیش"
            name="travel_benefits"
            message={
              getLastMessage({ array: errs, key: "path", main_id: "travel_benefits" })?.message
            }
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
                message={getLastMessage({ array: errs, key: "path", main_id: "age" })?.message}
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
            <span className="flex items-center gap-2 mt-2">
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
          <MultipleTextInput
            state={edicationalLevel}
            setState={setEdicationalLevel}
            placeholder="برای مثال لیسانس دکترا ، مدرک زبان معتبر"
            icon={<GraduationCap className="icon-stroke-light" />}
            message={
              getLastMessage({ array: errs, key: "path", main_id: "edicational_level" })?.message
            }
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شاخص های کلیدی</span>
          <MultipleTextInput
            state={keyIndicator}
            setState={setKeyIndicator}
            placeholder="برای مثال 3 سال سابقه کار با react"
            icon={<FileStack className="icon-stroke-light" />}
            message={
              getLastMessage({ array: errs, key: "path", main_id: "key_indicator" })?.message
            }
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مهارت های نرم افزاری</span>
          <MultipleTextInput
            state={softwareSkills}
            setState={setSoftwareSkills}
            placeholder="برای مثال react - متوسط ، next js - مقدماتی"
            icon={<Code2 className="icon-stroke-light" />}
            message={
              getLastMessage({ array: errs, key: "path", main_id: "software_skills" })?.message
            }
          />
        </div>

        <div className="mt-6">
          <span className="morabba">تگ های آگهی</span>
          <MultipleTagsSelect
            state={tags}
            setState={setTags}
            categories={categories}
            message={getLastMessage({ array: errs, key: "path", main_id: "tags" })?.message}
          />
        </div>

        <div className="mt-6">
          <span className="morabba">مزایا</span>
          {/* <MultipleTextInput
            state={advantage}
            setState={setAdvantage}
            placeholder="برای مثال برنامه نویس فرانت اند"
            icon={<CircleCheckBig className="icon-stroke-light" />}
          /> */}
        </div>

        <div className="mt-6">
          <span className="morabba">جنسیت</span>
          <SingleSelect
            state={gender}
            setState={setGender}
            items={genderItems}
            placeholder="جنسیت را انتخاب کنید"
            icon={<SquareUserRound className="icon-stroke-light" />}
            message={getLastMessage({ array: errs, key: "path", main_id: "gender" })?.message}
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
            message={
              getLastMessage({ array: errs, key: "path", main_id: "seniority_level" })?.message
            }
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
            message={
              getLastMessage({ array: errs, key: "path", main_id: "cooperation_type" })?.message
            }
          />
        </div>

        <Button className="w-full mt-6">ثبت اگهی</Button>
      </form>
    </div>
  )
}

export default AddAds
