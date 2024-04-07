"use client"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"
import React, { useEffect, useState } from "react"

const page = () => {
  const [rejectCv, setRejectCv] = useState<undefined | cvWithAdWithUser[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/cv?status=reject")
      const cvData: cvWithAdWithUser[] = await res.json()
      setRejectCv(cvData)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title>
        <h3>درخواست های رد شده</h3>
      </Title>
      <div className="mt-3">
        {typeof rejectCv !== "undefined" ? (
          rejectCv.length ? (
            rejectCv.map((item) => (
              <CvRequest setState={setRejectCv} cv={item} status={item.status} key={item.id} />
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
