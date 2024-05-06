"use client"
import React from "react"
import useSWR from "swr"

import { cvWithAdWithUser } from "@/types/utils.type"

import Title from "@/components/modules/Title"
import CVRequest from "@/components/modules/dashboard/CVRequest"
import CVRequestSkeleton from "@/components/modules/skeleton/CVRequest.skeleton"

const LastCv: React.FC = () => {
  const {
    data: lastCv,
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
        <h3>آخرین رزومه های فرستاده شده</h3>
      </Title>
      <div className="mt-3">
        {isLoading ? (
          Array(5)
            .fill("")
            .map((_, index) => <CVRequestSkeleton isLight key={`last-cv-skeleton-${index}`} />)
        ) : lastCv?.length ? (
          lastCv
            .reverse()
            .slice(0, 5)
            .map((item) => (
              <CVRequest mutate={mutate} cv={item} status={item.status} key={item.id} />
            ))
        ) : (
          <>درخواستی وجود ندارد</>
        )}
      </div>
    </div>
  )
}

export default LastCv
