import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { ad } from "@/types/utils.type"
import Link from "next/link"
import React from "react"
import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import { Star } from "lucide-react"

type CompanyProps = {
  ad: ad
}

const Company: React.FC<CompanyProps> = ({ ad }) => {
  return (
    <>
      <section>
        <Title>
          <h2>امتیاز سازمان</h2>
        </Title>
        <Accordion type="single" collapsible>
          <AccordionItem value="scores">
            <AccordionTrigger>
              <div className="flex items-center">
                <p className="morabba ml-3">{ad.companies.score_company.toFixed(1)}</p>
                <ScoreIconGenerator
                  key={`score_icon_${ad.id}`}
                  score={ad.companies.score_company}
                />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap">
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="morabba ml-2">
                    <Star className="fill-yellow-500 stroke-none inline-block" />
                    {ad.companies.score_popularity.toFixed(1)}
                  </span>
                  <span>محبوبیت (براساس بازدید کارجویان)</span>
                </div>
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="morabba ml-2">
                    <Star className="fill-yellow-500 stroke-none inline-block" />
                    {ad.companies.score_responsiveness.toFixed(1)}
                  </span>
                  <span>پاسخگویی به رزومه‌های دریافتی</span>
                </div>
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="morabba ml-2">
                    <Star className="fill-yellow-500 stroke-none inline-block" />
                    {ad.companies.score_experience_of_job_seekers.toFixed(1)}
                  </span>
                  <span>تجربه کارجویان از جلسه مصاحبه</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="my-6">
        <div className="flex items-center justify-between">
          <Title>
            <h2 className="w-6/12 truncate">
              درباره <p className="inline-block text-primary">{ad.companies.name}</p>
            </h2>
          </Title>
          <Link href="/" className="w-4/12 truncate text-left">
            {ad.companies.website}
          </Link>
        </div>
        <div className="my-6 text-sm">
          <p>{ad.companies.description}</p>
        </div>
        <Button variant={"outline"}>مشاهده سایر موقعیت های شغلی این سازمان</Button>
      </section>
      <section>
        <Title>
          <h2>مزایا و امکانات رفاهی</h2>
        </Title>
        <div className="flex flex-wrap">
          {ad.facilities.map((item) => (
            <span key={item.id} className="box-info-type">
              {item.type}
            </span>
          ))}
        </div>
      </section>
      <section className="min-h-fit my-6">
        <Title>
          <h3>در یک نگاه</h3>
        </Title>
        <div className="text-sm pr-3 flex flex-wrap">
          <div className="min-w-[50%] pl-3 mt-6">
            <h5 className="morabba text-base">سال تاسیس</h5>
            <p className="truncate">
              {new DateObject({
                date: new Date(ad.companies?.established_year),
                calendar: persian,
              }).format()}
            </p>
          </div>
          <div className="min-w-[50%] mt-6">
            <h5 className="morabba text-base">اندازه سازمان</h5>
            <p className="truncate">{ad.companies.organization_employ}</p>
          </div>
          <div className="min-w-[50%] mt-6">
            <h5 className="morabba text-base">نوع فعالیت</h5>
            <p className="truncate">{ad.companies.type_of_activity}</p>
          </div>
          <div className="min-w-[50%] mt-6">
            <h5 className="morabba text-base">صنعت</h5>
            <p className="truncate">{ad.companies.industry}</p>
          </div>
        </div>
      </section>
    </>
  )
}

const ScoreIconGenerator: React.FC<{ score: number }> = ({ score }) => {
  return (
    <>
      {Array(Math.ceil(score))
        .fill("")
        .map((_, index) => (
          <Star className="stroke-none fill-yellow-500" key={index + 1} />
        ))}
      {Array(5 - Math.ceil(score))
        .fill("")
        .map((_, index) => (
          <Star className="fill-transparent" key={index + 1} />
        ))}
    </>
  )
}

export default Company