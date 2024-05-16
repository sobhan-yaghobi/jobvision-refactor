"use client"

import React, { useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import useSWR from "swr"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

import { fetchFilterAd } from "@/utils/utils.fetch"

import Title from "../modules/Title"
import ADBox from "../modules/ADBox"
import ADBoxSkeleton from "../modules/skeleton/ADBox.skeleton"

const ADsList: React.FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { data, isLoading } = useSWR(`/ad/${pathname}?${searchParams.toString()}`, fetchFilterAd)
  const { currentAd } = useCurrentAdQuery()

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
        ) : !data || !data.length ? (
          <Title className="bg-muted text-yellow-500 h-full p-2.5 rounded-sm">
            <h3>آگهی وجود ندارد</h3>
          </Title>
        ) : (
          data.map((ad) => (
            <ADBox key={ad.id} ad={{ ...ad }} active={ad.id === currentAd()} isFooter></ADBox>
          ))
        )
      }, [data, isLoading, currentAd()])}
    </div>
  )
}

export default ADsList
