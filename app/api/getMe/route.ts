import { verifyToken } from "@/lib/utils"
import { isNull } from "lodash"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

const GET = async () => {
  const token = cookies().get("token")
  const tokenResualt = verifyToken(token?.value)

  if (
    typeof tokenResualt !== "string" &&
    typeof tokenResualt !== "boolean" &&
    "email" in tokenResualt
  ) {
    const user = await prisma.users.findFirst({ where: { email: tokenResualt.email } })
    if (!isNull(user)) {
      return Response.json(user, { status: 201 })
    }
  }
  return Response.json({ message: "user not found :(" }, { status: 404 })
}

export { GET }
