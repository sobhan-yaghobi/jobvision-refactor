"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"

import { TypeAd, adSchema } from "@/validation/zod.validations"

//! ---------- Create AD
export const addAD = async (ad: TypeAd) => {
  const { user } = await isAuth()

  if (user && "id" in user) {
    if (user.company_id) {
      const isExist = await prisma.ad.findFirst({
        where: { name: ad.name, company_id: user.company_id },
      })
      if (isExist === null) {
        const adsResult = await prisma.ad.create({ data: { ...ad, company_id: user.company_id } })
        if (adsResult) {
          return { message: "آگهی با موفقیت ثبت شد", status: true, ad: adsResult }
        }
        return { message: "ساخت آگهی با شکست مواجه شد", status: false }
      }
      return { message: "آگهی از قبل با این نام در شرکت شما وجود دارد", status: false }
    }
    return { message: "قبل از ساخت آگهی شرکت خود را ثبت کنید", status: false }
  }
  return { message: "مشکلی در ساخت آگهی به وجود آمد", status: false }
}

//! ---------- Validate AD
export const validateAD = async (ad: TypeAd) => {
  const Result = adSchema.safeParse(ad)
  return {
    data: Result.success ? Result.data : ({} as TypeAd),
    errors: !Result.success
      ? Result.error.issues.map((err) => ({
          message: err.message as string,
          path: err.path.at(0) as string,
        }))
      : null,
  }
}
