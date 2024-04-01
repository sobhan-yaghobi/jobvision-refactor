import React from "react"

import JobsFillter from "@/components/template/JobsFillter"
import CurrentJobAd from "@/components/template/CurrentJobAd"
import AdsList from "@/components/template/AdsList"

import prisma from "@/lib/prisma"

const page = async ({
  searchParams,
}: {
  searchParams: { job: string | undefined; tag: string | undefined; city: string | undefined }
}) => {
  const provinces = await prisma.provinces.findMany({ include: { cities: true } })
  const categories = await prisma.categories.findMany({ include: { category_collections: true } })
  return (
    <div>
      <div className="w-full pb-4 mb-4 border-b-2 border-solid">
        <JobsFillter provinces={provinces} categories={categories} buttonVariant={"secondary"} />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-4">
        <div className="col-span-1">
          <AdsList />
        </div>
        <div className="col-span-2">
          <CurrentJobAd />
        </div>
      </div>
    </div>
  )
}

export default page
