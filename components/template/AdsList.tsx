"use client"

import React, { useEffect, useRef, useState } from "react"
import useCurrentAdQuery from "@/hook/useCurrentAdQuery"
import useFilterQuery from "@/hook/useFilterQuery"

import { ad } from "@/types/utils.type"

import Title from "../modules/Title"
import AdsBox from "../modules/AdsBox"
import { TypeSearchParams } from "@/app/(publicPages)/jobs/page"

// const AdsList: React.FC<AdsListPorps> = ({ searchParams }) => {
//   const [adItems, setAdItems] = useState<adWithCompany[]>([] as adWithCompany[])
//   const allAds = useRef({ ads: [] as adWithCompany[] })
//   const { setCurrentAd } = useCurrentAdQuery()

//   useEffect(() => {
// if (
//   searchParams.job?.length ||
//   searchParams.collection?.length ||
//   searchParams.province?.length ||
//   searchParams.city?.length
// ) {
//   const newAdItems = allAds.current.ads.filter(
//     (ad) =>
//       (searchParams.job?.length && ad.name.includes(searchParams.job)) ||
//       ad.tags.some((tag) => tag.id === searchParams.collection) ||
//       ad.companies.location.cities_id === searchParams.city ||
//       ad.companies.location.city.province_id === searchParams.province
//   )
//       setAdItems(newAdItems)
//     } else {
//       setAdItems(allAds.current.ads)
//     }
//   }, [searchParams])

type AdsListPorps = {
  searchParams: TypeSearchParams
}

const AdsList: React.FC<AdsListPorps> = ({ searchParams }) => {
  const { searchParams: filterParams, isExsist, isAnyFilterExsist, get } = useFilterQuery()
  const [adItems, setAdItems] = useState<ad[]>([] as ad[])
  const allAdItems = useRef({ ads: [] as ad[] })
  const { currentAd } = useCurrentAdQuery()

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
    const items: ad[] =
      isAnyFilterExsist() ||
      searchParams.job?.length ||
      searchParams.collection?.length ||
      searchParams.province?.length ||
      searchParams.city?.length
        ? allAdItems.current.ads
        : allAdItems.current.ads

    // ||
    //   (searchParams.job?.length && ad.name.includes(searchParams.job)) ||
    //   ad.tags.some((tag) => tag.id === searchParams.collection) ||
    //   ad.company.location.city_id === searchParams.city ||
    //   ad.company.location.city.province_id === searchParams.province
    const newItems = allAdItems.current.ads.filter((ad) => {
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
    setAdItems(newItems)
    if (!isAnyFilterExsist()) {
      setAdItems(allAdItems.current.ads)
    }
  }, [filterParams, allAdItems.current.ads])

  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/ad")
      const data = await res.json()
      allAdItems.current.ads = data
      console.log("allAdItems", allAdItems)

      setAdItems(data)
    }

    fetchAction()
  }, [])

  if (!adItems.length) {
    return (
      <Title className="bg-muted h-full text-yellow-500 p-2.5 rounded-sm">
        <h3>آگهی وجود ندارد</h3>
      </Title>
    )
  }

  return (
    <div className="bg-muted w-full h-full flex flex-col gap-1 p-3 rounded-sm">
      {adItems.map((ad) => (
        <AdsBox key={ad.id} ad={{ ...ad }} active={ad.id === currentAd()} isFooter></AdsBox>
      ))}
    </div>
  )
}

export default AdsList
