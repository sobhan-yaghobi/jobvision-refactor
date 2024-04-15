import { companiesWithFollower } from "@/types/utils.type"
import { NextRequest } from "next/server"

export const GET = async () => {
  const companies: companiesWithFollower[] =
    ((await prisma.company.findMany({
      include: { followers: true },
    })) as companiesWithFollower[]) ?? ([] as companiesWithFollower[])

  return Response.json(companies)
}
