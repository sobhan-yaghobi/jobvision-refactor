"use client"
import React, { useEffect, useState } from "react"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"

const LastCv: React.FC = () => {
  const [lastCv, setLastCv] = useState<undefined | cvWithAdWithUser[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/cv")
      const cvData: cvWithAdWithUser[] = await res.json()
      setLastCv(cvData)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title>
        <h3>آخرین رزومه های فرستاده شده</h3>
      </Title>
      <div className="mt-3">
        {typeof lastCv !== "undefined" ? (
          lastCv.length ? (
            lastCv.map((item) => <CvRequest cv={item} status={item.status} key={item.id} />)
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

export default LastCv
