import isAuth from "@/app/action/isAuth"
import { ad } from "@/types/utils.type"
import { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const id = searchParams.get("id")

  if (query === "me") {
    const { user } = await isAuth()
    const adItems: ad[] =
      user && "email" in user && user?.company_id
        ? ((await prisma.ads.findMany({ where: { company_id: user?.company_id } })) as ad[])
        : ([] as ad[])
    return Response.json(adItems)
  }
  if (id) {
    const ad = await prisma.ads.findFirst({ where: { id: id }, include: { companies: true } })
    return Response.json(ad)
  }
  const ads = await prisma.ads.findMany()
  return Response.json(ads)
}

export const DELETE = async (request: NextRequest) => {
  const id = await request.json()
  const removeResault = await prisma.ads.delete({ where: { id } })
  if (removeResault) {
    return Response.json({ message: "آگهی با موفقیت پاک شد" }, { status: 201 })
  }
  return Response.json({ message: "خطایی در حین پاک کردن آگهی به وجود آمد" }, { status: 404 })
}
