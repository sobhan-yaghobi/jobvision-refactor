"use client"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"
import React, { useEffect, useState } from "react"

const page = () => {
  const [acceptCv, setAcceptCv] = useState<undefined | cvWithAdWithUser[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/cv?status=accept")
      const cvData: cvWithAdWithUser[] = await res.json()
      setAcceptCv(cvData)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title>
        <h3>درخواست های قبول شده</h3>
      </Title>
      <div className="mt-3">
        {typeof acceptCv !== "undefined" ? (
          acceptCv.length ? (
            acceptCv.map((item) => (
              <CvRequest
                setState={setAcceptCv}
                cv={item}
                status={item.status}
                key={item.id}
                isSort
              />
            ))
          ) : (
            <>درخواستی وجود ندارد</>
          )
        ) : (
          <>در حال بارگذاری</>
        )}
      </div>
    </div>
  )
}

export default page
