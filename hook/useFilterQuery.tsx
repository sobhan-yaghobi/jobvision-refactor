"use client"

import { TypeFilterAd } from "@/types/utils.variable"
import { useRouter, useSearchParams } from "next/navigation"

const VariablePath: TypeFilterAd[] = [
  "itren",
  "telecommuting",
  "disabledPeople",
  "militaryOrder",
  "seniority_level",
  "cooperation_type",
  "price",
]

const useFilterQuery = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const queryAction = (path: TypeFilterAd, value: string, deletePath?: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(path, value)
    } else {
      params.delete(path)
    }
    deletePath && params.delete(deletePath)
    replace(`?${params.toString()}`)
  }
  const get = (path: TypeFilterAd) => searchParams.get(path)
  const isExsist = (path: TypeFilterAd, value: string) => Boolean(get(path) == value)
  const isAnyFilterExsist = () => VariablePath.some((item) => searchParams.get(item))
  const paramsSize = () => new URLSearchParams(searchParams).size

  return { queryAction, get, isExsist, paramsSize, isAnyFilterExsist, searchParams }
}

export default useFilterQuery
