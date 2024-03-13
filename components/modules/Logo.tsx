import React from "react"
import Image from "next/image"

import logoPrimaryShape from "@/public/logo/logoPrimaryShape.svg"
import logoPrimaryText from "@/public/logo/logoPrimaryText.svg"
import logoWhiteText from "@/public/logo/logoWhiteText.svg"

type LogoProps = {
  className?: string
  variants: "PrimaryText" | "PrimaryShape" | "WhiteText"
}

const imageSrc = {
  PrimaryText: logoPrimaryText,
  PrimaryShape: logoPrimaryShape,
  WhiteText: logoWhiteText,
}

const Logo: React.FC<LogoProps> = ({ className, variants }) => {
  const CurrentSrc = imageSrc[variants] ? imageSrc[variants] : logoPrimaryText
  return <Image width={60} height={60} alt="logo" src={CurrentSrc} className={className ?? ""} />
}

export default Logo
