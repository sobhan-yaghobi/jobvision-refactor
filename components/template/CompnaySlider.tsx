"use client"

import React, { useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { useKeenSlider } from "keen-slider/react"
import { Button } from "../modules/ui/button"
import CompanyBox from "../modules/CompanyBox"

import "keen-slider/keen-slider.min.css"

const CompnaySlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      breakpoints: {
        "(min-width: 300px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 5, spacing: 15 },
        },
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
            slider.next()
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
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider py-6">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <CompanyBox key={`slider-company-box-${index + 1}`} className="keen-slider__slide" />
          ))}
      </div>
      {instanceRef.current && (
        <>
          <Button
            className="ml-3"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
          >
            <ChevronRight />
          </Button>
          <Button
            className=""
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <ChevronLeft />
          </Button>
        </>
      )}
    </div>
  )
}

export default CompnaySlider
