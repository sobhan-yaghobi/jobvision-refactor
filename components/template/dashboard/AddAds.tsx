"use client"

import React, { useRef, useState } from "react"

import { categoryWithCollection } from "@/types/utils.type"

import {
  BriefcaseBusiness,
  CalendarClock,
  CheckIcon,
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
  X,
} from "lucide-react"

import Title from "@/components/modules/Title"
import { InputMessage } from "@/components/modules/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/modules/ui/popover"
import { Button } from "@/components/modules/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import { cn } from "@/lib/utils"
import { category_collections } from "@prisma/client"
import { filter, pick, remove, some, unset } from "lodash"

type AddAdsProps = {
  categories: categoryWithCollection[]
}

const AddAds: React.FC<AddAdsProps> = ({ categories }) => {
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
          {/* <InputMessage
            icon={<Tags className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder=""
            name="name"
          /> */}
          <InputTag categories={categories} />
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

type InputTagProps = {
  categories: categoryWithCollection[]
}
const InputTag: React.FC<InputTagProps> = ({ categories }) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [collections, setCollections] = useState<category_collections[]>([])
  return (
    <div ref={myDivRef} className="w-full h-10">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            role="combobox"
            aria-expanded={isOpen}
            className={`h-full relative flex items-center pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <Tags className="icon-stroke-light absolute right-3" />
            {collections.length ? (
              collections.map((item) => (
                <Button size={"sm"} variant={"ghost"} key={item.id} className="text-xs h-7">
                  {item.name}
                  <X
                    onClick={(e) => {
                      e.preventDefault()
                      setCollections((prev) =>
                        filter(prev, function (prevItem) {
                          return prevItem.id !== item.id
                        })
                      )
                    }}
                    className="icon btn-icon-r p-1 rounded-sm hover:bg-destructive/50 hover:text-destructive-foreground"
                  />
                </Button>
              ))
            ) : (
              <span className="text-muted-foreground text-sm">تگ های شغلی</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent style={{ width: myDivRef.current?.clientWidth }} className="px-3 py-2">
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
                          setCollections((prev) =>
                            prev.some((prevItem) => collect.id === prevItem.id)
                              ? prev.filter((item) => item.id !== collect.id)
                              : [...prev, collect]
                          )
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "icon btn-icon btn-icon-l",
                            collections.some((item) => item.id === collect.id)
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
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default AddAds
