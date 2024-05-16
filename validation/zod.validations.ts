import { MAX_UPLOAD_SIZE } from "@/utils/utils.variable"
import { $Enums } from "@/prisma/generated/client"
import { z } from "zod"

//! ---------- Sign In Schema
export const signInSchema = z.object({
  email: z.string().trim().email("ایمیل معتبر نیست").min(1, "ایمیل اجباری میباشد"),
  password: z
    .string()
    .trim()
    .min(8, "حداقل 8 کارکتر اجباری میباشد")
    .max(100, "حداکثر کارکتر 100 میباشد"),
})
export type TypeSignIn = z.infer<typeof signInSchema>

//! ---------- Company Schema
export const companySchema = z.object({
  name: z.string().trim().min(1, "نام اجباری میباشد"),
  location: z
    .object({
      address: z.string().trim().default(""),
      city_id: z.string().trim().default(""),
    })
    .superRefine((value, ctx) => {
      if (!value.address || !value.city_id)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "نشانی شرکت اجباری میباشد",
          path: ["location"],
        })
    }),
  score_company: z.number(),
  score_popularity: z.number(),
  score_experience_of_job_seekers: z.number(),
  score_responsiveness: z.number(),
  website: z.string().url().trim().min(1, "لینک وب سایت اجباری میباشد"),
  description: z.string().trim().min(1, "درباره شرکت اجباری میباشد"),
  slogan: z.string().trim().min(1, "شعار شرکت اجباری میباشد"),
  organization_employ: z.number().min(1, "تعداد کارمندان شرکت اجباری میباشد"),
  type_of_activity: z.string().trim().min(1, "نوع فعالیت اجباری میباشد"),
  industry: z.string().trim().min(1, "نوع صنعت اجباری میباشد"),
  established_year: z.date(),
})

export const CompanySchemaWithLogo = companySchema.extend({
  logo: z.instanceof(File).superRefine((file, ctx) => {
    if (!file.size) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "لوگو اجباری میباشد",
        path: ["logo"],
      })
    } else if (!file || file.size >= MAX_UPLOAD_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "حداکثر حجم عکس 10 مگابایت میباشد",
        path: ["logo"],
      })
    }
  }),
})

export type TypeCompany = z.infer<typeof companySchema>
export type TypeCompanyWithLogo = z.infer<typeof CompanySchemaWithLogo>

//! ---------- AD Schema
const genderEnums = [$Enums.gender.FEMALE, $Enums.gender.MALE, $Enums.gender.NOT_IMPORTANT] as const
const seniorityLevelEnums = [
  $Enums.seniority_level.WORKER,
  $Enums.seniority_level.EMPLOYEE,
  $Enums.seniority_level.EXPERT,
  $Enums.seniority_level.MA,
  $Enums.seniority_level.ASSISTANCE,
  $Enums.seniority_level.CHIEF,
] as const
const cooperationTypeEnums = [
  $Enums.cooperation_type.FULL_TIME,
  $Enums.cooperation_type.PART_TIME,
  $Enums.cooperation_type.CONTRACT,
] as const

export const adSchema = z.object({
  name: z.string().trim().min(1, "نام آگهی اجباری میباشد"),
  price: z
    .object({
      min: z.number().min(500000, "حداقل قیمت آگهی 500 هزار تومان میباشد"),
      max: z.number(),
      is_price_max: z.boolean(),
    })
    .superRefine((val, ctx) => {
      if (Boolean(val.is_price_max && val.min === val.max)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "حداقل حقوق نمیتواند برابر با حداکثر حقوق باشد",
          path: ["price"],
        })
      }
      if (Boolean(val.is_price_max && val.min > val.max)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "حداقل حقوق نمیتواند از حداکثر حقوق بیشتر باشد",
          path: ["price"],
        })
      }
    }),
  work_time: z.string().trim().min(1, "زمان کار آگهی اجباری میباشد"),
  travel_benefits: z.string().trim(),
  age: z
    .object({
      min: z.number().min(16, "حداقل سن اجباری 16 سال میباشد"),
      max: z.number(),
      is_age_max: z.boolean(),
    })
    .superRefine((val, ctx) => {
      if (Boolean(val.is_age_max && val.min === val.max)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "حداقل سن نمیتواند برابر با حداکثر سن باشد",
          path: ["price"],
        })
      }
      if (Boolean(val.is_age_max && val.min > val.max)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "حداقل سن نمیتواند از حداکثر سن بیشتر باشد",
          path: ["price"],
        })
      }
    }),
  edicational_level: z.array(z.string()).min(1, "میزان تحصیلات اجباری میباشد"),
  key_indicator: z.array(z.string()).min(1, "شاخص های کلیدی اجباری میباشد"),
  software_skills: z.array(z.string()).min(1, "مهارت های نرم افزاری اجباری میباشد"),
  tags: z
    .array(
      z.object({
        id: z.string(),
        category_id: z.string().nullable(),
        name: z.string().nullable(),
        link: z.string().nullable(),
      })
    )
    .min(1, "تگ های آگهی اجباری میباشد"),
  facilities: z
    .array(
      z.object({
        id: z.string(),
        type: z.string(),
      })
    )
    .min(1, "مزایا و امکانات اجباری میباشد"),
  gender: z.enum(genderEnums, { required_error: "جنسیت اجباری میباشد" }),
  seniority_level: z.enum(seniorityLevelEnums, { required_error: "سطح ارشدیت اجباری میباشد" }),
  cooperation_type: z.enum(cooperationTypeEnums, { required_error: "نوع همکاری اجباری میباشد" }),
  important: z.boolean().default(false),
  response: z.boolean().default(false),
  itern: z.boolean().default(false),
  telecommuting: z.boolean().default(false),
  disabledPeople: z.boolean().default(false),
  militaryOrder: z.boolean().default(false),
})

export type TypeAd = z.infer<typeof adSchema>
