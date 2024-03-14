import React from "react"
import Map from "./Map"
import { SearchForm } from "../modules/SearchForm"

const Landing = async () => {
  const provinces = await prisma.province.findMany({ include: { city: true } })
  const categories = await prisma.category.findMany({ include: { category_collection: true } })
  return (
    <div className="h-auto relative z-10 lg:h-current lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:justify-between lg:mb-0">
      <div className="right-landing flex flex-col justify-center col-span-1 row-span-1 mt-12 mb-24 text-center lg:col-span-1 lg:row-span-2 lg:text-right lg:mb-0">
        <h1 className="text-2xl lg:text-3xl dana-bold">
          <span className="text-primary lg:ml-2">38,346</span> آگهی شغلی در
          <span className="text-primary lg:mx-2"> 489</span> شهر
        </h1>
        <p className="my-3 md:my-5 text-lg lg:text-lg">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
          است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className="left-landing hidden lg:flex lg:items-center lg:justify-end col-span-1 row-span-2">
        <Map />
      </div>
      <div className="col-span-2 row-span-1 h-full">
        <div className="w-full h-full flex flex-col items-start">
          <h2 className="mb-6 pr-2 text-xl">دنبال چه شغلی می‌گردید؟</h2>
          <SearchForm provinces={provinces} categories={categories} />
        </div>
      </div>
    </div>
  )
}

export default Landing
