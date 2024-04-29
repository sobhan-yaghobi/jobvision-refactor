"use client"

import { useEffect, useRef, useState } from "react"

import { ad } from "@/types/utils.type"

const useScrollADsList = (fetchMoreData: Function) => {
  const [state, setState] = useState({ ads: [] as ad[], hasMore: true, index: 1 })

  const listRef = useRef<HTMLDivElement>(null)

  const callBackFunc = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (!entry.isIntersecting) return
    fetchMoreData()
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

  return { state, setState, callBackFunc, listRef }
}

export default useScrollADsList
