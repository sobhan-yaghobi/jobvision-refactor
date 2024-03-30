import { cities } from "@prisma/client"

import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const id = searchParams.get("id") ?? ""
  const city = await prisma.cities.findFirst({ where: { id: id }, include: { provinces: true } })

  return Response.json(city ? city : ({} as cities))
}
