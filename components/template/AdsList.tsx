"use client"
import { ad } from "@/types/utils.type"
import React, { useEffect, useState } from "react"
import Title from "../modules/Title"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

const AdsList = () => {
  const [adItems, setAdItems] = useState<ad[]>([] as ad[])
  const { setCurrentAd } = useCurrentAdQuery()

  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/ad")
      const data = await res.json()
      setAdItems(data)
    }

    fetchAction()
  }, [])

  if (!adItems.length) {
    return (
      <Title className="bg-muted text-yellow-500 p-2.5 rounded-sm">
        <h3>آگهی وجود ندارد</h3>
      </Title>
    )
  }

  return (
    <div className="bg-muted w-full flex flex-col gap-1 p-3 rounded-sm">
      {adItems.map((ad) => (
        <li
          onClick={() => setCurrentAd(ad.id)}
          className="bg-background p-3 rounded-sm list-none cursor-pointer hover:bg-background/50"
          key={ad.id}
        >
          {ad.name}
        </li>
      ))}
    </div>
  )
}

export default AdsList
