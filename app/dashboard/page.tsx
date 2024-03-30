import React from "react"

import { companyWithLocation } from "@/types/utils.type"

import isAuth from "../action/isAuth"

import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"
import Home from "@/components/template/dashboard/Home"
import Company from "@/components/template/dashboard/Company"

const page: React.FC = async () => {
  const { user } = await isAuth()

  const company =
    user && "company_id" in user && user.company_id !== null
      ? await prisma.companies.findFirst({
          where: { id: user?.company_id },
          include: { location: true },
        })
      : ({} as companyWithLocation)

  const provinces = await prisma.provinces.findMany({ include: { cities: true } })

  const pageItems: TypePage[] = [
    {
      id: "home",
      name: "صفحه اصلی",
      content: <Home />,
    },
    {
      id: "company",
      name: "درباره شرکت",
      content: <Company company={company} provinces={provinces} />,
    },
  ]
  return (
    <div>
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
