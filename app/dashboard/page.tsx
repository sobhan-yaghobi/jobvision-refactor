import React from "react"

import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"
import Home from "@/components/template/dashboard/Home"
import Company from "@/components/template/dashboard/Company"

const pageItems: TypePage[] = [
  {
    id: "home",
    name: "صفحه اصلی",
    content: <Home />,
  },
  {
    id: "company",
    name: "درباره شرکت",
    content: <Company />,
  },
]

const page: React.FC = async () => {
  return (
    <div>
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
