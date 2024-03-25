import React from "react"
import TabsPage, { TypePage } from "@/components/modules/dashboard/TabsPage"

import Ads from "@/components/template/dashboard/Ads"
import AddAds from "@/components/template/dashboard/AddAds"

const page = () => {
  const pageItems: TypePage[] = [
    {
      id: "ads",
      name: "آگهی ها",
      content: <Ads />,
    },
    { id: "add-ads", name: "آگهی جدید", content: <AddAds /> },
  ]
  return (
    <div>
      <TabsPage pageItems={pageItems} />
    </div>
  )
}

export default page
