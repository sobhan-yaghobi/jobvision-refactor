"use client"

import React, { useEffect, useRef, useState } from "react"
import { includes, isEqual, keys, omit, pick } from "lodash"
import { cn, dateGenerate, getLastMessage } from "@/utils/utils.function"
import { toast } from "@/components/modules/ui/use-toast"
import { registerCompany, validateCompany } from "@/app/action/registerCompany"
import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { supabaseUrl } from "@/utils/utils.variable"

import useSWR from "swr"

import { getMyCompany, getProvinces } from "@/utils/utils.fetch"

import {
  Building,
  Building2,
  CalendarIcon,
  CheckIcon,
  FileImage,
  ImageIcon,
  Link,
  MapPin,
  MonitorDot,
  MonitorSmartphone,
  Speech,
  Users,
  X,
} from "lucide-react"

import { InputMessage } from "@/components/modules/ui/input"
import { Textarea } from "@/components/modules/ui/textarea"
import Calender from "@/components/modules/Calender"
import Title from "@/components/modules/Title"
import SingleSelect from "@/components/modules/SingleSelect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import LoadButton from "@/components/modules/ui/LoadButton"
import Image from "next/image"
import FormCompanySkeleton from "@/components/modules/skeleton/FormCompany.skeleton"

const Company: React.FC = () => {
  //! ---------- States
  const formRef = useRef<HTMLFormElement>(null)
  const [cityID, setCityID] = useState("")
  const [errs, setErrs] = useState<{ path: string; message: string }[]>()
  const [logoSrc, setLogoSrc] = useState("")
  //! ---------- SWR Variables
  const { data: companyState, isLoading, mutate } = useSWR("api/myCompany", getMyCompany)
  const { data: provinces } = useSWR("/api/provinces", getProvinces)
  const { data: city } = useSWR(["/api/post", cityID], () =>
    fetch(`/api/province?cityId=${cityID}`).then((res) => res.json())
  )
  //! ---------- Actions
  const clientAction = async (formData: FormData) => {
    const logo = formData.get("logo") as File
    const { companyObject, errors, validateData } = await validateCompany(cityID, formData)

    if (companyState && "id" in companyState) {
      //! ---------- Update
      const companyPick = pick(
        {
          ...omit(companyState, ["location.city", "location.id"]),
          established_year: dateGenerate(companyState?.established_year ?? ""),
        },
        keys(companyObject)
      )
      const isEq = isEqual(companyObject, companyPick)

      if (!isEq || !includes(companyState.logo, logo.name)) {
        const Result = await registerCompany(companyObject, formData)
        mutate()

        if (Result.status) {
          toast({ title: Result.message })
        } else toast({ title: Result.message, variant: "destructive" })
      } else {
        toast({ title: "نخست فیلد مورد نظر خود را بروزرسانی کنید" })
      }
    } else {
      //! ---------- Register
      if (errors) {
        setErrs(errors)
        return
      }
      const registerResult = await registerCompany(validateData, formData)

      if (registerResult.status) {
        toast({ title: registerResult.message, variant: "default" })
        mutate()
      }
      toast({ title: registerResult.message, variant: "destructive" })
    }
  }
  //! ----- Show Image From FileExplorer
  const readSrcImgAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.length ? e.currentTarget.files[0] : null
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => setLogoSrc(event.target?.result as string)
      reader.readAsDataURL(file)
    }
  }
  //! ---------- SideEffect
  useEffect(() => {
    if (companyState?.location?.city_id) setCityID(companyState?.location.city_id)
  }, [companyState?.location?.city_id])

  return (
    <>
      {isLoading ? (
        <FormCompanySkeleton />
      ) : (
        <>
          <Title>
            <h3>ویرایش اطلاعات شرکت</h3>
          </Title>
          <form ref={formRef} action={clientAction}>
            <div className="flex mt-6">
              {logoSrc || companyState?.logo ? (
                <div className="w-24 h-24 center items-start">
                  <Image
                    width={500}
                    height={500}
                    src={logoSrc ? logoSrc : supabaseUrl + companyState?.logo}
                    alt="company-logo"
                    className="w-full h-auto max-h-24 object-contain ml-3 rounded-sm"
                  />
                </div>
              ) : (
                <div className="bg-muted w-24 h-24 center ml-3 rounded-sm shadow-lg">
                  <ImageIcon className="icon-stroke-light icon-lg" />
                </div>
              )}

              <div className="flex-1">
                <InputMessage
                  onChange={readSrcImgAction}
                  type="file"
                  accept="image/*"
                  icon={<FileImage className="icon-stroke-light" />}
                  wrapperClassName="w-full flex-row-reverse"
                  placeholder="لینک لوگو شرکت.."
                  name="logo"
                  message={
                    getLastMessage({
                      array: errs,
                      key: "path",
                      main_id: "logo",
                    })?.message
                  }
                />
                <p className="text-muted-foreground text-xs w-1/2 mt-3">
                  پیشنهاد میشود مقدار پیکسل لوگو شرکت 800 * 800 و فرمت عکس JPG یا PNG باشد و همچنین
                  فرمت GIF نامعتبر میباشد
                </p>
              </div>
            </div>

            <div className="mt-6">
              <span className="morabba">نام شرکت</span>
              <InputMessage
                defaultValue={companyState?.name}
                icon={<Building className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال جاب ویژن"
                name="name"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "name",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">موقعیت شغلی</span>
              <div className="flex flex-col items-center gap-2">
                <SingleSelect
                  key={cityID}
                  className="w-full"
                  trigger={
                    <div
                      role="combobox"
                      aria-expanded={Boolean(cityID)}
                      aria-controls="joketypes"
                      className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
                    >
                      <div className="absolute right-3 center">
                        <Building2 className="icon-stroke-light" />
                      </div>
                      {city?.id ? (
                        <>
                          <span className="text-sm">{city?.name}</span>
                          <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                            <X
                              onClick={(e) => {
                                e.preventDefault()
                                setCityID("")
                              }}
                              className="icon"
                            />
                          </button>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground">شهر</p>
                      )}
                    </div>
                  }
                >
                  <Accordion type="single" collapsible className="w-full">
                    {provinces?.map((province) => (
                      <AccordionItem
                        key={`accordion-province-item-${province.id}`}
                        value={`accordion-province-item-${province.id}`}
                      >
                        <AccordionTrigger className="py-2 hover:no-underline">
                          {province.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col">
                          {province.cities
                            ? province.cities.map((cit) => (
                                <div
                                  key={`accordion-city-item-${cit.id}`}
                                  className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                                  onClick={() => {
                                    setCityID(cit.id)
                                  }}
                                >
                                  <CheckIcon
                                    className={cn(
                                      "icon btn-icon btn-icon-l",
                                      cit.id === city?.id ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {cit.name}
                                </div>
                              ))
                            : null}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </SingleSelect>
                <InputMessage
                  defaultValue={companyState?.location?.address}
                  icon={<MapPin className="icon-stroke-light" />}
                  wrapperClassName="w-full"
                  placeholder="نشانی"
                  name="address"
                />
              </div>
              <p className="text-destructive text-xs mt-2">
                {
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "location",
                  })?.message
                }
              </p>
            </div>

            <div className="mt-6">
              <span className="morabba">وب سایت شرکت</span>
              <InputMessage
                defaultValue={companyState?.website}
                dir="ltr"
                icon={<Link className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال www.jobvision.com"
                name="website"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "website",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">درباره شرکت</span>
              <Textarea
                defaultValue={companyState?.description}
                className="max-h-32"
                placeholder="سخنی از سمت شرکت شما برای جویندگان شغل ..."
                name="description"
              />
              <p className="text-destructive text-xs mt-2">
                {
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "description",
                  })?.message
                }
              </p>
            </div>

            <div className="mt-6">
              <span className="morabba">شعار شرکت</span>
              <InputMessage
                defaultValue={companyState?.slogan}
                icon={<Speech className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال ، متفاوت باش"
                name="slogan"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "solgan",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">نوع فعالیت شرکت</span>
              <InputMessage
                defaultValue={companyState?.type_of_activity}
                icon={<MonitorDot className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال استخدام آنلاین"
                name="type_of_activity"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "type_of_activity",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">صنعت شرکت</span>
              <InputMessage
                defaultValue={companyState?.industry}
                icon={<MonitorSmartphone className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال کاریابی آنلاین در ایران"
                name="industry"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "industry",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">تعداد کارکنان شرکت</span>
              <InputMessage
                defaultValue={companyState?.organization_employ}
                type="number"
                min={1}
                icon={<Users className="icon-stroke-light" />}
                wrapperClassName="w-full"
                placeholder="برای مثال کاریابی آنلاین در ایران"
                name="organization_employ"
                message={
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "organization_employ",
                  })?.message
                }
              />
            </div>

            <div className="mt-6">
              <span className="morabba">سال تاسیس شرکت</span>
              <Calender
                value={new DateObject({ date: companyState?.established_year, locale: persian_fa })}
                icon={<CalendarIcon className="icon-stroke-light" />}
                containerClassName="w-full *:h-10 *:cursor-pointer"
                placeholder={`برای مثال ${new DateObject().convert(persian)}`}
                name="established_year"
              />
              <p className="mt-2 text-destructive text-xs">
                {
                  getLastMessage({
                    array: errs,
                    key: "path",
                    main_id: "established_year",
                  })?.message
                }
              </p>
            </div>

            <LoadButton className="mt-6 w-full">
              {companyState !== null ? "آپدیت" : "ثبت شرکت"}
            </LoadButton>
          </form>
        </>
      )}
    </>
  )
}

export default Company
