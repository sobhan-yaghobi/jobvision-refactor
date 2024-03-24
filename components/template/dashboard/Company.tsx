"use client"

import React from "react"
import Persian_cl from "react-date-object/calendars/persian"
import { DateObject } from "react-multi-date-picker"

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

const Company = () => {
  const [date, setDate] = React.useState<Date>()
  return (
    <>
      <Title>
        <h3>ویرایش اطلاعات شرکت</h3>
      </Title>
      <form>
        <div className="flex mt-6">
          <div className="bg-muted w-24 h-24 center ml-3 rounded-sm shadow-lg">
            <span className="text-primary morabba">جاب ویژن</span>
          </div>
          <div className="flex-1">
            <InputMessage
              icon={<Image className="icon-stroke-light" />}
              wrapperClassName="w-full flex-row-reverse"
              placeholder="لینک لگو شرکت.."
              name="logo"
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
            name="company_name"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">موقعیت شغلی</span>
          <InputMessage
            icon={<MapPin className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال تهران ، بهارستان"
            name="location"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">وب سایت شرکت</span>
          <InputMessage
            icon={<Link className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال www.jobvision.com"
            name="website"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">درباره شرکت</span>
          <Textarea
            className="max-h-32"
            placeholder="سخنی از سمت شرکت شما برای جویندگان شغل ..."
            name="about_us"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">شعار شرکت</span>
          <InputMessage
            icon={<Speech className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال ، متفاوت باش"
            name="slogan"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">نوع فعالیت شرکت</span>
          <InputMessage
            icon={<MonitorDot className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال استخدام آنلاین"
            name="activity_type"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">صنعت شرکت</span>
          <InputMessage
            icon={<MonitorSmartphone className="icon-stroke-light" />}
            wrapperClassName="w-full"
            placeholder="برای مثال کاریابی آنلاین در ایران"
            name="industry"
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
            name="industry"
          />
        </div>

        <div className="mt-6">
          <span className="morabba">سال تاسیس شرکت</span>
          <Calender
            icon={<CalendarIcon className="icon-stroke-light" />}
            containerClassName="w-full *:h-10 *:cursor-pointer"
            placeholder={`برای مثال ${new DateObject().convert(Persian_cl)}`}
            name="establish"
          />
        </div>

        <Button className="mt-6 w-full">ثبت شرکت</Button>
      </form>
    </>
  )
}

export default Company
