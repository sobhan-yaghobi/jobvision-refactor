"use server"

import prisma from "@/lib/prisma"
import { generateToken, hashPassword, verifyPassword } from "@/lib/utils"
import { TypeSignIn } from "@/validation/zod.validations"
import { users } from "@prisma/client"
import { isNull } from "lodash"
import { cookies } from "next/headers"

const registerAction = async ({
  email,
  password,
}: TypeSignIn): Promise<
  { status: "error"; message: string } | { status: "success"; message: string; user: users }
> => {
  const user = await prisma.users.findFirst({ where: { email } })
  if (Boolean(user) && !isNull(user)) {
    const isValidPassword =
      password === user.password || (await verifyPassword(password, user?.password))
    if (isValidPassword) {
      const token = generateToken({ email })
      setTokenCookieAction(token)
      return { status: "success", message: "ورود با موفقیت انجام شد", user }
    }
    return { status: "error", message: "پسورد یا ایمیل صحیح نمیباشد" }
  } else {
    const token = generateToken({ email })
    const hashedPassword = await hashPassword(password)

    const userStatus = await prisma.users.create({ data: { email, password: hashedPassword } })
    if (Boolean(userStatus)) {
      setTokenCookieAction(token)
      return { status: "success", message: "ثبت نام با موفقیت انجام شد", user: userStatus }
    } else {
      return { status: "error", message: "خطایی در سمت سرور رخ داده است" }
    }
  }
}

const setTokenCookieAction = (token: string) => {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 72, // 3 Day
  })
}

export { registerAction }
