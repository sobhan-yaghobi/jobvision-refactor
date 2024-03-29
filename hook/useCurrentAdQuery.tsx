"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const useCurrentAdQuery = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("id", id)
      return params.toString()
    },
    [searchParams]
  )
  const setCurrentAd = (id: string) => {
    router.push(`${pathname}?${createQueryString(id)}`)
  }
  return { setCurrentAd }
}

export default useCurrentAdQuery
