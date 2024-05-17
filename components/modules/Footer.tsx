import React, { Fragment } from "react"

import {
  MoreItems,
  faqItems,
  lastBlogs,
  quickAccessItems,
  relatedLinks,
} from "@/utils/utils.variable"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"
import { Button } from "./ui/button"
import Title from "./Title"
import Image from "next/image"
import Link from "next/link"
import { QuickAccessItemType } from "@/types/utils.type"

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden pt-6 pb-3">
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
                      <p className="w-7 h-7 center ml-3 border border-muted rounded-full dana">
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
                      {relatedLinks.map((item, index) => (
                        <li key={`relateed-link-${index}`} className="ml-5">
                          <Link href={item.href}>
                            <Button
                              variant={"link"}
                              className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                            >
                              {item.name}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <Title>
                      <h3>آخرین مطالب بلاگ</h3>
                    </Title>
                    <ul className="flex mt-3">
                      {lastBlogs.map((item, index) => (
                        <li key={`last-blog-${index}`} className="ml-5">
                          <Link href={item.href}>
                            <Button
                              variant={"link"}
                              className="text-muted text-xs underline hover:text-muted/70 lg:text-sm"
                            >
                              {item.name}
                            </Button>
                          </Link>
                        </li>
                      ))}
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
            <div className="w-full flex items-center justify-center my-5  md:w-4/12 md:justify-end md:my-0">
              <div className="bg-muted h-36 p-2 flex items-center justify-center m-1 rounded-xl">
                <Image
                  width={118}
                  height={128}
                  className="h-full"
                  src="/images/Enamad.webp"
                  alt=""
                />
              </div>
              <div className="bg-muted h-36 flex items-center justify-center p-2 m-1 rounded-xl">
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

        {/*//! ---------- Repo Url  */}
        <section className="text-center mt-3">
          <p>
            این وب‌سایت یک <span className="font-bold">کلون وب</span> از وب‌سایت رسمی است.
          </p>
          <div className="center mt-3">
            <Button variant={"outline"} className="text-black hover:shadow-xl">
              <Link
                className="flex"
                target="_blank"
                href={"https://github.com/sobhan-yaghobi/jobvision-refactor"}
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="icon btn-icon-l"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                ریپو پروژه
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </footer>
  )
}

//! ---------- Component Of Footer
type QuickAccessItemProps = {
  item: QuickAccessItemType["links"]
  type: string
}

const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ item, type }) => {
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
