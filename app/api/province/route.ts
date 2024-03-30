import { cities, provinces } from "@prisma/client"

import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const cityId = searchParams.get("cityId") ?? ""
  const provinceId = searchParams.get("provinceId") ?? ""

  if (cityId) {
    const city = await prisma.cities.findFirst({
      where: { id: cityId },
      include: { provinces: true },
    })
    return Response.json(city ? city : ({} as cities))
  }
  if (provinceId) {
    const province = await prisma.provinces.findFirst({
      where: { id: provinceId },
    })
    return Response.json(province ? province : ({} as provinces))
  }
}
