import React from "react"
import { redirect } from "next/navigation"

import isAuth from "../action/isAuth"

import Sidebar from "@/components/template/dashboard/Sidebar/Sidebar"
import QuickAccess from "@/components/template/dashboard/QuickAccess"
import Navbar from "@/components/template/dashboard/Navbar"

const layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { isUser } = await isAuth()

  if (!isUser) {
    return redirect("/")
  }

  return (
    <div className="w-full flex flex-col relative lg:max-h-screen lg:h-screen lg:flex-row">
      <div className="sticky top-0 z-50 lg:hidden">
        <Navbar />
      </div>
      <div className="hidden w-2/12 p-3 lg:block">
        <Sidebar />
      </div>
      <div className="bg-muted flex-1 p-3 rounded-sm overflow-y-auto lg:my-3">{children}</div>
      <div className="hidden w-3/12 p-3 lg:block">
        <QuickAccess />
      </div>
    </div>
  )
}

export default layout
