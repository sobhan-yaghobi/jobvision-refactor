"use client"
import { compact } from "lodash"

import { useRouter, useSearchParams } from "next/navigation"

import { TypeFilterAd } from "@/utils/utils.variable"

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
  const isExist = (path: TypeFilterAd, value: string) => Boolean(get(path) == value)

  const paramsSize = () =>
    compact(VariablePath.map((variable) => (get(variable) ? variable : undefined))).length

  const removeAllAction = () => {
    const params = new URLSearchParams(searchParams)
    VariablePath.map((variable) => params.delete(variable))
    replace(`?${params.toString()}`)
  }

  return { queryAction, get, isExist, paramsSize, removeAllAction, searchParams }
}

export default useFilterQuery
