import {
  ad,
  categoryWithCollection,
  companyWithLocation,
  filterAds,
  provinceWithCity,
} from "@/types/utils.type"
import { filterAd, filterSaerchForm } from "@/utils/utils.variable"

//! ---------- Fetch Provinces & Cities & Category_collection
export const fetchProvinceAndCategory = async () => {
  const categories = await fetch("/api/category")
    .then((res) => res.json())
    .then((data) => data as categoryWithCollection[])
  const provinces = await fetch("/api/province")
    .then((res) => res.json())
    .then((data) => data as provinceWithCity[])
  return { categories, provinces }
}

//! ---------- Fetch Filter AD
export const fetchFilterAd = async (): Promise<ad[]> => {
  const params = new URLSearchParams(location.search)
  const parms: filterAds = {
    search: params.get(filterSaerchForm.search),
    city: params.get(filterSaerchForm.city),
    province: params.get(filterSaerchForm.province),
    collection: params.get(filterSaerchForm.collection),
    itern: params.get(filterAd.itren),
    telecommuting: params.get(filterAd.telecommuting),
    disabledPeople: params.get(filterAd.disabledPeople),
    militaryOrder: params.get(filterAd.militaryOrder),
    price: params.get(filterAd.price),
    seniority_level: params.get(filterAd.seniority_level),
    cooperation_type: params.get(filterAd.cooperation_type),
  }

  const res = await fetch(`/api/ad`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(parms),
  })
  let data: ad[] = await res.json()

  return data
}

//! ---------- Fetch My Company
export const getMyCompany = async () => {
  const res = await fetch("/api/company?query=me")
  const data: companyWithLocation | null = await res.json()
  return data ? data : null
}

//! ---------- Fetch My Province Company
export const getProvinces = async () => {
  const res = await fetch("/api/province")
  const data: provinceWithCity[] = await res.json()
  return data ? data : ([] as provinceWithCity[])
}
