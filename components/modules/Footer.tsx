import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"
import Title from "./Title"

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

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden py-6">
      <div className="container">
        <section>
          <Title size={"md"}>
            <h6 className="text-base mb-3 lg:text-2xl">سوالات متداول</h6>
          </Title>
          <div className="">
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
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
