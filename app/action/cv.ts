"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"

import { AD } from "@/types/utils.type"
import type { cv } from "@prisma/client"
import { some } from "lodash"

//! ---------- Accept CV Function
export const acceptCV = async (id: string) => {
  const cvResult = await prisma.cv.update({ where: { id }, data: { status: "accept" } })
  if (cvResult) {
    return { message: "درخواست با موفقیت قبول شد", status: true }
  }
  return { message: "مشکلی در قبول کردن درخواست به وجود آمد", status: false }
}

//! ---------- Reject CV Function
export const rejectCV = async (id: string) => {
  const cvResult = await prisma.cv.update({ where: { id }, data: { status: "reject" } })
  if (cvResult) {
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
    const cvResult: cv[] = await prisma.cv.findMany({ where: { ad_id: ad.id } })
    //! Check The User Have Send CV Before Or Not
    if (
      !cvResult ||
      (Array.isArray(cvResult) &&
        !some(cvResult, function (param) {
          return param.user_id === user.id
        }))
    ) {
      const cvCreateResult = await prisma.cv.create({
        data: { status: "waiting", user_id: user.id, ad_id: ad.id, company_id: ad.company_id },
      })
      if (cvCreateResult) {
        return { message: "رزومه با موفقیت ارسال شد", status: "true" }
      }
      return { message: "ارسال رزومه با مشکل روبرو شد", status: false }
    }
    return { message: "شما از قبل برای این آگهی رزومه ارسال کرده اید", status: false }
  }
  return { message: "اول وارد شوید", status: false }
}
