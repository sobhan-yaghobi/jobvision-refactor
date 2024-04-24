import {
  ad,
  categoryWithCollection,
  companyWithLocation,
  provinceWithCity,
} from "@/types/utils.type"
import { filterAd, filterSaerchForm } from "@/types/utils.variable"

export const fetchProvinceAndCategory = async () => {
  const categories = await fetch("/api/category")
    .then((res) => res.json())
    .then((data) => data as categoryWithCollection[])
  const provinces = await fetch("/api/province")
    .then((res) => res.json())
    .then((data) => data as provinceWithCity[])
  return { categories, provinces }
}

export const fetchFilterAd = async () => {
  const params = new URLSearchParams(location.search)
  const current = params.get("current")
  const storeCount = params.get("storeCount") ?? 2
  const res = await fetch(`/api/ad?current=${current}&storeCount=${storeCount}`)
  const data = await res.json()

  let adFilter: ad[] = data.store

  const search = params.get(filterSaerchForm.search)
  if (search)
    adFilter = adFilter.filter((ad) => ad.name.includes(search) || ad.company.name.includes(search))

  const city = params.get(filterSaerchForm.city)
  if (city) adFilter = adFilter.filter((ad) => ad.company.location.city_id === city)

  const province = params.get(filterSaerchForm.province)
  if (province)
    adFilter = adFilter.filter((ad) => ad.company.location.city.province_id === province)

  const collection = params.get(filterSaerchForm.collection)
  if (collection) adFilter = adFilter.filter((ad) => ad.tags.some((tag) => tag.id === collection))

  const itern = params.get(filterAd.itren)
  if (itern) adFilter = adFilter.filter((ad) => ad.itern)

  const telecommuting = params.get(filterAd.telecommuting)
  if (telecommuting) adFilter = adFilter.filter((ad) => ad.telecommuting)

  const disabledPeople = params.get(filterAd.disabledPeople)
  if (disabledPeople) adFilter = adFilter.filter((ad) => ad.disabledPeople)

  const militaryOrder = params.get(filterAd.militaryOrder)
  if (militaryOrder) adFilter = adFilter.filter((ad) => ad.militaryOrder)

  const price = params.get(filterAd.price)
  if (price)
    adFilter = adFilter.filter((ad) => {
      const { min, max } = ad.price
      const splitfilter = price.split("-")
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
    })

  const seniority_level = params.get(filterAd.seniority_level)
  if (seniority_level) adFilter = adFilter.filter((ad) => ad.seniority_level === seniority_level)

  const cooperation_type = params.get(filterAd.cooperation_type)
  if (cooperation_type) adFilter = adFilter.filter((ad) => ad.cooperation_type === cooperation_type)

  return adFilter
}

export const getMyCompany = async () => {
  const res = await fetch("/api/company?query=me")
  const data: companyWithLocation | null = await res.json()
  return data ? data : null
}

export const getProvinces = async () => {
  const res = await fetch("/api/province")
  const data: provinceWithCity[] = await res.json()
  return data ? data : ([] as provinceWithCity[])
}
