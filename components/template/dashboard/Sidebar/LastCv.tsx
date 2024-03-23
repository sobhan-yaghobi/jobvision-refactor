import React from "react"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"

const LastCv: React.FC = () => {
  return (
    <div>
      <Title>
        <h3>آخرین رزومه های فرستاده شده</h3>
      </Title>
      <div className="mt-3">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <CvRequest status={"success"} key={index} />
          ))}
      </div>
    </div>
  )
}

export default LastCv
