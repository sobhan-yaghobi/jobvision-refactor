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
