"use client"

import React from "react"
import useSWR from "swr"

import { CVWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CVRequest from "@/components/modules/dashboard/CVRequest"
import CVRequestSkeleton from "@/components/modules/skeleton/CVRequest.skeleton"

const page = () => {
  const {
    data: allCv,
    mutate,
    isLoading,
  } = useSWR("api/request_all", async () => {
    const res = await fetch("/api/cv")
    const cvData: CVWithAdWithUser[] = await res.json()
    return cvData
  })
  return (
    <div>
      <Title>
        <h3>تمامی درخواست ها</h3>
      </Title>
      <div className="mt-3">
        {isLoading ? (
          Array(3)
            .fill("")
            .map((_, index) => <CVRequestSkeleton key={`all-cv-skeleton-${index}`} />)
        ) : allCv?.length ? (
          allCv.map((item) => (
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
