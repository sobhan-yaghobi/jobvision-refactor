import React from "react"

import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"

const page: React.FC = async () => {
  const pageItems: TypePage[] = [
    {
      id: "home",
      name: "صفحه اصلی",
      content: <>خانه</>,
    },
    {
      id: "company",
      name: "درباره شرکت",
      content: <>شرکتتتتتتت</>,
    },
  ]
  return (
    <div className="h-full">
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
