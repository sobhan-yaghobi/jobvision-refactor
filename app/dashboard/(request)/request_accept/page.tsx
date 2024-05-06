"use client"

import React from "react"
import useSWR from "swr"

import { cvWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CVRequest from "@/components/modules/dashboard/CVRequest"
import CVRequestSkeleton from "@/components/modules/skeleton/CVRequest.skeleton"

const page = () => {
  const {
    data: acceptCv,
    mutate,
    isLoading,
  } = useSWR("api/request_accept", async () => {
    const res = await fetch("/api/cv?status=accept")
    const cvData: cvWithAdWithUser[] = await res.json()
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
        ) : acceptCv?.length ? (
          acceptCv.map((item) => (
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
