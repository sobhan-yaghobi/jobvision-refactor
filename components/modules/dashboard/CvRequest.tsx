import React from "react"
import { cva } from "class-variance-authority"
import { status } from "@prisma/client"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import { cvWithAdWithUser } from "@/types/utils.type"
import TimeGenerator from "../TimeGenerator"
import { getTime } from "@/lib/utils"
const cvVaraiant = cva("mb-2 h-36 bg-jv-white py-4 px-3 rounded-lg border-solid border-[1px]", {
  variants: {
    status: {
      default: "border-yellow-500/50",
      accept: "border-green-500/50",
      waiting: "border-yellow-500/50",
      reject: "border-destructive",
    },
  },
  defaultVariants: {
    status: "default",
  },
})

type CvRequestProps = {
  cv: cvWithAdWithUser
  status: status
}

const CvRequest: React.FC<CvRequestProps> = ({ cv, status }) => {
  return (
    <div className={cvVaraiant({ status })}>
      <div className="h-1/3 flex justify-between">
        <section className="h-full flex">
          <span className="ml-2 text-2xl text-secondary w-10 h-10 border-2 border-solid border-muted rounded-full flex items-center justify-center">
            <User />
          </span>
          <span>
            <p className="text-base text-jv-lightGray">{cv?.user.email}</p>
            <p className="text-xs">توسعه دهنده فرانت اند</p>
          </span>
        </section>
        <section className="h-full">
          <p className="box-info-type m-0">
            <TimeGenerator dateInfo={getTime(cv.created_at)} />
          </p>
        </section>
      </div>
      <div className="h-2/3 mt-2 text-xs flex flex-col">
        <p className="text-base pb-2 text-jv-lightGray w-full truncate" title="متن کامل">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
        </p>
        <div className="flex items-center justify-end gap-3">
          <Button size={"sm"}>قبول</Button>
          <Button size={"sm"} variant={"destructiveOutline"}>
            رد
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CvRequest
