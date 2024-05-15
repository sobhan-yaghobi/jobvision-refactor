"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"

import { AD } from "@/types/utils.type"
import { cv } from "@prisma/client"

//! ---------- Accept CV Function
export const acceptCV = async (id: string) => {
  const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "accept" } })
  if (cvResualt) {
    return { message: "درخواست با موفقیت قبول شد", status: true }
  }
  return { message: "مشکلی در قبول کردن درخواست به وجود آمد", status: false }
}

//! ---------- Reject CV Function
export const rejectCV = async (id: string) => {
  const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "reject" } })
  if (cvResualt) {
    return { message: "درخواست با موفقیت رد شد", status: true }
  }
  return { message: "مشکلی در رد کردن درخواست به وجود آمد", status: false }
}

//! ---------- Send CV Function
export const sendCV = async (ad: AD) => {
  const { user } = await isAuth()
  if (user?.company_id === ad?.company_id) {
    return { message: "ارسال رزومه به آگهی شرکت خود ممکن نمیباشد", status: false }
  }
  if (user?.email) {
    const cvResault: cv[] = await prisma.cv.findMany({ where: { ad_id: ad.id } })
    if (Array.isArray(cvResault)) {
      const isExsist = cvResault.find((cv) => cv.user_id === user.id)

      if (typeof isExsist === "undefined") {
        const cvCreateResault = await prisma.cv.create({
          data: { status: "waiting", user_id: user.id, ad_id: ad.id, company_id: ad.company_id },
        })
        if (cvCreateResault) {
          return { message: "رزومه با موفقیت ارسال شد", status: "true" }
        }
        return { message: "ارسال رزومه با مشکل روبرو شد", status: false }
      }
    }
    return { message: "شما از قبل برای این آگهی رزومه ارسال کرده اید", status: false }
  }
  return { message: "اول وارد شوید", status: false }
}
