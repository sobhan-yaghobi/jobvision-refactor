import React from "react"
import { useSwiper } from "swiper/react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "./ui/button"

export const SwiperNavButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="swiper-nav-btns mt-3">
      <Button className="ml-3" onClick={() => swiper.slidePrev()}>
        <ChevronRight className="icon" />
      </Button>
      <Button onClick={() => swiper.slideNext()}>
        <ChevronLeft className="icon" />
      </Button>
    </div>
  )
}
