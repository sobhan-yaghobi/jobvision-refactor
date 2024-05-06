import React from "react"

import { AD } from "@/types/utils.type"

import Title from "../modules/Title"
import ADBox from "../modules/ADBox"

const LastAds: React.FC = async () => {
  const ads: AD[] =
    ((await prisma.ad.findMany({
      include: { company: { include: { location: { include: { city: true } } } } },
    })) as AD[]) ?? ([] as AD[])

  return (
    <div>
      <Title size={"md"}>
        <h4>تازه‌ترین آگهی‌های شغلی برای شما</h4>
      </Title>
      <div className="grid grid-cols-1 gap-6 mt-6  md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad) => (
          <ADBox ad={ad} key={ad.id} className="col-span-1" />
        ))}
      </div>
    </div>
  )
}

export default LastAds
