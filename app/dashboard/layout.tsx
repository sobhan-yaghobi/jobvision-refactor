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
    <div className="w-full max-h-screen h-screen relative flex flex-col lg:flex-row">
      <div className="lg:hidden">
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
