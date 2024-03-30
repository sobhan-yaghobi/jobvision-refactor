import { validateTokenResualt } from "@/lib/utils"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export const GET = async () => {
  const token = cookies().get("token")
  const resualt = await validateTokenResualt(token?.value)
  return resualt
}
