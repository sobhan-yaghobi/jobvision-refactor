import React from "react"

type PriceGeneratorProps = {
  price: string | number
}

const PriceGenerator: React.FC<PriceGeneratorProps> = ({ price }) => {
  const stringPrice = Number(price).toString()
  return (
    <>
      {stringPrice.length <= 6
        ? `${stringPrice.slice(0, -3)} هزار`
        : stringPrice.length <= 9
        ? `${stringPrice.slice(0, -6)} میلیون`
        : `${stringPrice.slice(0, -9)} میلیارد`}
    </>
  )
}

export default PriceGenerator
