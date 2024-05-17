"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

const useCurrentAdQuery = () => {
  const [mainAD, setMainAD] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setMainAD(searchParams.get("id") ?? "")
  }, [searchParams.get("id")])

  const createQueryString = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("id", id)
      setMainAD(id)
      return params.toString()
    },
    [searchParams]
  )
  const setMain = (id: string) => {
    router.push(`${pathname}?${createQueryString(id)}`)
  }
  return { mainAD, setMain }
}

export default useCurrentAdQuery
