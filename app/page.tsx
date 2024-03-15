import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { Card, CardContent } from "@/components/modules/ui/card"
import CompnaySlider from "@/components/template/CompnaySlider"
import Landing from "@/components/template/Landing"
import LastAds from "@/components/template/LastAds"
import Image from "next/image"

export default async function Home() {
  return (
    <>
      <Landing />
      <div className="w-full mb-20 overflow-hidden">
        <CompnaySlider />
      </div>
      <div className="mb-20">
        <LastAds />
      </div>
      <div className="mb-20">
        <div className="bg-muted grid grid-cols-2 gap-3 rounded-md p-3">
          <Card className="col-span-2 *:p-6">
            <CardContent className="flex flex-col-reverse justify-between items-center lg:flex-row">
              <div className="center flex-col text-center lg:w-1/2 lg:block lg:text-right">
                <Title className="lg:text-right">
                  <h3>استخدام‌های سراسری و دولتی</h3>
                </Title>
                <p className="w-11/12 my-3">
                  در این قسمت، آخرین فرصت‌های استخدام سراسری و دولتی به‌طور مرتب به‌روزرسانی و منتشر
                  می‌شوند. به صفحه استخدام‌های سراسری سر بزنید و از بررسی روزانه ده‌ها سایت و مرجع
                  خبری دیگر بی‌نیاز شوید.
                </p>
                <Button>مشاهده فرصت های شغلی</Button>
              </div>
              <div>
                <Image
                  width={400}
                  height={300}
                  className="h-48 w-auto lg:hidden"
                  src="/images/newsMobile.webp"
                  alt="Mobile-image"
                />
                <Image
                  width={600}
                  height={400}
                  className="h-96 w-auto hidden lg:block"
                  src="/images/newsDesktop.webp"
                  alt="Desktop-image"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2 *:p-6 lg:col-span-1">
            <CardContent className="h-full flex flex-col-reverse justify-between items-center lg:flex-row">
              <div className="text-center lg:w-1/2 lg:text-right">
                <Title>
                  <h2>رزومه ساز جاب ویژن</h2>
                </Title>
                <p className="w-11/12 inline-block my-3">
                  رزومه ای استاندارد به دو زبان فارسی و انگلیسی بسازید.
                </p>
                <Button>ساخت رزومه</Button>
              </div>
              <div className="h-full center">
                <Image
                  width={600}
                  height={400}
                  className="h-48 w-auto"
                  src="/images/createCv.webp"
                  alt=""
                />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2 *:p-6 lg:col-span-1">
            <CardContent className="h-full flex flex-col-reverse justify-between items-center lg:flex-row">
              <div className="text-center lg:w-1/2 lg:text-right">
                <Title>
                  <h2>ماشین حساب حقوق و دستمزد</h2>
                </Title>
                <p className="w-11/12 inline-block my-3">
                  از حقوق دریافتی افراد در مشاغل مختلف آگاه شوید و تخمین دقیق تری از حقوق منصفانه
                  خود داشته باشید.
                </p>
                <Button>حقوق خود را محاسبه کنید</Button>
              </div>
              <div className="h-full center">
                <Image
                  width={600}
                  height={400}
                  className="h-48 w-auto"
                  src="/images/salary.webp"
                  alt="salary-image"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
