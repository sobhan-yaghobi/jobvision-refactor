"use client"
import React, { useEffect, useState } from "react"

import { ad } from "@/types/utils.type"
import AdsBox from "@/components/modules/dashboard/AdsBox"
import Title from "@/components/modules/Title"
import { toast } from "@/components/modules/ui/use-toast"
import { filter } from "lodash"

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

  const removeAction = async (id: string) => {
    const res = await fetch("/api/ad", { method: "DELETE", body: JSON.stringify(id) })
    const data = await res.json()
    if (res.status === 201) {
      toast({ title: data.message, variant: "default" })
      setAdItems((prev) =>
        filter(prev, function (prevItem) {
          return prevItem.id !== id
        })
      )
      return
    }
    toast({ title: data.message, variant: "destructive" })
  }
  return (
    <div>
      <Title className="mb-6">
        <h3>آگهی ها</h3>
      </Title>
      {adItems ? (
        adItems.length ? (
          adItems.map((item) => <AdsBox key={item.id} ad={item} remove={removeAction} />)
        ) : (
          <p className="bg-destructive-foreground text-destructive p-2 rounded-sm">
            آگهی وجود ندارد
          </p>
        )
      ) : (
        <>در حال بارگذاری</>
      )}
    </div>
  )
}

export default Ads
