"use client"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"
import React, { useEffect, useState } from "react"

const page = () => {
  const [allCv, setAllCv] = useState<undefined | cvWithAdWithUser[]>()
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch("/api/cv")
      const cvData: cvWithAdWithUser[] = await res.json()
      setAllCv(cvData)
    }

    fetchAction()
  }, [])
  return (
    <div>
      <Title>
        <h3>تمامی درخواست ها</h3>
      </Title>
      <div className="mt-3">
        {typeof allCv !== "undefined" ? (
          allCv.length ? (
            allCv.map((item) => (
              <CvRequest setState={setAllCv} cv={item} status={item.status} key={item.id} />
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
