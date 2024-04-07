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
      <div className="w-full pb-4 mb-4 border-b-2 border-solid lg:h-28">
        <JobsFillter provinces={provinces} categories={categories} />
      </div>
      <div className="h-fit overflow-hidden grid grid-cols-3 gap-6 lg:h-current-job">
        <div className="col-span-3 overflow-y-auto lg:col-span-1">
          <AdsList searchParams={searchParams} />
        </div>
        <div className="hidden h-full col-span-2 overflow-y-auto lg:block">
          <CurrentJobAd />
        </div>
      </div>
    </div>
  )
}

export default page
