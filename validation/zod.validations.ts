import { z } from "zod"

const signInSchema = z.object({
  email: z.string().trim().email("ایمیل معتبر نیست").min(1, "ایمیل اجباری میباشد"),
  password: z
    .string()
    .trim()
    .min(8, "حداقل 8 کارکتر اجباری میباشد")
    .max(100, "حداکثر کارکتر 100 میباشد"),
})
export type TypeSignIn = z.infer<typeof signInSchema>

export { signInSchema, }
