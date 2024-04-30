"use client"

import React, { useEffect, useMemo, useState } from "react"
import { uniqBy } from "lodash"

import { fetchFilterAd } from "@/utils/utils.fetch"

import useCurrentAdQuery from "@/hook/useCurrentAdQuery"
import useScrollADsList from "@/hook/useScrollADsList"

import AdsBox from "../modules/AdsBox"
import InfiniteScroll from "react-infinite-scroll-component"
import LoadButton from "../modules/ui/LoadButton"

const AdsList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const fetchMoreData = async () => {
    if (state.hasMore) {
      setIsLoading(true)
      const index = state.index + 1
      const ads = await fetchFilterAd(index)
      if (ads.store.length) {
        setState((prev) => ({
          ...prev,
          ads: [...prev.ads, ...ads.store],
          index: index,
          hasMore: Boolean(ads.next_page),
        }))
      }
      setIsLoading(false)
    }
  }
  const { state, setState, listRef } = useScrollADsList(fetchMoreData)
  const { currentAd } = useCurrentAdQuery()

  useEffect(() => {
    const fetchAction = async () => {
      const ads = await fetchFilterAd(state.index)
      setState((prev) => ({ ...prev, ads: ads.store }))
    }
    fetchAction()
  }, [])

  return (
    <div className="bg-muted w-full h-full p-3 overflow-y-auto">
      {useMemo(
        () => (
          <InfiniteScroll
            dataLength={state.ads.length}
            next={fetchMoreData}
            hasMore={state.hasMore}
            className="flex flex-col gap-1 rounded-sm"
            style={{ overflow: "visible" }}
            loader
          >
            {state.ads.length ? (
              uniqBy(state.ads, "id").map((ad) => (
                <AdsBox key={`ads-list-${ad.id}`} ad={ad} isFooter active={ad.id === currentAd()} />
              ))
            ) : (
              <>آگهی یافت نشد</>
            )}
            <div ref={listRef}></div>
          </InfiniteScroll>
        ),
        [state.ads]
      )}
      {isLoading && (
        <LoadButton isLoading={isLoading} variant={"none"} className="w-full h-auto pt-4" />
      )}
    </div>
  )
}

export default AdsList
