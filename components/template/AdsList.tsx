"use client"

import React, { useEffect, useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import useSWR, { useSWRConfig } from "swr"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

import { fetchFilterAd } from "@/utils/utils.fetch"

import Title from "../modules/Title"
import ADBox from "../modules/ADBox"
import ADBoxSkeleton from "../modules/skeleton/ADBox.skeleton"

const ADsList: React.FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { data, isLoading } = useSWR(`/ad`, fetchFilterAd)
  const { mutate } = useSWRConfig()
  const { currentAd } = useCurrentAdQuery()

  useEffect(() => {
    mutate("/ad")
  }, [pathname, searchParams])

  return (
    <div className="bg-muted w-full h-full flex flex-col gap-1 p-3 rounded-sm overflow-y-auto">
      {useMemo(() => {
        return isLoading ? (
          <>
            {Array(3)
              .fill("")
              .map((_, index) => (
                <ADBoxSkeleton key={`skeleton-AD-box-${index}`} isFooter />
              ))}
          </>
        ) : !data?.store || !data.store.length ? (
          <Title className="bg-muted h-full text-yellow-500 p-2.5 rounded-sm">
            <h3>آگهی وجود ندارد</h3>
          </Title>
        ) : (
          data.store.map((ad) => (
            <ADBox key={ad.id} ad={{ ...ad }} active={ad.id === currentAd()} isFooter></ADBox>
          ))
        )
      }, [data])}
    </div>
  )
}

export default ADsList
