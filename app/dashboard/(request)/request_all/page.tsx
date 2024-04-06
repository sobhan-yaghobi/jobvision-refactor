import isAuth from "@/app/action/isAuth"
import CvRequest from "@/components/modules/dashboard/CvRequest"
import { cvWithAdWithUser } from "@/types/utils.type"
import React from "react"

const page = async () => {
  const cv: cvWithAdWithUser[] =
    ((await prisma.cv.findMany({ include: { user: true, ad: true } })) as cvWithAdWithUser[]) ??
    ([] as cvWithAdWithUser[])

  return (
    <div>
      {cv.map((item) => (
        <CvRequest key={item.id} cv={item} status={item.status} />
      ))}
    </div>
  )
}

export default page
