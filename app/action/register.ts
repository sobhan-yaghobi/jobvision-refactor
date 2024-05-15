"use server"

import { generateToken, hashPassword, verifyPassword } from "@/utils/utils.function"
import { cookies } from "next/headers"
import { isNull } from "lodash"
import prisma from "@/lib/prisma"

import { User } from "@/types/utils.type"
import { TypeSignIn, signInSchema } from "@/validation/zod.validations"

//! ---------- Register User
export const registerAction = async ({
  email,
  password,
}: TypeSignIn): Promise<
  { status: "error"; message: string } | { status: "success"; message: string; user: User }
> => {
  const user = await prisma.user.findFirst({ where: { email }, include: { cv: true } })
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

    const userStatus = await prisma.user.create({
      data: { email, password: hashedPassword },
      include: { cv: true },
    })
    if (Boolean(userStatus)) {
      setTokenCookieAction(token)
      return { status: "success", message: "ثبت نام با موفقیت انجام شد", user: userStatus }
    } else {
      return { status: "error", message: "خطایی در سمت سرور رخ داده است" }
    }
  }
}

//! ---------- Validate User
export const validateRegister = async (user: TypeSignIn) => {
  const resault = signInSchema.safeParse(user)
  return {
    data: resault.success ? resault.data : ({} as TypeSignIn),
    errors: !resault.success
      ? resault.error.issues.map((err) => ({
          message: err.message as string,
          path: err.path.at(0) as string,
        }))
      : null,
  }
}

//! ---------- Set A TokenCookie Timer
const setTokenCookieAction = (token: string) => {
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 72, // 3 Day
  })
}
