import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { ad } from "@/types/utils.type"
import { cooperationTypeItems, genderItems } from "@/types/utils.variable"
import React from "react"

type InfoProps = {
  ad: ad
}

const Info: React.FC<InfoProps> = ({ ad }) => {
  return (
    <>
      <section className="mb-6">
        <Title size={"default"}>
          <h2>مشخصات موقعیت شغلی</h2>
        </Title>
        <div className="text-sm pr-3 flex flex-wrap">
          <div className="w-1/2 mt-6">
            <h5 className="mb-3 morabba text-base">روز و ساعت کاری</h5>
            <p className="truncate">{ad.work_time}</p>
          </div>
          <div className="w-1/2 mt-6">
            <h5 className="mb-3 morabba text-base">نوع همکاری</h5>
            <p className="truncate">
              {cooperationTypeItems.find((item) => item.type === ad.cooperation_type)?.name}
            </p>
          </div>
          <div className="w-1/2 mt-6">
            <h5 className="mb-3 morabba text-base">سفرهای کاری</h5>
            <p className="truncate">{ad.travel_benefits ?? "-"}</p>
          </div>
          <div className="w-1/2 mt-6">
            <h5 className="mb-3 morabba text-base">مزایا و تسهیلات</h5>
            <p className="truncate">---</p>
          </div>
        </div>
      </section>
      {typeof ad.key_indicator !== "undefined" ? (
        <section className="mb-6">
          <Title size={"default"}>
            <h2>شاخص های کلیدی از نظر کارفرما</h2>
          </Title>
          <div className="flex flex-col pr-3 ">
            {ad.key_indicator.map((item, index) => (
              <div
                key={index + 1}
                className={`mt-3 w-fit ${item.includes("-") ? "box-info-type" : "text-sm"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <section>
        <Title size={"default"}>
          <h2>شرایط احراز شغل</h2>
        </Title>
        <div className="flex flex-wrap pr-3 text-sm">
          <div className="w-full flex">
            <div className="w-1/2 mt-6">
              <h4 className="morabba">سن</h4>
              <p className="mt-3 truncate">
                {`${ad.age.min}${ad.age.max ? ` - ${ad.age.max}` : ""} `}
                سال
              </p>
            </div>
            <div className="w-1/2 mt-6">
              <h4 className="morabba">جنسیت</h4>
              <p className="mt-3 truncate">
                {genderItems.find((item) => item.type === ad.gender)?.name}
              </p>
            </div>
          </div>
          <div className="w-full mt-6">
            <h4 className="morabba">تحصیلات</h4>
            <div className="flex flex-row flex-wrap">
              {ad.edicational_level.map((item) => (
                <span key={item} className="box-info-type">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full mt-6">
            <h4 className="morabba">نرم افزارها</h4>
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
