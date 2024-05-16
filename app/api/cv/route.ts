import prisma from "@/lib/prisma"
import isAuth from "@/app/action/isAuth"

import { CVWithAdWithUser } from "@/types/utils.type"
import { status } from "@prisma/client"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const route = request.nextUrl.searchParams
  const statusObject = Object.values(status)
  const query: status | undefined = statusObject.includes(route.get("status") as status)
    ? (route.get("status") as status)
    : undefined

  const { user } = await isAuth()
  const lastCv = user?.company_id
    ? ((await prisma.cv.findMany({
        include: { user: true, ad: true },
        where: { company_id: user?.company_id, status: query },
      })) as CVWithAdWithUser[])
    : ([] as CVWithAdWithUser[])
  return Response.json(lastCv)
}
