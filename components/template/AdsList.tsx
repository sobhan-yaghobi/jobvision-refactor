"use client"

import React, { useEffect, useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import useSWR, { useSWRConfig } from "swr"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

import { fetchFilterAd } from "@/utils/utils.fetch"

import { TypeSearchParams } from "@/app/(publicPages)/jobs/page"

import Title from "../modules/Title"
import AdsBox from "../modules/AdsBox"

type AdsListPorps = {
  searchParams: TypeSearchParams
}

const AdsList: React.FC<AdsListPorps> = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { data } = useSWR("/ad", fetchFilterAd)
  const { mutate } = useSWRConfig()
  const { currentAd } = useCurrentAdQuery()

  useEffect(() => {
    mutate("/ad")
  }, [pathname, searchParams])

  return (
    <div className="bg-muted w-full h-full flex flex-col gap-1 p-3 rounded-sm">
      {useMemo(() => {
        return !data || !data.length ? (
          <Title className="bg-muted h-full text-yellow-500 p-2.5 rounded-sm">
            <h3>آگهی وجود ندارد</h3>
          </Title>
        ) : (
          data.map((ad) => (
            <AdsBox key={ad.id} ad={{ ...ad }} active={ad.id === currentAd()} isFooter></AdsBox>
          ))
        )
      }, [data])}
    </div>
  )
}

export default AdsList
