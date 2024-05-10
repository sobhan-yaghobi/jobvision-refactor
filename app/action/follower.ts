"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"

//! ---------- Create New Follower
export const createFollower = async (companyID: string) => {
  const { user } = await isAuth()
  if (user?.company_id === companyID) {
    return { message: "دنبال کردن شرکت خود امکان پذیر نمیباشد", status: false }
  }
  if (user?.email) {
    const followeResualt = await prisma.followers.findMany({
      where: { company_id: companyID, user_id: user.id },
    })

    if (!followeResualt.length) {
      const cvCreateResault = await prisma.followers.create({
        data: { company_id: companyID, user_id: user.id },
      })
      if (cvCreateResault) return { message: "دنبال کردن با موفقیت انجام شد", status: true }
      return { message: "دنبال کردن با خطا مواجه شد", status: false }
    }
    return { message: "شما از قبل این شرکت را دنبال کرده اید", status: false }
  }
  return { message: "اول وارد شوید", status: false }
}

//! ---------- Remove Follower
export const removeFollower = async (companyID: string) => {
  const { user } = await isAuth()
  if (user) {
    const followeExsist = await prisma.followers.findFirst({
      where: { company_id: companyID, user_id: user.id },
    })
    if (followeExsist) {
      const followeResualt = await prisma.followers.delete({ where: { id: followeExsist.id } })
      if (followeResualt) return { message: "لغو دنبال کردن با موفقیت انجام شد", status: true }
      return { message: "لفو دنبال کردن با خطا مواجه شد", status: false }
    }
    return { message: "شما از قبل دنبال کردن این شرکت را لغو کرده اید", status: false }
  }
  return { message: "اول وارد شوید", status: false }
}
