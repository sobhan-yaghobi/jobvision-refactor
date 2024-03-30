"use client"

import React, { useRef, useState } from "react"
import { cn, getLastMessage } from "@/lib/utils"
import { filter } from "lodash"
import addAds from "@/app/action/addAds"

import { categoryWithCollection } from "@/types/utils.type"
import {
  advantage,
  category_collections,
  cooperation_type,
  gender,
  seniority_level,
} from "@prisma/client"
import { TypeAd, adSchema } from "@/validation/zod.validations"

import { cooperationTypeItems, genderItems, seniorityLevelItems } from "@/types/utils.variable"
import { toast } from "@/components/modules/ui/use-toast"

import {
  BriefcaseBusiness,
  CalendarClock,
  CheckIcon,
  Code2,
  Earth,
  FileStack,
  FolderPen,
  GraduationCap,
  Handshake,
  MaximizeIcon,
  MinimizeIcon,
  SquareUserRound,
  X,
} from "lucide-react"

import SingleSelect, { TypeMainSelect } from "@/components/modules/dashboard/SignleSelect"
import MultipleSelect from "@/components/modules/dashboard/MultipleSelect"
import MultipleTextInput from "@/components/modules/dashboard/MultipleTextInput"
import { InputMessage } from "@/components/modules/ui/input"
import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"

type AddAdsProps = {
  categories: categoryWithCollection[]
  advantages: advantage[]
}

const AddAds: React.FC<AddAdsProps> = ({ categories, advantages }) => {
  const formRef = useRef<HTMLFormElement>(null)
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
      return
    }
    const createResault = await addAds(newAd)
    if (createResault.status) {
      toast({ title: createResault.message, variant: "default" })
      clearForm()
      return
    }
    toast({ title: createResault.message, variant: "destructive" })
  }

  const clearForm = () => {
    formRef.current?.reset()
    setGender({} as TypeMainSelect)
    setSeniorityLevel({} as TypeMainSelect)
    setCooperationType({} as TypeMainSelect)
    setTags([] as category_collections[])
    setSoftwareSkills([] as string[])
    setKeyIndicator([] as string[])
    setEdicationalLevel([] as string[])
    setFacilities([] as advantage[])
  }

  return (
    <div>
      <Title>
        <h3>آگهی جدید</h3>
      </Title>
      <form ref={formRef} action={clientAction}>
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
          <MultipleSelect
            trigger={
              tags.length ? (
                tags.map((item) => (
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setTags((prev) =>
                        filter(prev, function (prevItem) {
                          return prevItem.id !== item.id
                        })
                      )
                    }}
                    key={item.id}
                    size={"sm"}
                    variant={"fill"}
                    className="h-7 max-w-52 group"
                  >
                    <span className="flex-1 truncate">{item.name}</span>
                    <X className="icon btn-icon-r p-1 rounded-sm group-hover:bg-destructive/50 group-hover:text-destructive-foreground" />
                  </Button>
                ))
              ) : (
                <span className="text-muted-foreground text-sm">تگ های شغلی</span>
              )
            }
            message={getLastMessage({ array: errs, key: "path", main_id: "tags" })?.message}
          >
            <Accordion type="single" collapsible>
              {categories.map((category) => (
                <AccordionItem
                  key={`accordion-category-item-${category.id}`}
                  value={`accordion-category-item-${category.id}`}
                >
                  <AccordionTrigger className="py-2 hover:no-underline">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col pb-0">
                    {category.category_collections.length ? (
                      category.category_collections.map((collect) => (
                        <div
                          key={`accordion-collection-item-${collect.id}`}
                          className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                          onClick={() => {
                            setTags((prev) =>
                              prev.some((prevItem) => collect.id === prevItem.id)
                                ? prev.filter((item) => item.id !== collect.id)
                                : [...prev, collect]
                            )
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "icon btn-icon btn-icon-l",
                              tags.some((item) => item.id === collect.id)
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {collect.name}
                        </div>
                      ))
                    ) : (
                      <div className="text-destructive my-1 p-2 rounded-sm hover:bg-destructive-foreground">
                        شغلی برای {category.name} یافت نشد
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MultipleSelect>
        </div>

        <div className="mt-6">
          <span className="morabba">مزایا</span>
          <MultipleSelect
            placeholder="مزایا و امکانات"
            trigger={
              facilities.length ? (
                facilities.map((item) => (
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setFacilities((prev) =>
                        filter(prev, function (prevItem) {
                          return prevItem.id !== item.id
                        })
                      )
                    }}
                    key={item.id}
                    size={"sm"}
                    variant={"fill"}
                    className="h-7 ml-1 group last:ml-0"
                  >
                    {item.type}
                    <X className="icon btn-icon-r p-1 rounded-sm group-hover:bg-destructive/50 group-hover:text-destructive-foreground" />
                  </Button>
                ))
              ) : (
                <span className="text-muted-foreground text-sm">
                  مزایا و امکانات را انتخاب کنید
                </span>
              )
            }
            message={getLastMessage({ array: errs, key: "path", main_id: "facilities" })?.message}
          >
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                onClick={() => {
                  setFacilities((prev) =>
                    prev.some((prevItem) => advantage.id === prevItem.id)
                      ? prev.filter((item) => item.id !== advantage.id)
                      : [...prev, advantage]
                  )
                }}
              >
                <CheckIcon
                  className={cn(
                    "icon btn-icon btn-icon-l",
                    facilities.some((item) => item.id === advantage.id)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {advantage.type}
              </div>
            ))}
          </MultipleSelect>
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
