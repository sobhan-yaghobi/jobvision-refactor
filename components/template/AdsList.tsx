"use client"

import React, { useEffect, useRef, useState } from "react"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"
import useFilterQuery from "@/hook/useFilterQuery"

import { ad } from "@/types/utils.type"

import Title from "../modules/Title"

const AdsList = () => {
  const { searchParams, isExsist, isAnyFilterExsist, get } = useFilterQuery()
  const [adItems, setAdItems] = useState<ad[]>([] as ad[])
  const allAdItems = useRef({ ads: [] as ad[] })
  const { setCurrentAd } = useCurrentAdQuery()

  const checkPriceAction = ({
    price: { min, max },
    filter,
  }: {
    price: ad["price"]
    filter: string
  }): boolean => {
    const splitfilter = filter.split("-")
    const mode = splitfilter.at(0)
    const currentPrice = (value: string | number | undefined) => Number(value) * 1_000_000

    if (mode === "RIGHT_UNDER") {
      return currentPrice(splitfilter.at(1)) >= min
    } else if (mode === "RIGHT_BETWEEN") {
      return currentPrice(splitfilter.at(1)) > min && currentPrice(splitfilter.at(1)) < max
    } else if (mode === "RIGHT_HIGHER") {
      return currentPrice(splitfilter.at(1)) <= max || currentPrice(splitfilter.at(1)) <= min
    }
    return false
  }

  useEffect(() => {
    const newAdItems = allAdItems.current.ads.filter((ad) => {
      return isExsist("itren", "true")
        ? ad.itern
        : null || isExsist("telecommuting", "true")
        ? ad.telecommuting
        : null || isExsist("disabledPeople", "true")
        ? ad.disabledPeople
        : null || isExsist("militaryOrder", "true")
        ? ad.militaryOrder
        : null || get("seniority_level")?.length
        ? ad.seniority_level === get("seniority_level")
        : null || get("cooperation_type")?.length
        ? ad.cooperation_type === get("cooperation_type")
        : null || get("price")?.length
        ? checkPriceAction({ price: ad.price, filter: get("price") ?? "" })
        : null
    })
    setAdItems(newAdItems)
    if (!isAnyFilterExsist()) {
      setAdItems(allAdItems.current.ads)
    }
  }, [searchParams, allAdItems.current.ads])

  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/ad")
      const data = await res.json()
      allAdItems.current.ads = data
      setAdItems(data)
    }

    fetchAction()
  }, [])

  if (!adItems.length) {
    return (
      <Title className="bg-muted text-yellow-500 p-2.5 rounded-sm">
        <h3>آگهی وجود ندارد</h3>
      </Title>
    )
  }

  return (
    <div className="bg-muted w-full flex flex-col gap-1 p-3 rounded-sm">
      {adItems.map((ad) => (
        <li
          onClick={() => setCurrentAd(ad.id)}
          className="bg-background p-3 rounded-sm list-none cursor-pointer hover:bg-background/50"
          key={ad.id}
        >
          {ad.name}
        </li>
      ))}
    </div>
  )
}

export default AdsList
