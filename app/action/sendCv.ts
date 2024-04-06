"use server"

import { ad } from "@/types/utils.type"
import isAuth from "./isAuth"

const sendCv = async (ad: ad) => {
  const { user } = await isAuth()
  if (user?.company_id === ad.company_id) {
    return { message: "ارسال رزومه به آگهی شرکت خود ممکن نمیباشد", status: false }
  }
  if (user?.email) {
    const cvResault = await prisma.ad.findFirst({ include: { cvAd: { include: { cv: true } } } })
    const isExsist = cvResault?.cvAd.find((item) => item.cv.user_id === user.id)
    if (typeof isExsist === "undefined") {
      const cvCreateResault = await prisma.cv.create({
        data: { status: "waiting", user_id: user.id, ad_id: ad.id },
      })
      if (cvCreateResault) {
        return { message: "رزومه با موفقیت ارسال شد", status: "true" }
      }
      return { message: "ارسال رزومه با مشکل روبرو شد", status: false }
    }
    return { message: "شما از قبل برای این آگهی رزومه ارسال کرده اید", status: false }
  }
  return { message: "اول وارد شوید", status: false }
}

export default sendCv