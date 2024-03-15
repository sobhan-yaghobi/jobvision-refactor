import React from "react"
import Title from "../modules/Title"
import AdsBox from "../modules/AdsBox"

const LastAds = () => {
  return (
    <div>
      <Title>
        <h4>تازه‌ترین آگهی‌های شغلی برای شما</h4>
      </Title>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <AdsBox key={index + 1} className="col-span-1" />
          ))}
      </div>
    </div>
  )
}

export default LastAds
