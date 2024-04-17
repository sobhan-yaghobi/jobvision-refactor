"use server"

import { cookies } from "next/headers"

const logout = () => {
  try {
    cookies().delete("token")
    return { message: "خروج با موفقیت به اتمام رسید", status: true }
  } catch {
    return { message: "مشکلی در خروج از حساب پیش آمده", status: false }
  }
}

export default logout
