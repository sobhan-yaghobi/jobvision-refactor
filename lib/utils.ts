import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import prisma from "./prisma"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

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
    const user = await prisma.user.findFirst({ where: { email: tokenResualt.email } })
    if (user !== null) {
      return Response.json(user, { status: 201 })
    }
  }
  return Response.json({ message: "user not found :(" }, { status: 404 })
}

export interface TimeType {
  date: number
  type: "Second" | "Minute" | "Hour" | "Day" | "Month" | "Year" | "NotValid"
}
const getTime = (date: Date | string): TimeType => {
  const now = new Date()
  const nowTime = now.getTime()
  const dateTime = typeof date === "string" ? new Date(date).getTime() : date.getTime()

  const mainTime = nowTime - dateTime
  const secondsTime = Math.floor(mainTime / 1000)
  const minutesTime = Math.floor(mainTime / 1000 / 60)
  const hourTime = Math.floor(mainTime / 1000 / 60 / 60)
  const dayTime = Math.floor(mainTime / 1000 / 60 / 60 / 24)
  const monthTime = Math.floor(mainTime / 1000 / 60 / 60 / 24 / 30)
  const yearTime = Math.floor(mainTime / 1000 / 60 / 60 / 24 / 30 / 12)

  return dateTime < nowTime && secondsTime > 0 && secondsTime <= 59
    ? { date: secondsTime, type: "Second" }
    : dateTime < nowTime && minutesTime > 0 && minutesTime <= 59
    ? { date: minutesTime, type: "Minute" }
    : dateTime < nowTime && hourTime > 0 && hourTime <= 23
    ? { date: hourTime, type: "Hour" }
    : dateTime < nowTime && dayTime > 0 && dayTime <= 31
    ? { date: dayTime, type: "Day" }
    : dateTime < nowTime && monthTime > 0 && monthTime <= 12
    ? { date: monthTime, type: "Month" }
    : dateTime < nowTime && yearTime > 0
    ? { date: yearTime, type: "Year" }
    : { date: 0, type: "NotValid" }
}

export {
  cn,
  getLastMessage,
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
  validateTokenResualt,
  getTime,
}
