import { redirect } from "next/navigation"
import React from "react"
import isAuth from "../action/isAuth"
import Sidebar from "@/components/template/dashboard/Sidebar"

const layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const isLogin = await isAuth()

  if (!isLogin) {
    return redirect("/")
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/12 p-3">
        <Sidebar />
      </div>
      <div className="w-7/12 mx-6 p-3">{children}</div>
      <div className="w-3/12 p-3"></div>
    </div>
  )
}

export default layout