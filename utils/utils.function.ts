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
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

//! ---------- Get Last Message Of InputMessage
const getLastMessage = <T>({
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
const dateGenerate = (date: string | Date) =>
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
const hashPassword = (password: string): Promise<string> => hash(password, 12)
const generateToken = (data: any) =>
  sign({ ...data }, process.env.privateKey ?? "", {
    expiresIn: "72h",
  })
const verifyPassword = (password: string, hashedPassword: string) =>
  compare(password, hashedPassword)
const verifyToken = (token: string | undefined) => {
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
const validateTokenResualt = async (token: string | undefined) => {
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

export {
  cn,
  getLastMessage,
  dateGenerate,
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
  validateTokenResualt,
}
