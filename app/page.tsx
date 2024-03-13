import Image from "next/image"

export default async function Home() {
  return (
    <>
      <div className="relative h-auto md:h-current pt-5 px-2 grid grid-cols-2 grid-rows-2 justify-between  md:px-10 md:grid-rows-2 md:items-center lg:grid-rows-3 lg:px-24 z-10">
        <div className="right-landing py-1 text-center md:text-right flex flex-col justify-evenly col-span-2 row-span-1 md:col-span-1 lg:row-span-2">
          <h1 className="text-2xl lg:text-3xl dana-bold">
            <span className="text-primary lg:mx-2">38,346</span> آگهی شغلی در
            <span className="text-primary lg:mx-2"> 489</span> شهر
          </h1>
          <p className="my-3 md:my-5 text-lg lg:text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className="left-landing col-span-1 row-span-1 hidden md:block lg:row-span-2">
          {/* {WindowsSize.innerWidth <= 768 ? null : <MapCircle />} */}
        </div>
        <div className="col-span-2 row-span-1 h-full">
          <div className="w-full h-full flex flex-col items-start justify-center">
            <h2 className="mb-5 pr-2 text-xl">دنبال چه شغلی می‌گردید؟</h2>
            {/* <SearchFrom /> */}
          </div>
        </div>
      </div>
    </>
  )
}
