import { provinceWithCity } from "@/types/utils.type"
import { city, province } from "@prisma/client"

import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const cityId = searchParams.get("cityId") ?? ""
  const provinceId = searchParams.get("provinceId") ?? ""

  if (cityId) {
    const city = await prisma.city.findFirst({
      where: { id: cityId },
      include: { province: true },
    })
    return Response.json(city !== null ? city : ({} as city))
  }
  if (provinceId) {
    const province = await prisma.province.findFirst({
      where: { id: provinceId },
    })
    return Response.json(province !== null ? province : ({} as province))
  }
  const provinces = await prisma.province.findMany({ include: { cities: true } })
  return Response.json(provinces ? provinces : ([] as provinceWithCity[]))
}
