"use server"

import prisma from "@/lib/prisma"
import { generateToken, hashPassword, verifyPassword } from "@/lib/utils"
import { TypeSignIn } from "@/validation/zod.validations"
import { isNull } from "lodash"
import { cookies } from "next/headers"

const signInAction = async ({
  email,
  password,
}: TypeSignIn): Promise<{ status: "success" | "error"; message: string }> => {
  const user = await prisma.users.findFirst({ where: { email } })
  if (Boolean(user) && !isNull(user)) {
    const isValidPassword = await verifyPassword(password, user?.password)
    if (isValidPassword) {
      return { status: "success", message: "ورود با موفقیت انجام شد" }
    }
    return { status: "error", message: "پسورد یا ایمیل صحیح نمیباشد" }
  } else {
    const token = generateToken({ email })
    const hashedPassword = await hashPassword(password)

    const userStatus = await prisma.users.create({ data: { email, password: hashedPassword } })
    if (Boolean(userStatus)) {
      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 72, // 3 Day
      })
      return { status: "success", message: "ثبت نام با موفقیت انجام شد" }
    } else {
      return { status: "error", message: "خطایی در سمت سرور رخ داده است" }
    }
  }
}

export { signInAction }
