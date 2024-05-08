import React from "react"

import Title from "@/components/modules/Title"
import Image from "next/image"
import Link from "next/link"
import LastCV from "./Sidebar/LastCV"

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground w-full h-fit flex flex-col-reverse relative p-3 rounded-lg group md:h-48">
        <div className="w-full flex flex-row-reverse bottom-0 left-4 overflow-hidden group md:w-5/12 md:absolute">
          <Image
            width={400}
            height={200}
            className="w-full md:w-10/12 md:group-hover:w-full duration-700 ease-in-out"
            src="/images/cmsHome.webp"
            alt="welcome image"
          />
        </div>
        <div className="w-full md:w-6/12 h-full pb-4 md:pb-0 text-jv-light flex flex-col items-start justify-evenly">
          <Title>
            <h4>سلامم کارفرمای عزیز</h4>
          </Title>
          <p className="my-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه استفاده قرار گیرد.
          </p>
          <Link href={"#"} className="text-inherit text-sm underline">
            مشاهده بیشتر
          </Link>
        </div>
      </section>
      <div className="mt-6">
        <LastCV />
      </div>
    </>
  )
}

export default Home
