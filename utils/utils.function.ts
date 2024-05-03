import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"
import prisma from "../lib/prisma"

import { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"
import { paginationFilterReturn } from "@/types/utils.type"

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

const paginationFilter = <T>(
  current: string | number | null,
  storeCount: string | number | null,
  store: T[]
): paginationFilterReturn<T> => {
  let currentNumber = Number(current) || 1
  let storeNumber = Number(storeCount) || 1
  let filterStore = [] as T[]
  let next_page: number | null = null
  let pageNum: number = 0

  pageNum = Math.ceil(store?.length / storeNumber)
  const endIndex = currentNumber * storeNumber
  const startIndex = endIndex - storeNumber
  filterStore = store?.slice(startIndex, endIndex)
  next_page = currentNumber < pageNum ? currentNumber + 1 : null

  if (currentNumber > pageNum) {
    filterStore = [] as T[]
  }
  return { store: filterStore, next_page }
}

export {
  cn,
  getLastMessage,
  hashPassword,
  generateToken,
  verifyPassword,
  verifyToken,
  validateTokenResualt,
  dateGenerate,
  paginationFilter,
}
