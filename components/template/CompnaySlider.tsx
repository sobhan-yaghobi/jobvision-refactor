"use client"

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../modules/ui/card"
import { Button } from "../modules/ui/button"
import { MoveLeft, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
          <Card className="keen-slider__slide  bg-muted w-[300px] h-[280px] flex flex-col justify-between p-3">
            <CardHeader className="h-16 center items-start p-0">
              <Image
                width={190}
                height={100}
                className="w-auto h-full"
                src="/images/Irancell_logo.webp"
                alt="company-image"
              />
            </CardHeader>
            <CardTitle className="my-3">MTN Irancell</CardTitle>
            <CardContent className="p-0">
              <div className="flex items-center gap-3">
                <Star className="icon-lg fill-yellow-500 stroke-black stroke-1" stroke="1px" />
                <span className="text-lg">3.5</span>
              </div>
              <Link href={"/jobs"} className="w-full flex items-center gap-3 mt-3">
                23 آگهی شغل فعال
                <MoveLeft />
              </Link>
            </CardContent>
            <CardFooter className="mt-3 p-0">
              <Button className="w-full">دنبال کنید</Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}

export default CompnaySlider
