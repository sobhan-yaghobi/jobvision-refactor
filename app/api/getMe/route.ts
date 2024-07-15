import { validateTokenResult } from "@/utils/utils.function"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export const GET = async () => {
  const token = cookies().get("token")
  const Result = await validateTokenResult(token?.value)
  return Result
}
