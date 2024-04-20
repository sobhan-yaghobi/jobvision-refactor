import isAuth from "@/app/action/isAuth"
import { companiesWithFollower } from "@/types/utils.type"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams
  const query = params.get("query")
  if (query === "me") {
    const { user } = await isAuth()
    if (user?.company_id) {
      const company = await prisma.company.findFirst({
        where: { id: user.company_id },
        include: { location: { include: { city: true } } },
      })
      return Response.json(company)
    }
    return Response.json(undefined)
  }
  const companies: companiesWithFollower[] =
    ((await prisma.company.findMany({
      include: { followers: true },
    })) as companiesWithFollower[]) ?? ([] as companiesWithFollower[])

  return Response.json(companies)
}
