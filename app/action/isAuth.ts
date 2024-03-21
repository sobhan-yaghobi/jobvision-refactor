"use server"

import { cookies } from "next/headers"

import { validateTokenResualt } from "@/lib/utils"

const isAuth = async (): Promise<boolean> => {
  const token = cookies().get("token")
  const resualt = await (await validateTokenResualt(token?.value)).json()

  if ("email" in resualt) {
    return true
  }
  return false
}

export default isAuth
