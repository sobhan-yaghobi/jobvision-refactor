import React, { Fragment } from "react"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"
import { Button } from "./ui/button"
import Title from "./Title"
import Image from "next/image"
import Link from "next/link"

const faqItems = [
  {
    id: 1,
    title: "سایت استخدامی جاب ویژن، چه مزیتی نسبت به دیگر سایت‌های کاریابی و استخدامی دارد؟",
    answer:
      "وبسایت جاب ویژن با بیش از 26 هزار آگهی استخدام فعال و استفاده از هوش مصنوعی برای پیشنهاد مرتبط‌ترین آگهی‌ها به کارجویان، فرایند کاریابی را بسیار آسان‌تر کرده است.",
  },
  {
    id: 2,
    title: "آیا ساخت و ارسال رزومه در جاب ویژن برای من هزینه‌ای دارد؟",
    answer:
      "خیر، کارجویان می‌توانند بدون پرداخت هیچ هزینه‌ای در سایت کاریابی جاب ویژن رزومه بسازند و برای آگهی‌های استخدام ارسال کنند.",
  },
  {
    id: 3,
    title: "چگونه می‌توانم آگهی‌های استخدام مشاغل مرتبط با خودم را پیدا کنم؟",
    answer:
      "شما می‌توانید به راحتی با استفاده از نوار جستجوی بالای سایت و انتخاب فیلترهای مختلف، آگهی‌های استخدامی حوزه مرتبط با خودتان را پیدا کنید.",
  },
  {
    id: 4,
    title: "چگونه می‌توانم از جدیدترین آگهی‌های استخدام مطلع شوم؟",
    answer:
      "شما می‌توانید با فعالسازی گزینه ایمیل اطلاع رسانی و عضویت در بات تلگرامی جاب ویژن، از جدیدترین آگهی‌های استخدام و کاریابی حوزه شغلی خود مطلع شوید.",
  },
  {
    id: 5,
    title: "آیا آگهی‌های استخدام شهرستان‌ها نیز در سایت جاب ویژن منتشر می‌شوند؟",
    answer:
      "بله؛ تمامی شهرها و شهرستان‌های استان‌های مختلف ایران در سایت جاب ویژن وجود دارند و شما می‌توانید با استفاده از فیلتر «شهر» در نوار جستجوی بالای سایت، هرکدام از آن‌ها را انتخاب کنید.",
  },
  {
    id: 6,
    title: "آیا محدودیتی در ارسال رزومه برای آگهی‌های استخدامی در سایت جاب ویژن وجود دارد؟",
    answer:
      "خیر؛ شما می‌توانید رزومه خودتان را به صورت کاملا رایگان برای تعداد نامحدودی از آگهی‌های استخدام ارسال کنید.",
  },
]

