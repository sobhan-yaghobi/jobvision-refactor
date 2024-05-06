"use client"

import React from "react"
import useSWR from "swr"

import { cvWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CVRequest from "@/components/modules/dashboard/CVRequest"
import CVRequestSkeleton from "@/components/modules/skeleton/CVRequest.skeleton"

const page = () => {
  const {
    data: waitingCv,
    mutate,
    isLoading,
  } = useSWR("api/request_all", async () => {
    const res = await fetch("/api/cv?status=waiting")
    const cvData: cvWithAdWithUser[] = await res.json()
    return cvData
  })
  return (
    <div>
      <Title>
        <h3>رزومه های در حال انتظار</h3>
      </Title>
      <div className="mt-3">
        {isLoading ? (
          Array(5)
            .fill("")
            .map((_, index) => <CVRequestSkeleton key={`last-cv-skeleton-${index}`} />)
        ) : waitingCv?.length ? (
          waitingCv.map((item) => (
            <CVRequest mutate={mutate} cv={item} status={item.status} key={item.id} />
          ))
        ) : (
          <>درخواستی وجود ندارد</>
        )}
      </div>
    </div>
  )
}

export default page
