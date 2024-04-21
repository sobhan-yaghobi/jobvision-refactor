"use client"

import React from "react"
import useSWR from "swr"

import { cvWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"

const page = () => {
  const {
    data: rejectCv,
    mutate,
    isLoading,
  } = useSWR("api/request_all", async () => {
    const res = await fetch("/api/cv?status=reject")
    const cvData: cvWithAdWithUser[] = await res.json()
    return cvData
  })
  return (
    <div>
      <Title>
        <h3>درخواست های رد شده</h3>
      </Title>
      <div className="mt-3">
        {isLoading ? (
          <>در حال بارگذاری</>
        ) : rejectCv?.length ? (
          rejectCv.map((item) => (
            <CvRequest mutate={mutate} cv={item} status={item.status} key={item.id} />
          ))
        ) : (
          <>درحواستی وجود ندارد</>
        )}
      </div>
    </div>
  )
}

export default page
