"use client"

import React, { useRef, useState } from "react"

import { DateObject } from "react-multi-date-picker"
import { TypeCompany, companySchema } from "@/validation/zod.validations"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"

import {
  Building2,
  CalendarIcon,
  Image,
  Link,
  MapPin,
  MonitorDot,
  MonitorSmartphone,
  Speech,
  Users,
} from "lucide-react"

import { InputMessage } from "@/components/modules/ui/input"
import { Textarea } from "@/components/modules/ui/textarea"
import { Button } from "@/components/modules/ui/button"
import Title from "@/components/modules/Title"
import Calender from "@/components/modules/Calender"
import { getLastMessage } from "@/lib/utils"
import registerCompany from "@/app/action/registerCompany"

const Company = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [errs, setErrs] = useState<{ path: string; message: string }[]>()

  const clientAction = async (formData: FormData) => {
    const companyObject: TypeCompany = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      logo: formData.get("logo") as string,
      score_company: 4.3,
      score_popularity: 4.6,
      score_experience_of_job_seekers: 5,
      score_responsiveness: 2,
      website: formData.get("website") as string,
      description: formData.get("description") as string,
      slogan: formData.get("slogan") as string,
      organization_employ: Number(formData.get("organization_employ")),
      industry: formData.get("industry") as string,
      established_year: new Date(
        new DateObject({
          date: formData.get("established_year") as string,
          calendar: persian,
          locale: persian_fa,
        })
          .convert(undefined, gregorian_en)
          .format()
      ),
      type_of_activity: formData.get("type_of_activity") as string,
    }

    const resualt = companySchema.safeParse(companyObject)
    if (!resualt.success) {
      setErrs(
        resualt.error.issues.map((err) => ({
          message: err.message as string,
          path: err.path.at(0) as string,
        }))
      )
    }
    const resault = await registerCompany(companyObject)
    console.log("resualt", resault)
  }

  return (
    <>
      <Title>
        <h3>ویرایش اطلاعات شرکت</h3>
      </Title>
      <form ref={formRef} action={clientAction}>
        <div className="flex mt-6">
          <div className="bg-muted w-24 h-24 center ml-3 rounded-sm shadow-lg">
            <span className="text-primary morabba">جاب ویژن</span>
          </div>
          <div className="flex-1">
            <InputMessage
              icon={<Image className="icon-stroke-light" />}
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
            <p className="text-muted-foreground w-1/2 mt-3 text-xs">
              پیشنهاد میشود مقدار پیکسل لوگو شرکت 800 * 800 و فرمت عکس JPG یا PNG باشد و همچنین فرمت
              GIF نامعتبر میباشد
            </p>
          </div>
        </div>

        <div className="mt-6">
          <span className="morabba">نام شرکت</span>
          <InputMessage
            icon={<Building2 className="icon-stroke-light" />}
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
          <InputMessage
            icon={<MapPin className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال تهران ، بهارستان"
            name="location"
            message={
              getLastMessage({
                array: errs,
                key: "path",
                main_id: "location",
              })?.message
            }
          />
        </div>

        <div className="mt-6">
          <span className="morabba">وب سایت شرکت</span>
          <InputMessage
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
            className="max-h-32"
            placeholder="سخنی از سمت شرکت شما برای جویندگان شغل ..."
            name="description"
          />
          <p className="mt-2 text-destructive text-xs">
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

        <Button className="mt-6 w-full">ثبت شرکت</Button>
      </form>
    </>
  )
}

export default Company
