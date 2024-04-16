import isAuth from "@/app/action/isAuth"
import { ad } from "@/types/utils.type"
import { NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
  const route = request.nextUrl.searchParams
  const query = route.get("query")

  if (query === "accept") {
    const id = route.get("id") as string
    const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "accept" } })
    if (cvResualt) {
      return Response.json({ message: "درخواست با موفقیت قبول شد", status: true })
    }
    return Response.json({ message: "مشکلی در قبول کردن درخواست به وجود آمد", status: false })
  }

  if (query === "reject") {
    const id = route.get("id") as string
    const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "reject" } })
    if (cvResualt) {
      return Response.json({ message: "درخواست با موفقیت رد شد", status: true })
    }
    return Response.json({ message: "مشکلی در رد کردن درخواست به وجود آمد", status: false })
  }

  if (query === "send") {
    const ad: ad = await request.json()
    const { user } = await isAuth()
    if (user?.company_id === ad.company_id) {
      return Response.json({ message: "ارسال رزومه به آگهی شرکت خود ممکن نمیباشد", status: false })
    }
    if (user?.email) {
      const cvResault = await prisma.cv.findMany({ where: { ad_id: ad.id } })

      const isExsist = cvResault.find((cv) => cv.user_id === user.id)

      if (typeof isExsist === "undefined") {
        const cvCreateResault = await prisma.cv.create({
          data: { status: "waiting", user_id: user.id, ad_id: ad.id, company_id: ad.company_id },
        })
        if (cvCreateResault) {
          return Response.json({ message: "رزومه با موفقیت ارسال شد", status: "true" })
        }
        return Response.json({ message: "ارسال رزومه با مشکل روبرو شد", status: false })
      }
      return Response.json({
        message: "شما از قبل برای این آگهی رزومه ارسال کرده اید",
        status: false,
      })
    }
    return Response.json({ message: "اول وارد شوید", status: false })
  }
}
