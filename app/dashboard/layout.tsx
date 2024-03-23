import { redirect } from "next/navigation"
import React from "react"
import isAuth from "../action/isAuth"
import Sidebar from "@/components/template/dashboard/Sidebar/Sidebar"
import QuickAccess from "@/components/template/dashboard/QuickAccess"

const layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const isLogin = await isAuth()

  if (!isLogin) {
    return redirect("/")
  }

  return (
    <div className="w-full max-h-screen h-screen flex">
      <div className="w-2/12 p-3">
        <Sidebar />
      </div>
      <div className="bg-muted w-7/12 my-3 p-3 rounded-sm overflow-y-auto">{children}</div>
      <div className="w-3/12 p-3">
        <QuickAccess />
      </div>
    </div>
  )
}

export default layout
