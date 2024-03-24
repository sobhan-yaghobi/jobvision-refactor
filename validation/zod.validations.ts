import { z } from "zod"

export const signInSchema = z.object({
  email: z.string().trim().email("ایمیل معتبر نیست").min(1, "ایمیل اجباری میباشد"),
  password: z
    .string()
    .trim()
    .min(8, "حداقل 8 کارکتر اجباری میباشد")
    .max(100, "حداکثر کارکتر 100 میباشد"),
})
export type TypeSignIn = z.infer<typeof signInSchema>

export const companySchema = z.object({
  name: z.string().trim().min(1, "نام اجباری میباشد"),
  location: z.string().trim().min(1, "موقعیت اجباری میباشد"),
  logo: z.string().url().trim().min(1, "لینک لوگو اجباری میباشد"),
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
export type TypeCompany = z.infer<typeof companySchema>
