"use client"

import React, { useEffect, useRef, useState } from "react"

import { fetchFilterAd } from "@/utils/utils.fetch"

import AdsBox from "../modules/AdsBox"

import InfiniteScroll from "react-infinite-scroll-component"
import { ad } from "@/types/utils.type"
import { debounce, uniqBy } from "lodash"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"

const AdsList: React.FC = () => {
  const [state, setState] = useState({ ads: [] as ad[], hasMore: true, index: 1 })
  const { currentAd } = useCurrentAdQuery()

  const listRef = useRef<HTMLDivElement>(null)

  const callBackFunc = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (!entry.isIntersecting) return
    fetchMoreData()
  }

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

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, {
      root: null,
      threshold: 0.8,
      rootMargin: "0px",
    })
    listRef.current && observer.observe(listRef.current)

    return () => {
      listRef.current && observer.unobserve(listRef.current)
    }
  }, [listRef, fetchMoreData])

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

export const useScrollToFetchData = (FetchMoreData: () => void) => {
  const debouncedFetchMoreData = debounce(FetchMoreData, 2000)
  const bottom = useRef(null)

  useEffect(() => {
    const bottomCurrent = bottom.current
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }
        debouncedFetchMoreData()
      })
    }, options)

    if (bottomCurrent) {
      observer.observe(bottomCurrent)
    }

    return () => {
      if (bottomCurrent) {
        observer.unobserve(bottomCurrent)
      }
    }
  }, [FetchMoreData])

  return bottom
}

export default AdsList
