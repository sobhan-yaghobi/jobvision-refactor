"use client"
import React from "react"
import { toast } from "@/components/modules/ui/use-toast"

import { ad } from "@/types/utils.type"

import AdsBox from "@/components/modules/dashboard/AdsBox"
import Title from "@/components/modules/Title"
import useSWR from "swr"

const Ads: React.FC = () => {
  const {
    data: adItems,
    isLoading,
    mutate,
  } = useSWR("/api/ads/me", async () => {
    const res = await fetch("/api/ad?query=me")
    const adsData: ad[] = await res.json()
    return adsData
  })

  const removeAction = async (id: string) => {
    const res = await fetch("/api/ad", { method: "DELETE", body: JSON.stringify(id) })
    const data = await res.json()
    if (res.status === 201) {
      toast({ title: data.message, variant: "default" })
      mutate()
      return
    }
    toast({ title: data.message, variant: "destructive" })
  }
  return (
    <div>
      <Title className="mb-6">
        <h3>آگهی ها</h3>
      </Title>
      {isLoading ? (
        <>در حال بارگذاری</>
      ) : adItems?.length ? (
        adItems.map((item) => <AdsBox key={item.id} ad={item} remove={removeAction} />)
      ) : (
        <p className="bg-destructive-foreground text-destructive p-2 rounded-sm">آگهی وجود ندارد</p>
      )}
    </div>
  )
}

export default Ads
