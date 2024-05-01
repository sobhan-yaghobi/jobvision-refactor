import React from "react"
import Title from "../modules/Title"
import ADBox from "../modules/ADBox"
import { ad } from "@/types/utils.type"

const LastAds = async () => {
  const ads: ad[] =
    ((await prisma.ad.findMany({
      include: { company: { include: { location: { include: { city: true } } } } },
    })) as ad[]) ?? ([] as ad[])
  return (
    <div>
      <Title size={"md"}>
        <h4>تازه‌ترین آگهی‌های شغلی برای شما</h4>
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad) => (
          <ADBox ad={ad} key={ad.id} className="col-span-1" />
        ))}
      </div>
    </div>
  )
}

export default LastAds
