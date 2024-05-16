"use client"
import React from "react"
import { toast } from "@/components/modules/ui/use-toast"

import useSWR from "swr"

import { AD } from "@/types/utils.type"

import ADBox from "@/components/modules/dashboard/ADBox"
import Title from "@/components/modules/Title"
import ADBoxDashboardSkeleton from "@/components/modules/skeleton/ADBoxDashboard.skeleton"

const ADs: React.FC = () => {
  const {
    data: adItems,
    isLoading,
    mutate,
  } = useSWR("/api/ads/me", async () => {
    const res = await fetch("/api/ad?query=me")
    const adsData: AD[] = await res.json()
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
        Array(3)
          .fill("")
          .map((_, index) => (
            <div key={`dashboard-ad-list-${index}`} className="mb-2 last:mb-0">
              <ADBoxDashboardSkeleton />
            </div>
          ))
      ) : adItems?.length ? (
        adItems.map((item) => (
          <div key={item.id} className="mb-2 last:mb-0">
            <ADBox ad={item} remove={removeAction} />
          </div>
        ))
      ) : (
        <p className="bg-destructive-foreground text-destructive p-2 rounded-sm">آگهی وجود ندارد</p>
      )}
    </div>
  )
}

export default ADs
