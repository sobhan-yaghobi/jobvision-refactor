"use client"

import React from "react"
import useSWR from "swr"

import { CVWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CVRequest from "@/components/modules/dashboard/CVRequest"
import CVRequestSkeleton from "@/components/modules/skeleton/CVRequest.skeleton"

const AcceptRequests = () => {
  const {
    data: acceptCV,
    mutate,
    isLoading,
  } = useSWR("api/request_accept", async () => {
    const res = await fetch("/api/cv?status=accept")
    const cvData: CVWithAdWithUser[] = await res.json()
    return cvData
  })
  return (
    <div>
      <Title>
        <h3>درخواست های قبول شده</h3>
      </Title>
      <div className="mt-3">
        {isLoading ? (
          Array(5)
            .fill("")
            .map((_, index) => <CVRequestSkeleton key={`last-cv-skeleton-${index}`} />)
        ) : acceptCV?.length ? (
          acceptCV.map((item) => (
            <CVRequest mutate={mutate} cv={item} status={item.status} key={item.id} />
          ))
        ) : (
          <>درخواستی وجود ندارد</>
        )}
      </div>
    </div>
  )
}

export default AcceptRequests
