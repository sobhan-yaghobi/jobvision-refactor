import isAuth from "@/app/action/isAuth"
import { NextRequest } from "next/server"

import { ad } from "@/types/utils.type"
import { paginationFilter } from "@/utils/utils.function"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const id = searchParams.get("id")
  const current = searchParams.get("current")
  const storeCount = searchParams.get("storeCount")

  if (query === "me") {
    const { user } = await isAuth()

    const ads: ad[] =
      user && "email" in user && user?.company_id
        ? ((await prisma.ad.findMany({ where: { company_id: user?.company_id } })) as ad[])
        : ([] as ad[])
    return Response.json(paginationFilter(current, storeCount, ads))
  }
  if (id) {
    const ad = await prisma.ad.findFirst({
      where: { id: id },
      include: { company: { include: { location: { include: { city: true } } } } },
    })
    return Response.json(ad)
  }
  const ads = await prisma.ad.findMany({
    include: { company: { include: { location: { include: { city: true } } } } },
  })

  return Response.json(paginationFilter(current, storeCount, ads))
}

export const DELETE = async (request: NextRequest) => {
  const id = await request.json()
  const removeResault = await prisma.ad.delete({ where: { id } })
  if (removeResault) {
    return Response.json({ message: "آگهی با موفقیت پاک شد" }, { status: 201 })
  }
  return Response.json({ message: "خطایی در حین پاک کردن آگهی به وجود آمد" }, { status: 404 })
}