const MoreItems = [
  {
    id: 1,
    title: "مراحل و نحوه‌ی استفاده از امکانات جاب ویژن",
    desc: "در ادامه، به طور مختصر مراحل و نحوه استفاده از امکاناتی را که سایت کاریابی و استخدامی جاب ویژن در اختیار شما قرار می‌دهد بررسی می‌کنیم.",
  },
  {
    id: 2,
    title: "ثبت‌نام در سایت جاب ویژن",
    desc: "برای ارسال رزومه از طریق سایت استخدامی جاب ویژن، ابتدا باید در سایت ثبت نام کنید. برای این کار روی دکمه‌ی ورود/عضویت کلیک کنید. در این جا، کافی است برای ثبت نام، ایمیل خود را وارد کرده و برای حساب کاربری‌تان یک رمز عبور انتخاب نمایید. علاوه بر آن، امکان ثبت‌نام با گوگل و لینکدین نیز به شما داده شده است.",
  },
  {
    id: 3,
    title: "ساخت رزومه در سایت جاب ویژن",
    desc: "بعد از ثبت‌نام در سایت، به‌راحتی می‌توانید با رزومه‌ساز آنلاین جاب ویژن، یک رزومه‌ی‌ حرفه‌ای و جذاب بسازید. سرویس ساخت رزومه جاب ویژن، این امکان را به شما می‌دهد که هم‌زمان رزومه فارسی و انگلیسی خود را تکمیل کنید. ساختار استاندارد، طراحی جذاب، یکدست بودن رزومه همه‌ کارجویان و امکان ساخت رایگان از جمله مهم‌ترین امکاناتی است که در این مرحله در اختیار شما قرار داده شده است.",
  },
  {
    id: 4,
    title: "ارسال رزومه از طریق سایت کاریابی و استخدام جاب ویژن",
    desc: [
      "در این مرحله می‌توانید با چند کلیک، رزومه خود را برای فرصت‌های شغلی مناسب خودتان در بانک مشاغل جاب ویژن ارسال کنید. برای پیدا کردن این آگهی‌ها به عنوان مثال آگهی های استخدام تهران یا شهرستان، می‌توانید به صفحه فرصت‌های شغلی و یا صفحه فرصت‌های شغلی پیشنهادی مراجعه کرده و آگهی‌های استخدام جدید را مشاهده کنید.",

      "همچنین در این صفحه برای کمک به جستجویی دقیق‌تر و پیدا کردن آگهی استخدام مورد نظرتان، فیلترهای مختلفی قرار داده شده است. برای مثال، با استفاده از فیلتر شهر، می‌توانید آگهی‌های استخدام امروز تهران، فرصت های استخدام اصفهان، تبریز، مشهد، شیراز و شهرهای دیگر را به طور خاص جستجو و مشاهده کنید. بعد از ارسال رزومه باید منتظر بمانید تا کارفرما با شما تماس بگیرد.",

      "پس از اینکه رزومه خود را برای کارفرما ارسال کردید، با ورود به صفحه‌ی پیگیری فرصت‌های شغلی، می‌توانید وضعیت درخواست خود را پیگیری کنید. درخواست‌های شما در یکی از پنج حالت تعیین وضعیت نشده، در حال بررسی، تأیید اولیه برای مصاحبه، رد شده و بسته شده قرار دارد.",
    ],
  },
  {
    id: 5,
    title: "افزایش شانس استخدام در شرکت‌های معتبر",
    desc: [
      "شما به عنوان کارجو باید کاری بیشتر از ارسال رزومه انجام دهید. بازار کار رقابتی امروز موجب شده تا برای هر آگهی استخدامی تعداد زیادی رزومه ارسال شود، بنابراین، باید به دنبال راه‌هایی برای متمایز کردن خود در میان این تعداد کارجو باشید. به ویژه در کلانشهری مثل تهران باید برای به دست آوردن موقعیت استخدام و جلب توجه کارفرمایان تلاش مضاعفی انجام داده و خود و توانایی‌هایتان را به کارفرما اثبات کنید.",

      "بالا بردن شانس استخدام با استفاده از امکانات Job vision، افزایش مهارت‌‌ها و یادگیری تخصص‌های لازم، یکی از بهترین‌ راه‌حل‌ها برای موفقیت در مسیر استخدام است. بدون شک داشتن سابقه کار مرتبط و کافی شانس استخدام شما در موقعیت شغلی مورد نظرتان را افزایش خواهد داد، اما عدم تجربه را می‌توانید با گذراندن دوره‌های تخصصی و کارآموزی جبران کنید. امروزه برای این کار لازم نیست هزینه‌ و زمان زیادی صرف کنید. دوره‌های آموزشی آنلاین متعددی وجود دارد که با شرکت در آن‌ها می‌توانید مهارت‌های لازم را کسب کنید.",

      "در سایت کاریابی جاب ویژن در قسمت توانمندتر شو، بهترین دوره‌های آموزشی هر حوزه شغلی از موسسه‌های معتبر کشور با قیمتی پایین‌تر، در اختیار شما قرار گرفته است. با گذراندن این دوره ها از طریق سایت job vision علاوه بر افزایش توانمندی‌هایتان، یک مدال در رزومه شما نیز به کارفرما نمایش داده می‌شود تا شما را از سایرین متمایز کند.",

      "علاوه بر افزایش مهارت‌های سخت، باید بتوانید مهارت‌های نرم خود را نیز افزایش دهید. مهارت‌های نرم درواقع ویژگی‌های شخصیتی و رفتارهایی است که باعث می‌شود با دیگران بهتر تعامل و همکاری داشته باشیم. داشتن مهارت‌های نرم به موفقیت در مصاحبه‌های استخدامی  شرکت ها کمک زیادی می‌کند. برای این کار لازم است به شناخت عمیقی از شخصیت خود برسید تا بتوانید نقاط ضعفتان را شناسایی کنید. علاوه بر این سنجش ویژگی‌های شخصیتی شما برای بسیاری ازکارفرمایان حائز اهمیت است.",

      "به همین دلیل، ما در سایت کاریابی جاب ویژن، 5 آزمون شخصیت شناسی معتبر را در اختیارتان قرار دادیم تا با شرکت در آن‌ها به درک عمیق‌تری از توانمندی‌ها و عدم توانمندی‌های خود برسید.",

      "استخدام شدن و کاریابی همیشه سخت نیست، فقط کافیست تا راه و رسم آن را بلد باشید. ما در این راه کنار شما هستیم تا بتوانید به شغل ایده آل خود برسید.",
    ],
  },
]

