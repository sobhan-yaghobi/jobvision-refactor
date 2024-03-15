"use client"

import React from "react"

import { useKeenSlider } from "keen-slider/react"
import CompanyBox from "../modules/CompanyBox"
import "keen-slider/keen-slider.min.css"

const CompnaySlider: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 5,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            Object.is(null, slider) ? slider?.next() : null
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div ref={sliderRef} className="keen-slider py-6">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <CompanyBox key={`slider-company-box-${index + 1}`} className="keen-slider__slide" />
        ))}
    </div>
  )
}

export default CompnaySlider
