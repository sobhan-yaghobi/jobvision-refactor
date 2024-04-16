"use client"

import React, { useEffect, useState } from "react"
import { companiesWithFollower } from "@/types/utils.type"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { useKeenSlider } from "keen-slider/react"
import { Button } from "../modules/ui/button"
import CompanyBox from "../modules/CompanyBox"

import "keen-slider/keen-slider.min.css"

const CompnaySlider: React.FC = () => {
  const [companies, setCompanies] = useState([] as companiesWithFollower[])
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
            try {
              slider.next()
            } catch (error) {
              console.log("error in slider", error)
            }
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

  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/company")
      const companiesData = await res.json()
      setCompanies(companiesData)
    }

    fetchAction()
  }, [])
  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider py-6">
        {companies.map((company) => (
          <CompanyBox key={company.id} company={company} className="keen-slider__slide" />
        ))}
      </div>
      {instanceRef.current && (
        <>
          <Button
            className="ml-3"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              instanceRef.current.track.details?.slides?.length
                ? currentSlide === instanceRef.current.track.details?.slides?.length - 1
                : true
            }
          >
            <ChevronRight />
          </Button>
          <Button
            className=""
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0 ?? true}
          >
            <ChevronLeft />
          </Button>
        </>
      )}
    </div>
  )
}

export default CompnaySlider
