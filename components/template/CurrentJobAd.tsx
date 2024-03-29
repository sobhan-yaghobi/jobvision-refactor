"use client"

import { ad } from "@/types/utils.type"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const CurrentJobAd: React.FC = () => {
  const [current, setCurrent] = useState<ad>()
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch(`/api/ad?id=${id}`)
      const data = await res.json()
      setCurrent(data)
    }

    fetchAction()
  }, [id])

  return (
    <div className="bg-primary w-full p-3 rounded-sm text-primary-foreground">{current?.name}</div>
  )
}

export default CurrentJobAd
