import React from "react"

import JobsFillter from "@/components/template/JobsFilter"
import CurrentJobAd from "@/components/template/CurrentJobAd"
import ADsList from "@/components/template/ADsList"

const page = async () => {
  return (
    <div className="mb-3">
      <div className="w-full pb-4 mb-4 border-b-2 border-solid lg:h-28">
        <JobsFillter />
      </div>
      <div className="h-fit grid grid-cols-3 gap-6 overflow-hidden lg:h-current-job">
        <div className="col-span-3 overflow-y-auto lg:col-span-1">
          <ADsList />
        </div>
        <div className="h-full hidden col-span-2 overflow-y-auto lg:block">
          <CurrentJobAd />
        </div>
      </div>
    </div>
  )
}

export default page
