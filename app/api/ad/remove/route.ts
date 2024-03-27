import { NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
  const id = await request.json()
  const removeResault = await prisma.ads.delete({ where: { id } })
  if (removeResault) {
    return Response.json({ message: "آگهی با موفقیت پاک شد" }, { status: 201 })
  }
  return Response.json({ message: "خطایی در حین پاک کردن آگهی به وجود آمد" }, { status: 404 })
}
