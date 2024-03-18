"use server"

import { cookies } from "next/headers"
import { verifyToken } from "../../lib/utils"
import prisma from "../../lib/prisma"
import { isNull } from "lodash"
import { users } from "@prisma/client"

const getMe = async () => {
  const token = cookies().get("token")
  const tokenResualt = verifyToken(token?.value)

  if (
    typeof tokenResualt !== "string" &&
    typeof tokenResualt !== "boolean" &&
    "email" in tokenResualt
  ) {
    const user = prisma.users.findFirst({ where: { email: tokenResualt.email } })

    if (!isNull(user)) {
      return user
    }
  }
  return {} as users
}
export default getMe
