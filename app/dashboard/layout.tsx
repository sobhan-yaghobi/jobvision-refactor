import React from "react"
import { redirect } from "next/navigation"

import { companies } from "@prisma/client"
import isAuth from "../action/isAuth"

import Sidebar from "@/components/template/dashboard/Sidebar/Sidebar"
import QuickAccess from "@/components/template/dashboard/QuickAccess"

const layout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const { user, isUser } = await isAuth()
  const company =
    user && "company_id" in user && user.company_id !== null
      ? await prisma.companies.findFirst({ where: { id: user?.company_id } })
      : ({} as companies)

  if (!isUser) {
    return redirect("/")
  }

  return (
    <div className="w-full max-h-screen h-screen flex">
      <div className="w-2/12 p-3">
        <Sidebar />
      </div>
      <div className="bg-muted w-7/12 my-3 p-3 rounded-sm overflow-y-auto">{children}</div>
      <div className="w-3/12 p-3">
        <QuickAccess company={company} />
      </div>
    </div>
  )
}

export default layout
