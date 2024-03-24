import React from "react"

import { Menu } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"

const AdsBox = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row p-3">
        <section className="h-full">
          <p className="text-base font-semibold text-muted-foreground">
            Front End Developer (React.js)
          </p>
          <div className="text-xs flex flex-nowrap overflow-x-hidden">
            <div className="box-info-type">امکان جذب کارآموز</div>
            <div className="box-info-type">امکان دورکاری</div>
          </div>
          <p className="truncate text-xs my-2">8 - 6 میلیون تومان</p>
          <div className="truncate text-xs">6 اسفند 1400 - 7 اسفند 1400</div>
        </section>
        <section className="h-full flex">
          <p className="box-info-type !h-full m-0">4 روز پیش</p>
          <Button size={"sm"} variant={"outline"} className="mr-3">
            <Menu className="icon-sm" />
          </Button>
        </section>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-2 gap-3 text-sm mt-3">
        <div>
          <span className="text-secondary font-semibold morabba">شرح شغل و وظایف</span>
          <p className="w-10/12">
            پروژه برنامه نویسی اختصاصی وب اپلیکیشن برای برند بسیار معروف می باشد. نیاز به فرانت کار
            ماهر جهت ادامه ی پروژه. تسویه 15 روزه
          </p>
        </div>
        <div>
          <span className="text-secondary font-semibold morabba">نوع همکاری</span>
          <p>قراردادی / پروژه ای</p>
        </div>
        <div className="col-span-2">
          <span className="text-secondary font-semibold morabba">شاخص های کلیدی</span>
          <div className="flex flex-wrap">
            <div className="box-info-type">2 سال سابقه کار در گروه شغلی مشابه</div>
            <div className="box-info-type">React - پیشرفته</div>
            <div className="box-info-type">ترجیحا ساکن اصفهان</div>
            <div className="box-info-type">شاخص های کلیدی 1</div>
            <div className="box-info-type">شاخص های کلیدی 2</div>
            <div className="box-info-type">شاخص های کلیدی 3</div>
            <div className="box-info-type">شاخص های کلیدی 4</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
  return (
    <div className={`mb-2 bg-jv-white py-5 px-3 rounded-lg`}>
      <div className="flex justify-between">
        <section className="h-full">
          <p className="text-base text-jv-lightGray">Front End Developer (React.js)</p>
          <div className="text-xs flex flex-nowrap overflow-x-hidden">
            <div className="box-info-type">امکان جذب کارآموز</div>
            <div className="box-info-type">امکان دورکاری</div>
          </div>
          <p className="truncate text-xs my-2">8 - 6 میلیون تومان</p>
          <div className="truncate text-xs">6 اسفند 1400 - 7 اسفند 1400</div>
        </section>
        <section className="h-full flex items-start">
          <p className="box-info-type m-0">4 روز پیش</p>
          <div className="mt-1 mr-2 flex items-center justify-center cursor-pointer">
            <Menu />
          </div>
        </section>
      </div>
      <div className="mt-4 text-xs grid grid-cols-2 grid-rows-2">
        <div>
          <span className="font-semibold morabba">شرح شغل و وظایف</span>
          <p className="w-10/12">
            پروژه برنامه نویسی اختصاصی وب اپلیکیشن برای برند بسیار معروف می باشد. نیاز به فرانت کار
            ماهر جهت ادامه ی پروژه. تسویه 15 روزه
          </p>
        </div>
        <div>
          <span className="font-semibold morabba">نوع همکاری</span>
          <p>قراردادی / پروژه ای</p>
        </div>
        <div className="col-span-2">
          <span className="font-semibold morabba">شاخص های کلیدی</span>
          <div className="flex flex-wrap">
            <div className="box-info-type">2 سال سابقه کار در گروه شغلی مشابه</div>
            <div className="box-info-type">React - پیشرفته</div>
            <div className="box-info-type">ترجیحا ساکن اصفهان</div>
            <div className="box-info-type">شاخص های کلیدی 1</div>
            <div className="box-info-type">شاخص های کلیدی 2</div>
            <div className="box-info-type">شاخص های کلیدی 3</div>
            <div className="box-info-type">شاخص های کلیدی 4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdsBox
