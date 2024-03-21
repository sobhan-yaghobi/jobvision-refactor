import { validateTokenResualt, verifyToken } from "@/lib/utils"
import { isNull } from "lodash"
import { cookies } from "next/headers"
import { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async () => {
  const token = cookies().get("token")
  const resualt = await validateTokenResualt(token?.value)
  return resualt
}

export const POST = async (request: NextRequest) => {
  const token = await request.json()
  const resualt = await validateTokenResualt(token)
  return resualt
}
