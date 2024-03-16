import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/modules/ui/card"
import CompnaySlider from "@/components/template/CompnaySlider"
import Landing from "@/components/template/Landing"
import LastAds from "@/components/template/LastAds"
import Image from "next/image"

const AboutUsItemArray = [
  {
    id: 1,
    title: "کارجوی همراه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/worker.webp",
    customClass:
      "from-[#f8f9fa] to-[#ec8386] shadow-[-10px_10px_30px_-9px_#ff979a,10px_10px_30px_-9px_#c96f72]",
  },
  {
    id: 2,
    title: "سازمان های در حال همکاری",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/skyline.webp",
    customClass:
      "from-[#f8f9fa] to-[#A5A8F2] shadow-[-10px_10px_30px_-9px_#9396d7,10px_10px_30px_-9px_#b7baff]",
  },
  {
    id: 3,
    title: "موقعیت شغلی فعال",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/job-search.webp",
    customClass:
      "from-[#f8f9fa] to-[#90D1F4] shadow-[-10px_10px_30px_-9px_#80bad9,10px_10px_30px_-9px_#a0e8ff]",
  },
  {
    id: 4,
    title: "استخدام موفق",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/hiring.webp",
    customClass:
      "from-[#f8f9fa] to-[#F5CD8D] shadow-[-10px_10px_30px_-9px_#dab67d,10px_10px_30px_-9px_#ffe49d]",
  },
]

const whyUsArray = [
  {
    id: 1,
    title: "مورد اعتماد",
    iconColor: "#F06263",
    iconSrc: "/images/trust.webp",
    desc: "دسترسی به بهترین موقعیت‌های کاریابی و مشاهده فرصت‌های استخدام معتبرترین سازمان‌های ایران از جمله مهم‌ترین مزیت‌های سایت کاریابی جاب ویژن است.",
  },
  {
    id: 2,
    title: "هوشمند",
    iconColor: "#7551F5",
    iconSrc: "/images/smart-city.webp",
    desc: "سایت کاریابی جاب ویژن با استفاده از هوش مصنوعی (AI)، عملکرد شما را در سیستم رصد کرده و بر همین اساس، آگهی‌های استخدام مرتبط را از طریق پنل کاربری، ایمیل، ربات تلگرام و در برخی موارد پیامک و نوتیفیکشن به شما پیشنهاد می‌دهد.",
  },
  {
    id: 3,
    title: "رزومه ساز",
    iconColor: "#F4885F",
    iconSrc: "/images/resume.webp",
    desc: "سایت کاریابی جاب ویژن با استفاده از هوش مصنوعی (AI)، عملکرد شما را در سیستم رصد کرده و بر همین اساس، آگهی‌های استخدام مرتبط را از طریق پنل کاربری، ایمیل، ربات تلگرام و در برخی موارد پیامک و نوتیفیکشن به شما پیشنهاد می‌دهد.",
  },
  {
    id: 4,
    title: "آزمون خودشناسی",
    iconColor: "#28BBF3",
    iconSrc: "/images/mindset.webp",
    desc: "قبل از اینکه به دنبال فرصت‌های استخدام مناسب بگردید باید خود را بشناسید. سایت استخدام جاب ویژن به کمک معتبرترین آزمون‌ها و با ارائه‌ی گزارش‌های تحلیلی به شما کمک می‌کند به شناخت دقیق‌تری از ویژگی‌های شخصیتی، علائق شغلی، هوش هیجانی (EQ) و سایر جنبه‌های هوش خود مثل حل مسئله، قدرت تحلیل و استدلال برسید.",
  },
  {
    id: 5,
    title: "توانایی ملاقات با مدیران",
    iconColor: "#90D142",
    iconSrc: "/images/conversation.webp",
    desc: "جاب‌ویژن برگزارکننده بزرگترین نمایشگاه‌های کار در کشور است.سازمانها در این رویداد به دنبال ارتقای برند کارفرمایی خود و استخدام بهترین استعدادهای بازار کار هستند پس فرصت مناسبی برای نیروی متخصص فراهم شده تا اطلاعات کافی از سازمانها کسب کرده و شانس خود را برای استخدام شدن در آنها امتحان کنند.",
  },
  {
    id: 6,
    title: "امکان معرفی کامل به کارفرما",
    iconColor: "#F56564",
    iconSrc: "/images/teacher.webp",
    desc: "در سایت استخدامی جاب ویژن می‌توانید علاوه بر رزومه، اطلاعات بیشتری از خود به کارفرما ارائه کنید تا شانس استخدام بالاتری داشته باشید. نتیجه آزمون‌‌های خودشناسی، نمونه کار، معرفی صوتی، تلفن تماس مدیران و همکاران سابق و نیز نامه اختصاصی برای سازمان‌ها، از جمله امکاناتی هستند که به کمک آن‌ها می‌توانید خود و توانمندی‌هایتان را بهتر به کارفرما معرفی کنید.",
  },
  {
    id: 7,
    title: "جز شبکه های قوی اجتماعی",
    iconColor: "#D1C5F2",
    iconSrc: "/images/social-media.webp",
    desc: "جاب ویژن در شبکه‌های اجتماعی نیز حضور فعالی دارد و بیش از 400 هزار متخصص و کارجو، صفحه جاب ویژن در لینکدین، تلگرام، اینستاگرام و توییتر را دنبال می‌کنند.",
  },
  {
    id: 8,
    title: "همکاری با موسسات ایران",
    iconColor: "#F5895D",
    iconSrc: "/images/teamwork.webp",
    desc: "هرچه مهارت‌های بیشتری داشته باشید در موقعیت‌های شغلی بهتری می‌توانید استخدام شوید. سایت کاریابی جاب ویژن با همکاری بهترین موسسات آموزشی کشور، دوره‌های آموزشی مفید و کاربردی را به شما معرفی می‌کند. پس از شرکت در این دوره‌ها، مدالی در کنار رزومه شما قرار می‌گیرد که باعث تمایز شما از سایر کارجویان می‌شود؛ به این ترتیب، می‌توانید در رقابت کاریابی پیروز شده و در موقعیت شغلی بهتری استخدام شوید.",
  },
]

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

      <div className="mb-20">
        <div className="flex flex-col items-center justify-start  lg:relative">
          <Title size={"lg"} className="text-center">
            <h5 className="text-primary">جاب ویژن</h5>
          </Title>
          <Title size={"md"} className="text-center mt-3">
            <p>دستیار استخدامی شما</p>
          </Title>
          <div className="w-full h-auto grid grid-cols-1 gap-3 mt-3 md:grid-cols-2 xl:grid-cols-4">
            {AboutUsItemArray.map((box, index) => (
              <Card key={`about-us-item-${index + 1}`} className="p-3 *:p-1.5">
                <CardHeader>
                  <div className={`${box.customClass} bg-gradient-to-tl w-14 p-2 rounded-sm`}>
                    <Image width={56} height={56} src={box.iconSrc} alt="" />
                  </div>
                </CardHeader>
                <CardTitle>
                  <Title className="mt-1.5">
                    <h6>{box.title}</h6>
                  </Title>
                </CardTitle>
                <CardDescription>{box.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20">
        
      </div>
    </>
  )
}
