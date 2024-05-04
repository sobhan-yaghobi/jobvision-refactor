import React from "react"

import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"
import ADs from "@/components/template/dashboard/ADs"
import AddADs from "@/components/template/dashboard/AddADs"

const page = async () => {
  const categories = await prisma.category.findMany({
    include: { category_collections: true },
  })
  const advantages = await prisma.advantage.findMany()
  const pageItems: TypePage[] = [
    {
      id: "ads",
      name: "آگهی ها",
      content: <ADs />,
    },
    {
      id: "add-ads",
      name: "آگهی جدید",
      content: <AddADs categories={categories} advantages={advantages} />,
    },
  ]
  return (
    <div>
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
