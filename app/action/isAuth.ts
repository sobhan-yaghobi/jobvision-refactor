"use server"

import { cookies } from "next/headers"

const isAuth = async (): Promise<boolean> => {
  const tokenResualt = cookies().get("token")
  if (tokenResualt?.value) {
    const res = await fetch("http://localhost:3000/api/getMe", {
      method: "POST",
      body: JSON.stringify(tokenResualt.value),
    })
    const data = await res.json()
    if ("email" in data) {
      return true
    }
  }
  return false
}

export default isAuth
