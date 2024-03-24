import Title from "@/components/modules/Title"
import AdsBox from "@/components/modules/dashboard/AdsBox"
import React from "react"

const page = () => {
  return (
    <>
      <Title>
        <h3>درخواست ها</h3>
      </Title>
      <div className="mt-6">
        <AdsBox />
      </div>
    </>
  )
}

export default page
