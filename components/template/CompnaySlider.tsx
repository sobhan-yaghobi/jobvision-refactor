"use client"

import React from "react"
import { companiesWithFollower } from "@/types/utils.type"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Navigation, A11y, Autoplay } from "swiper/modules"

import CompanyBox from "../modules/CompanyBox"

import useSWR from "swr"
import { SwiperNavButtons } from "../modules/SwiperNavButtons"

const CompnaySlider: React.FC = () => {
  const { data: companies, isLoading } = useSWR("/api/companies", async () => {
    const res = await fetch("/api/company")
    const companiesData: companiesWithFollower[] = await res.json()
    return companiesData
  })

  return (
    <div className="mt-6">
      <Swiper
        modules={[Pagination, Navigation, A11y, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {isLoading
          ? Array(9)
              .fill("")
              .map((_, index) => (
                <SwiperSlide className="w-full">
                  <div className="w-full h-72 bg-muted animate-pulse rounded-lg">{index}</div>
                </SwiperSlide>
              ))
          : companies?.map((company) => (
              <SwiperSlide key={`swiper-slide-${company.id}`}>
                <CompanyBox key={company.id} company={company} className="keen-slider__slide" />
              </SwiperSlide>
            ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  )
}

export default CompnaySlider
