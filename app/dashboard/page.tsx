import React from "react"

import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"
import Home from "@/components/template/dashboard/Home"
import Company from "@/components/template/dashboard/Company"
import isAuth from "../action/isAuth"
import { companies } from "@prisma/client"

const page: React.FC = async () => {
  const { user } = await isAuth()

  const company =
    user && "company_id" in user && user.company_id !== null
      ? await prisma.companies.findFirst({ where: { id: user?.company_id } })
      : ({} as companies)

  const pageItems: TypePage[] = [
    {
      id: "home",
      name: "صفحه اصلی",
      content: <Home />,
    },
    {
      id: "company",
      name: "درباره شرکت",
      content: <Company company={company} />,
    },
  ]
  return (
    <div>
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
