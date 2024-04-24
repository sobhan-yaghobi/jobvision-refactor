"use client"

import React, { useEffect, useMemo, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import useSWR, { useSWRConfig } from "swr"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

import { fetchFilterAd } from "@/utils/utils.fetch"

import { TypeSearchParams } from "@/app/(publicPages)/jobs/page"

import Title from "../modules/Title"
import AdsBox from "../modules/AdsBox"
import PaginationButtons from "../modules/PaginationButtons"

type AdsListPorps = {
  searchParams: TypeSearchParams
}

const AdsList: React.FC<AdsListPorps> = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [currentPage, setCurrnetPage] = useState(1)
  const { data, isLoading } = useSWR(`/ad?current=${currentPage}`, fetchFilterAd)
  const { mutate } = useSWRConfig()
  const { currentAd } = useCurrentAdQuery()

  useEffect(() => {
    mutate("/ad")
  }, [pathname, searchParams])

  return (
    <div className="bg-muted w-full h-full flex flex-col gap-1 p-3 rounded-sm">
      {useMemo(() => {
        return isLoading ? (
          <>در حال بارگذاری</>
        ) : !data?.store || !data.store.length ? (
          <Title className="bg-muted h-full text-yellow-500 p-2.5 rounded-sm">
            <h3>آگهی وجود ندارد</h3>
          </Title>
        ) : (
          data.store.map((ad) => (
            <AdsBox key={ad.id} ad={{ ...ad }} active={ad.id === currentAd()} isFooter></AdsBox>
          ))
        )
      }, [data])}
      {data?.pagination ? (
        <div className="my-3">
          <PaginationButtons
            currnetPage={currentPage}
            setCurrnetPage={setCurrnetPage}
            pagination={data.pagination}
          />
        </div>
      ) : null}
    </div>
  )
}

export default AdsList
