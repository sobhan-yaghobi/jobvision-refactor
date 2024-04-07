"use client"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"
import React, { useEffect, useState } from "react"

const page = () => {
  const [waitingCv, setWaitingCv] = useState<undefined | cvWithAdWithUser[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/cv?status=waiting")
      const cvData: cvWithAdWithUser[] = await res.json()
      setWaitingCv(cvData)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title>
        <h3>رزومه های در حال انتظار</h3>
      </Title>
      <div className="mt-3">
        {typeof waitingCv !== "undefined" ? (
          waitingCv.length ? (
            waitingCv.map((item) => (
              <CvRequest setState={setWaitingCv} cv={item} status={item.status} key={item.id} />
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
