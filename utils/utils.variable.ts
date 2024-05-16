import { seniority_level, gender, cooperation_type } from "@/prisma/generated/client"
import { TypeMenuItem, TypeStatus, QuickAccessItemType } from "../types/utils.type"

//! Company Image Storage Url
export const imageBucket = "jobvision"
export const supabaseUrl =
  "https://xsuywgifuwiufdwmpzxr.supabase.co/storage/v1/object/public/jobvision/"
export const MAX_UPLOAD_SIZE = 1024 * 1024 * 10 // 10MB

//! ---------- Header Variables
export const menuItem: TypeMenuItem[] = [
  { id: 1, name: "فرصت های شغلی", link: "/jobs", isMegaMenu: true },
  { id: 2, name: "رده بندی شرکت ها", link: "#", isMegaMenu: false },
  { id: 3, name: "رزومه ساز", link: "#", isMegaMenu: false },
]
export const AboutUsItemArray = [
  {
    id: 1,
    title: "کارجوی همراه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/worker.webp",
    customClass: "about-us-box-1",
  },
  {
    id: 2,
    title: "سازمان های در حال همکاری",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/skyline.webp",
    customClass: "about-us-box-2",
  },
  {
    id: 3,
    title: "موقعیت شغلی فعال",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/job-search.webp",
    customClass: "about-us-box-3",
  },
  {
    id: 4,
    title: "استخدام موفق",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده گرافیک است.",
    iconSrc: "/images/hiring.webp",
    customClass: "about-us-box-4",
  },
]
export const whyUsArray = [
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

//! ---------- Map Variable
export const MessageArray = [
  { id: 1, title: "رایان گستر" },
  { id: 2, title: "صنعت رایان پارس" },
  { id: 3, title: "از کی وام" },
  { id: 4, title: "بانک خاورمیانه" },
  { id: 5, title: "بازرگانی الماس امید" },
  { id: 6, title: "بینالود" },
  { id: 7, title: "ستاک" },
  { id: 8, title: "خوشگوار" },
  { id: 9, title: "شرکت و صنایع چوبی پاسارگاد" },
]

//! ---------- Footer Variables
export const faqItems = [
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
export const MoreItems = [
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
export const quickAccessItems: QuickAccessItemType[] = [
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
export const relatedLinks = [
  { name: "استخدام کارگزاری", href: "/" },
  { name: "استخدام بیمه", href: "/" },
  { name: "استخدام خودرو", href: "/" },
]
export const lastBlogs = [
  { name: "راهنمای جامع استخدام", href: "/" },
  { name: "راهنمای جامع رزومه نویسی برای کارجویان", href: "/" },
  { name: "گزارش افزایش حقوق 1402 کارگران", href: "/" },
]

//! ---------- Add AD Variables
export const statusLabelItems = [
  {
    name: "militaryOrder",
    value: "امریه سربازی",
  },
  {
    name: "disabledPeople",
    value: "امکان استخدام معلولین",
  },
  {
    name: "itern",
    value: "امکان دورکاری",
  },
  {
    name: "telecommuting",
    value: "امکان دریافت کارآموز",
  },
  {
    name: "response",
    value: "پاسخگویی در اصرع وقت",
  },
  {
    name: "important",
    value: "این آگهی فوری میباشد",
  },
]
export const initialStatusData: TypeStatus = {
  important: false,
  response: false,
  itern: false,
  telecommuting: false,
  disabledPeople: false,
  militaryOrder: false,
}
export const genderItems: { type: gender; name: string }[] = [
  { name: "آقا", type: "MALE" },
  { name: "خانوم", type: "FEMALE" },
  { name: "تفاوتی ندارد", type: "NOT_IMPORTANT" },
]
export const seniorityLevelItems: { type: seniority_level; name: string }[] = [
  { name: "کارگر", type: "WORKER" },
  { name: "کارمند", type: "EMPLOYEE" },
  { name: "کارشناس", type: "EXPERT" },
  { name: "کارشناس ارشد", type: "MA" },
  { name: "معاونت", type: "ASSISTANCE" },
  { name: "مدیر ارشد", type: "CHIEF" },
]
export const cooperationTypeItems: { type: cooperation_type; name: string }[] = [
  { name: "تمام وقت", type: "FULL_TIME" },
  { name: "پاره وقت", type: "PART_TIME" },
  { name: "قراردادی", type: "CONTRACT" },
]
export type TypePrice = {
  type:
    | "RIGHT_UNDER-4"
    | "RIGHT_BETWEEN-4-8"
    | "RIGHT_BETWEEN-8-12"
    | "RIGHT_BETWEEN-12-20"
    | "RIGHT_HIGHER-20"
  name: string
}
export const priceItems: TypePrice[] = [
  { name: "زیر 4 میلیون تومان", type: "RIGHT_UNDER-4" },
  { name: "بین 4 تا 8 میلیون", type: "RIGHT_BETWEEN-4-8" },
  { name: "بین 8 تا 12 میلیون", type: "RIGHT_BETWEEN-8-12" },
  { name: "بین 12 تا 20 میلیون", type: "RIGHT_BETWEEN-12-20" },
  { name: "بالای 20 میلیون تومان", type: "RIGHT_HIGHER-20" },
]

//! ---------- Search Form Variables
export const filterSaerchForm = {
  search: "search",
  city: "city",
  collection: "collection",
  province: "province",
}
export type TypeFilterAd =
  | "itren"
  | "telecommuting"
  | "disabledPeople"
  | "militaryOrder"
  | "seniority_level"
  | "cooperation_type"
  | "price"
export const filterAd = {
  itren: "itren",
  telecommuting: "telecommuting",
  disabledPeople: "disabledPeople",
  militaryOrder: "militaryOrder",
  seniority_level: "seniority_level",
  cooperation_type: "cooperation_type",
  price: "price",
}
