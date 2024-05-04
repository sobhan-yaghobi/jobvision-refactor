import React from "react"
import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"

import { ad } from "@/types/utils.type"

import { Star } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import Title from "@/components/modules/Title"
import Link from "next/link"
import { Button } from "@/components/modules/ui/button"

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
                <p className="morabba ml-3">{ad.company.score_company.toFixed(1)}</p>
                <ScoreIconGenerator key={`score_icon_${ad.id}`} score={ad.company.score_company} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap">
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="ml-2 morabba">
                    <Star className="fill-yellow-500 inline-block stroke-none" />
                    {ad.company.score_popularity.toFixed(1)}
                  </span>
                  <span>محبوبیت (براساس بازدید کارجویان)</span>
                </div>
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="ml-2 morabba">
                    <Star className="fill-yellow-500 inline-block stroke-none" />
                    {ad.company.score_responsiveness.toFixed(1)}
                  </span>
                  <span>پاسخگویی به رزومه‌های دریافتی</span>
                </div>
                <div className="w-full mb-3 lg:w-1/2 lg:mb-0">
                  <span className="ml-2 morabba">
                    <Star className="fill-yellow-500 inline-block stroke-none" />
                    {ad.company.score_experience_of_job_seekers.toFixed(1)}
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
              درباره <p className="inline-block text-primary">{ad.company.name}</p>
            </h2>
          </Title>
          <Link href="/" className="w-4/12 truncate text-left">
            {ad.company.website}
          </Link>
        </div>
        <div className="text-sm my-6">
          <p>{ad.company.description}</p>
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
        <div className="text-sm flex flex-wrap pr-3">
          <div className="w-full pl-3 mt-6 sm:min-w-[50%]">
            <h5 className="text-base morabba">سال تاسیس</h5>
            <p className="truncate">
              {new DateObject({
                date: new Date(ad.company?.established_year),
                calendar: persian,
              }).format()}
            </p>
          </div>
          <div className="w-full mt-6 sm:min-w-[50%]">
            <h5 className="text-base morabba">اندازه سازمان</h5>
            <p className="truncate">{ad.company.organization_employ}</p>
          </div>
          <div className="w-full mt-6 sm:min-w-[50%]">
            <h5 className="text-base morabba">نوع فعالیت</h5>
            <p className="truncate">{ad.company.type_of_activity}</p>
          </div>
          <div className="w-full mt-6 sm:min-w-[50%]">
            <h5 className="text-base morabba">صنعت</h5>
            <p className="truncate">{ad.company.industry}</p>
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
          <Star className="fill-yellow-500 stroke-none" key={index + 1} />
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
