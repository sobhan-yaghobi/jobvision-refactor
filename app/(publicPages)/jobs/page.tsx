import React from "react"

import JobsFillter from "@/components/template/JobsFilter"
import CurrentJobAd from "@/components/template/CurrentJobAd"
import AdsList from "@/components/template/AdsList"

import prisma from "@/lib/prisma"

export type TypeSearchParams = {
  job: string | undefined
  collection: string | undefined
  city: string | undefined
  province: string | undefined
}

const page = async ({ searchParams }: { searchParams: TypeSearchParams }) => {
  const provinces = await prisma.province.findMany({ include: { cities: true } })
  const categories = await prisma.category.findMany({ include: { category_collections: true } })
  return (
    <div className="mb-3">
      <div className="w-full h-28 pb-4 mb-4 border-b-2 border-solid">
        <JobsFillter provinces={provinces} categories={categories} />
      </div>
      <div className="h-current-job overflow-hidden grid grid-cols-3 gap-6">
        <div className="col-span-1 overflow-y-auto">
          <AdsList searchParams={searchParams} />
        </div>
        <div className="h-full col-span-2 overflow-y-auto">
          <CurrentJobAd />
        </div>
      </div>
    </div>
  )
}

export default page
