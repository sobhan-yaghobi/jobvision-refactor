"use server"

import { cookies } from "next/headers"

import { validateTokenResualt } from "@/lib/utils"
import { user } from "@prisma/client"

const isAuth = async (): Promise<{ isUser: boolean; user: null | user }> => {
  const token = cookies().get("token")
  const resualt = await (await validateTokenResualt(token?.value)).json()

  if ("email" in resualt) {
    return { isUser: true, user: resualt }
  }
  return { isUser: false, user: null }
}

export default isAuth
