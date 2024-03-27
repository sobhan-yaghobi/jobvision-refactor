"use server"

import { TypeAd } from "@/validation/zod.validations"
import isAuth from "./isAuth"

const addAds = async (ad: TypeAd) => {
  const { user } = await isAuth()

  if (user !== null) {
    if (user.company_id !== null) {
      const isExsist = await prisma.ads.findFirst({
        where: { name: ad.name, company_id: user.company_id },
      })
      if (isExsist === null) {
        const adsResualt = await prisma.ads.create({ data: { ...ad, company_id: user.company_id } })
        if (adsResualt) {
          return { message: "آگهی با موفقیت ثبت شد", status: true, ad: adsResualt }
        }
        return { message: "ساخت آگهی با شکست مواجه شد", status: false }
      }
      return { message: "آگهی از قبل با این نام در شرکت شما وجود دارد", status: false }
    }
    return { message: "قبل از ساخت آگهی شرکت خود را ثبت کنید", status: false }
  }
  return { message: "مشکلی در ساخت آگهی به وجود آمد", status: false }
}

export default addAds
