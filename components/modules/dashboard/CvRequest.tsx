import React from "react"
import { cva } from "class-variance-authority"

import { CVRequestProps } from "@/types/utils.type"

import { User } from "lucide-react"

import TimeGenerator from "../TimeGenerator"
import CvButton from "../CVButton"
import Link from "next/link"

export const cvVaraiant = cva(
  "mb-2 h-36 bg-jv-white py-4 px-3 rounded-lg border-solid border-[1px]",
  {
    variants: {
      status: {
        default: "border-yellow-500/50",
        accept: "border-green-500/50",
        waiting: "border-yellow-500/50",
        reject: "border-destructive",
        none: "",
      },
    },
    defaultVariants: {
      status: "default",
    },
  }
)

const CVRequest: React.FC<CVRequestProps> = ({ cv, status: cvStatus, mutate }) => {
  return (
    <div className={cvVaraiant({ status: cvStatus })}>
      <div className="h-1/3 flex justify-between">
        <section className="h-full flex">
          <span className="ml-2 text-2xl text-secondary w-10 h-10 border-2 border-solid border-muted rounded-full flex items-center justify-center">
            <User />
          </span>
          <span className="text-muted-foreground text-sm">
            <p>{cv?.user?.email}</p>
            <Link
              href={`/jobs?id=${cv?.ad?.id}`}
              target="_blank"
              className="w-full text-primary truncate hover:underline"
            >
              {cv?.ad?.name}
            </Link>
          </span>
        </section>
        <section className="h-full">
          <p className="box-info-type m-0">
            <TimeGenerator date={cv.created_at} />
          </p>
        </section>
      </div>
      <div className="h-2/3 flex flex-col justify-end pb-3 mt-3 text-xs">
        <div className="flex items-center justify-end gap-3">
          <CvButton cv={cv} status={cvStatus} mutate={mutate} />
        </div>
      </div>
    </div>
  )
}

export default CVRequest
