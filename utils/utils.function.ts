import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import prisma from "../lib/prisma"
import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"

//! ---------- Tailwind Merge Function
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

//! ---------- Float Generator
export const generageFloat = () => parseFloat(Number(Math.random() * (5 - 1 + 1) + 1).toFixed(1))

//! ---------- Get Last Message Of InputMessage
export const getLastMessage = <T>({
  main_id,
  array,
  key,
}: {
  main_id: string
  array: T[] | undefined
  key: keyof T
}): T | undefined => {
  const messages = array?.filter((item) => item[key] === main_id)
  return messages?.length ? messages[messages.length - 1] : undefined
}

//! ---------- Date Persian Formater
export const dateGenerate = (date: string | Date) =>
  new Date(
    new DateObject({
      date,
      calendar: persian,
      locale: persian_fa,
    })
      .convert(undefined, gregorian_en)
      .format()
  )

//! ---------- Auth Funcs
export const hashPassword = (password: string): Promise<string> => hash(password, 12)
export const generateToken = (data: any) =>
  sign({ ...data }, process.env.privateKey ?? "", {
    expiresIn: "72h",
  })
export const verifyPassword = (password: string, hashedPassword: string) =>
  compare(password, hashedPassword)
export const verifyToken = (token: string | undefined) => {
  if (typeof token === "undefined") {
    return false
  }
  try {
    const validationResult = verify(token, process.env.privateKey as string)
    return validationResult
  } catch (err) {
    console.log("Verify Token Error =>", err)
    return false
  }
}
export const validateTokenResualt = async (token: string | undefined) => {
  const tokenResualt = verifyToken(token)

  if (
    typeof tokenResualt !== "string" &&
    typeof tokenResualt !== "boolean" &&
    "email" in tokenResualt
  ) {
    const user = await prisma.user.findFirst({
      where: { email: tokenResualt.email },
      include: { cv: true },
    })
    if (user !== null) {
      return Response.json(user, { status: 201 })
    }
  }
  return Response.json({ message: "user not found :(" }, { status: 404 })
}
