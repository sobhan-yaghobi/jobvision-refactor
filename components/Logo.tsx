import React from "react"
import Image from "next/image"

import logoPrimaryShape from "@/public/logo/logoPrimaryShape.svg"
import logoPrimaryText from "@/public/logo/logoPrimaryText.svg"
import logoWhiteText from "@/public/logo/logoWhiteText.svg"

type LogoProps = {
  width: number
  height: number
  className?: string
  variants: "PrimaryText" | "PrimaryShape" | "WhiteText"
}

const imageSrc = {
  PrimaryText: logoPrimaryText,
  PrimaryShape: logoPrimaryShape,
  WhiteText: logoWhiteText,
}

const Logo: React.FC<LogoProps> = ({ width, height, className, variants }) => {
  const CurrentSrc = imageSrc[variants] ? imageSrc[variants] : logoPrimaryText
  return (
    <Image width={width} height={height} alt="logo" src={CurrentSrc} className={className ?? ""} />
  )
}

export default Logo
