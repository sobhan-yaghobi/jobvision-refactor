import { redirect } from "next/navigation"
import React from "react"
import isAuth from "../action/isAuth"

const layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const isLogin = await isAuth()

  if (!isLogin) {
    return redirect("/")
  }

  return <div className="p-10">{children}</div>
}

export default layout
