"use client"
import React, { useEffect, useState } from "react"

import { ad } from "@/types/utils.type"
import AdsBox from "@/components/modules/dashboard/AdsBox"
import Title from "@/components/modules/Title"

const Ads: React.FC = () => {
  const [adItems, setAdItems] = useState<ad[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/ad?query=me", {
        method: "GET",
      })

      const data = await res.json()
      setAdItems(data)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title className="mb-6">
        <h3>آگهی ها</h3>
      </Title>
      {adItems ? (
        adItems.length ? (
          adItems.map((item) => <AdsBox key={item.id} ad={item} />)
        ) : (
          <>آگهی وجود ندارد</>
        )
      ) : (
        <>Loading</>
      )}
    </div>
  )
}

export default Ads
