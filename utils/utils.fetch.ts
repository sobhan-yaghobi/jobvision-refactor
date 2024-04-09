import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"

export const fetchProvinceAndCategory = async () => {
  const categories = await fetch("/api/category")
    .then((res) => res.json())
    .then((data) => data as categoryWithCollection[])
  const provinces = await fetch("/api/province")
    .then((res) => res.json())
    .then((data) => data as provinceWithCity[])
  return { categories, provinces }
}
