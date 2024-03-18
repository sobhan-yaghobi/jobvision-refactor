"use server"
import { cookies } from "next/headers"

const logOut = async () => {
  cookies().delete("token")
}

export default logOut
