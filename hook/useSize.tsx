"use client"

import { useEffect, useState } from "react"
const useSize = () => {
  const isClient = typeof window === "object"

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (!isClient) {
      return
    }

    const windowSizeHandler = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", windowSizeHandler)

    return () => {
      window.removeEventListener("resize", windowSizeHandler)
    }
  }, [isClient])

  return windowSize
}

export default useSize
