import React from "react"

import Map from "./Map"
import SearchForm from "../modules/SearchForm"
import Title from "../modules/Title"
import { Button } from "../modules/ui/button"

const Landing: React.FC = async () => {
  return (
    <div className="h-auto relative z-10 lg:h-current lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:justify-between lg:mb-0">
      <div className="right-landing text-center flex flex-col justify-center col-span-1 row-span-1 mt-12 mb-24 lg:col-span-1 lg:row-span-2 lg:mb-0 lg:text-right">
        <Title size={"lg"}>
          <h1>
            <span className="text-primary !dana-bold lg:ml-2">38,346</span> آگهی شغلی در
            <span className="text-primary !dana-bold lg:mx-2"> 489</span> شهر
          </h1>
        </Title>
        <p className="text-lg my-3 md:my-5 lg:text-lg">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
          است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className="left-landing hidden col-span-1 row-span-2 lg:flex lg:items-center lg:justify-end">
        <Map />
      </div>
      <div className="h-full col-span-2 row-span-1">
        <div className="w-full h-full flex flex-col items-start">
          <Title size={"md"}>
            <h2 className="mb-6">دنبال چه شغلی می‌گردید؟</h2>
          </Title>
          <SearchForm path="/jobs">
            <Button variant={"default"} className="w-auto">
              جستجو در مشاغل
            </Button>
          </SearchForm>
        </div>
      </div>
    </div>
  )
}

export default Landing