type quickAccessSubLinkType = {
  id: number
  title: string
  link: string
}
type quickAccessLinkType = {
  id: number
  title: string
  link: string
  sublink: quickAccessSubLinkType[]
}
type quickAccessItemType = {
  id: number
  title: string
  links: quickAccessLinkType[]
}
const quickAccessItems: quickAccessItemType[] = [
  {
    id: 1,
    title: "کارجویان",
    links: [
      { id: 11, title: "رزومه ساز دو زبانه", link: "createCv", sublink: [] },
      { id: 12, title: "جستجوی فرصت‌های شغلی", link: "jobs", sublink: [] },
      {
        id: 13,
        title: "آزمون‌های خود شناسی",
        link: "",
        sublink: [
          {
            id: 131,
            title: "آزمون شخصیت شناسی MBTI",
            link: "test1",
          },
          {
            id: 132,
            title: "آزمون تیپ سنجی شغلی Holland",
            link: "test2",
          },
          {
            id: 133,
            title: "آزمون شخصیت شناسی NEO",
            link: "test3",
          },
          {
            id: 134,
            title: "آزمون هوش های چندگانه",
            link: "test4",
          },
          {
            id: 135,
            title: "آزمون هوش هیجانی Bar-On",
            link: "test5",
          },
        ],
      },
      { id: 14, title: "سوالات متداول", link: "faqQuestion", sublink: [] },
      { id: 15, title: "دوره‌های آموزشی", link: "test6", sublink: [] },
      { id: 16, title: "رده بندی شرکت ها", link: "test7", sublink: [] },
      { id: 17, title: "آشنایی با شرکت ها", link: "test8", sublink: [] },
      { id: 18, title: "داده‌های بازار کار", link: "test9", sublink: [] },
    ],
  },
  {
    id: 2,
    title: "کارفرمایان",
    links: [
      { id: 21, title: "ثبت آگهی جدید", link: "test10", sublink: [] },
      { id: 22, title: "جستجوی بانک رزومه", link: "test11", sublink: [] },
      { id: 23, title: "ارزیابی کارجویان", link: "test12", sublink: [] },
      { id: 24, title: "پوشه‌‌ رزومه‌ها", link: "test13", sublink: [] },
      { id: 25, title: "تعرفه‌ها", link: "test14", sublink: [] },
      { id: 26, title: "نمایشگاه‌کار", link: "test15", sublink: [] },
      { id: 27, title: "بخش کارفرمایان", link: "test16", sublink: [] },
      { id: 28, title: "HR Vision", link: "test17 ", sublink: [] },
    ],
  },
  {
    id: 3,
    title: "درباره جاب ویژن",
    links: [
      { id: 31, title: "درباره ما", link: "createCv", sublink: [] },
      { id: 32, title: "سوالات متداول", link: "createCv", sublink: [] },
      { id: 33, title: "تماس با ما", link: "createCv", sublink: [] },
      { id: 34, title: "قوانین و مقررات", link: "createCv", sublink: [] },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden py-6">
      <div className="container">
        <section>
          <Title size={"md"}>
            <h6>سوالات متداول</h6>
          </Title>
          <div>
            <Accordion collapsible type="single">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`accordion-faq-item-${item.id}`}
                  value={`accordion-faq-item-${item.id}`}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex morabba">
                      <p className="dana w-7 h-7 center ml-3 border border-muted rounded-full">
                        {index + 1}
                      </p>
                      <span className="text-right">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <article className="my-20">
          <div>
            <Title size={"md"} className="mb-3">
              <h3>استخدام با معتبرترین سایت کاریابی و استخدامی ایران</h3>
            </Title>
            <p className="text-xs text-justify leading-5 lg:text-sm">
              پیدا کردن شغل دلخواه و فرصت استخدام جدید در سازمانی معتبر با شرایط مطلوب کاری آسان
              نیست. فرآیند پیدا کردن شغل و کاریابی، همواره مسیری با ناهمواری‌های زیاد برای کارجویان
              بوده و هست. وضعیت نه‌چندان مطلوب بازار کار در ایران از یک طرف و عدم کسب مهارت‌های
              تخصصی توسط کارجویان از طرف دیگر، این موضوع را به یک مسئله بزرگ در جامعه تبدیل کرده
              است. همه کارجویان در هر حوزه، شهر، شغل و سنی تمایل به کوتاه و آسان‌تر کردن این مسیر
              ناهموار و تسریع در استخدام خود دارند. برای موفقیت در این راه به یک رزومه حرفه‌ای،
              دسترسی به آگهی‌های استخدام
            </p>
          </div>
          <Accordion type="single" collapsible className="*:!border-none">
            <AccordionItem value="accordion-see-more-article">
              <AccordionContent>
                <div>
                  <section className="mb-9">
                    {MoreItems.map((item) => (
                      <div key={item.id} className="mt-9">
                        <Title className="mb-1">
                          <h3>{item.title}</h3>
                        </Title>
                        {Array.isArray(item.desc) ? (
                          item.desc.map((des, index) => (
                            <p
                              key={index + 1}
                              className="text-xs text-justify leading-5 mb-3 lg:text-sm"
                            >
                              {des}
                            </p>
                          ))
                        ) : (
                          <p className="text-xs text-justify leading-5 lg:text-sm">{item.desc}</p>
                        )}
                      </div>
                    ))}
                  </section>

                  <section className="mb-9">
                    <Title>
                      <h3>لینک‌های مرتبط</h3>
                    </Title>
                    <ul className="flex mt-3">
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            استخدام کارگزاری
                          </Button>
                        </Link>
                      </li>
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            استخدام بیمه
                          </Button>
                        </Link>
                      </li>
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            استخدام خودرو
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <Title>
                      <h3>آخرین مطالب بلاگ</h3>
                    </Title>
                    <ul className="flex mt-3">
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            راهنمای جامع استخدام
                          </Button>
                        </Link>
                      </li>
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            راهنمای جامع رزومه نویسی برای کارجویان
                          </Button>
                        </Link>
                      </li>
                      <li className="ml-5">
                        <Link href={"/"}>
                          <Button
                            variant={"link"}
                            className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                          >
                            گزارش افزایش حقوق 1402 کارگران
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
              </AccordionContent>
              <AccordionTrigger className="group justify-center [&>svg]:hidden">
                <div className="group-data-[state=open]:hidden">مشاهده بیشتر...</div>
                <div className="group-data-[state=closed]:hidden">مشاهده کمتر</div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </article>

        <section>
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="w-full my-6 md:w-7/12 md:my-0">
              <ul className="desktop hidden lg:flex">
                {quickAccessItems.map((item) => (
                  <li key={`quick-access-desktop-item-${item.id}`} className="w-full ml-5">
                    <h3 className="mb-3 morabba text-lg">{item.title}</h3>
                    <QuickAccessItem item={item.links} type="desktop" />
                  </li>
                ))}
              </ul>
              <ul className="mobile flex flex-col lg:hidden">
                <Accordion className="*:border-none" type="single" collapsible>
                  {quickAccessItems.map((item) => (
                    <AccordionItem
                      key={`quick-access-mobile-item-${item.id}`}
                      value={`quick-access-mobile-item-${item.id}`}
                      className="bg-secondary-foreground/20 mb-3 px-2 rounded-sm"
                    >
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <QuickAccessItem item={item.links} type="mobile" />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ul>
            </div>
            <div className="w-full my-5 flex items-center justify-center md:my-0 md:w-4/12 md:justify-end">
              <div className="h-36 p-2 m-1 rounded-xl bg-muted flex items-center justify-center">
                <Image
                  width={118}
                  height={128}
                  className="h-full"
                  src="/images/Enamad.webp"
                  alt=""
                />
              </div>
              <div className="h-36 p-2 m-1 rounded-xl bg-muted flex items-center justify-center">
                <Image
                  width={85}
                  height={128}
                  className="h-full"
                  src="/images/samandehipng.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

type quickAccessItemProps = {
  item: quickAccessItemType["links"]
  type: string
}
const QuickAccessItem: React.FC<quickAccessItemProps> = ({ item, type }) => {
  return (
    <>
      {item.length ? (
        <ul className="!text-sm flex flex-col gap-2">
          {item.map((link) => (
            <Fragment key={`quick-access-${type}-item-sublink-${link.id}`}>
              {link.sublink.length ? (
                <Accordion type="single" className="*:border-none" collapsible>
                  <AccordionItem value={`accordion-access-${type}-sublink-${link.id}`}>
                    <AccordionTrigger className="py-0">{link.title}</AccordionTrigger>
                    <AccordionContent className="py-2">
                      <ul className="flex flex-col gap-2 pr-2">
                        {link.sublink.map((subLink) => (
                          <Link
                            key={`quick-access-${type}-item-sublink-item-${subLink.id}`}
                            href={"/"}
                          >
                            <li>{subLink.title}</li>
                          </Link>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <li>
                  <Link className="text-inherit" href={"/"}>
                    {link.title}
                  </Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default Footer
