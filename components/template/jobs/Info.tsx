import React from "react"
import { cooperationTypeItems, genderItems } from "@/utils/utils.variable"

import { ad } from "@/types/utils.type"

import Title from "@/components/modules/Title"

type InfoProps = {
  ad: ad
}

const Info: React.FC<InfoProps> = ({ ad }) => {
  return (
    <>
      <section className="mb-6">
        <Title>
          <h2>مشخصات موقعیت شغلی</h2>
        </Title>
        <div className="text-sm flex flex-wrap pr-3 ">
          <div className="w-full mt-6 sm:w-1/2">
            <h5 className="text-base mb-3 morabba">روز و ساعت کاری</h5>
            <p className="truncate">{ad.work_time}</p>
          </div>
          <div className="w-full mt-6 sm:w-1/2">
            <h5 className="text-base mb-3 morabba">نوع همکاری</h5>
            <p className="truncate">
              {cooperationTypeItems.find((item) => item.type === ad.cooperation_type)?.name}
            </p>
          </div>
          <div className="w-full mt-6 sm:w-1/2">
            <h5 className="text-base mb-3 morabba">سفرهای کاری</h5>
            <p className="truncate">{ad.travel_benefits ?? "-"}</p>
          </div>
          <div className="w-full mt-6 sm:w-1/2">
            <h5 className="text-base mb-3 morabba">مزایا و تسهیلات</h5>
            <p className="truncate">---</p>
          </div>
        </div>
      </section>
      {typeof ad.key_indicator !== "undefined" ? (
        <section className="mb-6">
          <Title>
            <h2>شاخص های کلیدی از نظر کارفرما</h2>
          </Title>
          <div className="flex flex-col pr-3">
            {ad.key_indicator.map((item, index) => (
              <div
                key={index + 1}
                className={`w-fit mt-3 ${item.includes("-") ? "box-info-type" : "text-sm"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <section>
        <Title>
          <h2>شرایط احراز شغل</h2>
        </Title>
        <div className="text-sm flex flex-wrap pr-3">
          <div className="w-full flex">
            <div className="w-1/2 mt-6">
              <h4 className="text-base morabba">سن</h4>
              <p className="mt-3 truncate">
                {`${ad.age.min}${ad.age.max ? ` - ${ad.age.max}` : ""} `}
                سال
              </p>
            </div>
            <div className="w-1/2 mt-6">
              <h4 className="text-base morabba">جنسیت</h4>
              <p className="mt-3 truncate">
                {genderItems.find((item) => item.type === ad.gender)?.name}
              </p>
            </div>
          </div>
          <div className="w-full mt-6">
            <h4 className="text-base morabba">تحصیلات</h4>
            <div className="flex flex-row flex-wrap">
              {ad.edicational_level.map((item) => (
                <span key={item} className="box-info-type">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full mt-6">
            <h4 className="text-base morabba">مهارت های نرم افزاری</h4>
            <div className="flex flex-row flex-wrap">
              {ad.software_skills.map((item) => (
                <span key={item} className="box-info-type">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Info
