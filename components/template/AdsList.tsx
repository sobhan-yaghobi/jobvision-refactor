"use client"

import React, { useEffect } from "react"
import { uniqBy } from "lodash"

import { fetchFilterAd } from "@/utils/utils.fetch"

import useCurrentAdQuery from "@/hook/useCurrentAdQuery"
import useScrollADsList from "@/hook/useScrollADsList"

import AdsBox from "../modules/AdsBox"
import InfiniteScroll from "react-infinite-scroll-component"

const AdsList: React.FC = () => {
  const fetchMoreData = () => {
    if (!state.ads.length) {
      setState((prev) => ({ ...prev, hasMore: false }))
      return
    } else {
      const fetchAction = async () => {
        const index = state.index + 1
        const ads = await fetchFilterAd(index)
        ads.length && setState((prev) => ({ ...prev, ads: [...prev.ads, ...ads], index: index }))
      }
      fetchAction()
    }
  }
  const { state, setState, listRef } = useScrollADsList(fetchMoreData)
  const { currentAd } = useCurrentAdQuery()

  useEffect(() => {
    const fetchAction = async () => {
      const ads = await fetchFilterAd(state.index)
      setState((prev) => ({ ...prev, ads: ads }))
    }
    fetchAction()
  }, [])
  return (
    <div className="bg-muted w-full h-full p-3 overflow-y-auto">
      <InfiniteScroll
        dataLength={state.ads.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        className="flex flex-col gap-1 rounded-sm"
        style={{ overflow: "visible" }}
        loader={<h4>در حال پردازش...</h4>}
      >
        {uniqBy(state.ads, "id").map((ad) => (
          <AdsBox key={`ads-list-${ad.id}`} ad={ad} isFooter active={ad.id === currentAd()} />
        ))}
        <div ref={listRef}></div>
      </InfiniteScroll>
    </div>
  )
}

export default AdsList
