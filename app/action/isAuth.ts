"use server"

import { cookies } from "next/headers"
import { validateTokenResult } from "@/utils/utils.function"

import { User } from "@/types/utils.type"

const isAuth = async (): Promise<{ isUser: boolean; user: null | User }> => {
  const token = cookies().get("token")
  const Result = await (await validateTokenResult(token?.value)).json()

  if ("email" in Result) {
    return { isUser: true, user: Result }
  }
  return { isUser: false, user: null }
}

export default isAuth
