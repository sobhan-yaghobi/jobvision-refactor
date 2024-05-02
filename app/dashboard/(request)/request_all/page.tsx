"use client"

import React from "react"
import useSWR from "swr"

import { cvWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import CVREquestSkeleton from "@/components/modules/skeleton/CVREquest.skeleton"

const page = () => {
  const {
    data: allCv,
    mutate,
    isLoading,
  } = useSWR("api/request_all", async () => {
    const res = await fetch("/api/cv")
    const cvData: cvWithAdWithUser[] = await res.json()
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
            .map((_, index) => <CVREquestSkeleton key={`all-cv-skeleton-${index}`} />)
        ) : allCv?.length ? (
          allCv.map((item) => (
            <CvRequest mutate={mutate} cv={item} status={item.status} key={item.id} />
          ))
        ) : (
          <>درخواستی وجود ندارد</>
        )}
      </div>
    </div>
  )
}

export default page
