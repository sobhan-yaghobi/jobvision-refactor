"use client"

import { useRouter, useSearchParams } from "next/navigation"

export type TypePath =
  | "itren"
  | "telecommuting"
  | "disabledPeople"
  | "militaryOrder"
  | "cooperation_type"
  | "seniority_level"

const VariablePath: TypePath[] = [
  "itren",
  "telecommuting",
  "disabledPeople",
  "militaryOrder",
  "seniority_level",
]

const useFilterQuery = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const queryAction = (path: TypePath, value: string, deletePath?: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(path, value)
    } else {
      params.delete(path)
    }
    deletePath && params.delete(deletePath)
    replace(`?${params.toString()}`)
  }
  const get = (path: TypePath) => searchParams.get(path)
  const isExsist = (path: TypePath, value: string) => Boolean(get(path) == value)
  const isAnyFilterExsist = () => VariablePath.some((item) => searchParams.get(item))
  const paramsSize = () => new URLSearchParams(searchParams).size

  return { queryAction, get, isExsist, paramsSize, isAnyFilterExsist, searchParams }
}

export default useFilterQuery
