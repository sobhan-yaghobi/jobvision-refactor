import prisma from "@/lib/prisma"
import isAuth from "@/app/action/isAuth"
import { NextRequest } from "next/server"

import { AD, FilterAds } from "@/types/utils.type"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const id = searchParams.get("id")

  if (query === "me") {
    const { user } = await isAuth()

    const ads: AD[] =
      user && "email" in user && user?.company_id
        ? ((await prisma.ad.findMany({
            where: { company_id: user?.company_id },
            include: { company: { include: { location: { include: { city: true } } } } },
          })) as AD[])
        : ([] as AD[])
    return Response.json(ads)
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

  return Response.json(ads)
}

export const POST = async (request: NextRequest) => {
  let adFilter: AD[] =
    ((await prisma.ad.findMany({
      include: { company: { include: { location: { include: { city: true } } } } },
    })) as AD[]) ?? ([] as AD[])

  const {
    search,
    city,
    province,
    collection,
    itern,
    telecommuting,
    disabledPeople,
    militaryOrder,
    price,
    seniority_level,
    cooperation_type,
  }: FilterAds = await request.json()

  if (search !== null)
    adFilter = adFilter.filter(
      (ad) => ad.name.includes(search) || ad.company?.name.includes(search)
    )

  if (city) adFilter = adFilter.filter((ad) => ad?.company?.location.city_id === city)

  if (province)
    adFilter = adFilter.filter((ad) => ad?.company?.location.city.province_id === province)

  if (collection)
    adFilter = adFilter.filter(
      (ad) => Array.isArray(ad.tags) && ad.tags.some((tag) => tag.id === collection)
    )

  if (itern) adFilter = adFilter.filter((ad) => ad.itern)

  if (telecommuting) adFilter = adFilter.filter((ad) => ad.telecommuting)

  if (disabledPeople) adFilter = adFilter.filter((ad) => ad.disabledPeople)

  if (militaryOrder) adFilter = adFilter.filter((ad) => ad.militaryOrder)

  if (price)
    adFilter = adFilter.filter((ad) => {
      const { min, max } = ad.price
      const splitfilter = price.split("-")
      const mode = splitfilter.at(0)
      const currentPrice = (value: string | number | undefined) => Number(value) * 1_000_000
      if (mode === "RIGHT_UNDER") {
        return currentPrice(splitfilter.at(1)) >= min
      } else if (mode === "RIGHT_BETWEEN") {
        return currentPrice(splitfilter.at(1)) > min && currentPrice(splitfilter.at(1)) < max
      } else if (mode === "RIGHT_HIGHER") {
        return currentPrice(splitfilter.at(1)) <= max || currentPrice(splitfilter.at(1)) <= min
      }
      return false
    })

  if (seniority_level) adFilter = adFilter.filter((ad) => ad.seniority_level === seniority_level)

  if (cooperation_type) adFilter = adFilter.filter((ad) => ad.cooperation_type === cooperation_type)

  return Response.json(adFilter)
}

export const DELETE = async (request: NextRequest) => {
  const id = await request.json()
  const removeResult = await prisma.ad.delete({ where: { id } })
  if (removeResult) {
    return Response.json({ message: "آگهی با موفقیت پاک شد" }, { status: 201 })
  }
  return Response.json({ message: "خطایی در حین پاک کردن آگهی به وجود آمد" }, { status: 404 })
}
