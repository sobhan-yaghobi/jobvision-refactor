import isAuth from "@/app/action/isAuth"
import Title from "@/components/modules/Title"
import AdsBox from "@/components/modules/dashboard/AdsBox"
import { ad } from "@/types/utils.type"
import React from "react"

const Ads: React.FC = async () => {
  const { user } = await isAuth()
  const adItems: ad[] = user?.company_id
    ? ((await prisma.ads.findMany({ where: { company_id: user?.company_id } })) as ad[])
    : ([] as ad[])
  return (
    <div>
      <Title className="mb-6">
        <h3>آگهی ها</h3>
      </Title>
      {adItems.map((item) => (
        <AdsBox key={item.id} ad={item} />
      ))}
    </div>
  )
}

export default Ads
