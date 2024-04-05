import { category_collection } from "@prisma/client"

import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const collectionId = searchParams.get("collection")

  if (collectionId) {
    const category_collection = await prisma.category_collection.findFirst({
      where: { id: collectionId },
      include: { categories: true },
    })
    return Response.json(
      category_collection !== null ? category_collection : ({} as category_collection)
    )
  }
}
