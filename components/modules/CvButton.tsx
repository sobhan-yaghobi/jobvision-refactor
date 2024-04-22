"use client"
import React, { useState } from "react"
import { toast } from "./ui/use-toast"

import { acceptCv, rejectCv } from "@/app/action/cv"

import { CvRequestProps } from "./dashboard/CvRequest"

import LoadButton from "./ui/LoadButton"

type CvButtonProps = CvRequestProps

const CvButton: React.FC<CvButtonProps> = ({ cv, status: cvStatus, mutate }) => {
  const [isRejectLoading, setIsRejectLoading] = useState(false)
  const [isAccpetLoading, setIsAccpetLoading] = useState(false)

  const acceptClientAction = async () => {
    if (cvStatus !== "accept") {
      setIsAccpetLoading(true)
      const cvResault = await acceptCv(cv.id)
      if (cvResault.status) {
        typeof mutate !== "undefined" && mutate()
        setIsAccpetLoading(false)
        return toast({ title: cvResault.message, variant: "default" })
      }
      setIsAccpetLoading(false)
      return toast({ title: cvResault.message, variant: "destructive" })
    }
  }
  const rejectClientAction = async () => {
    if (cvStatus !== "reject") {
      setIsRejectLoading(true)
      const cvResault = await rejectCv(cv.id)
      if (cvResault.status) {
        typeof mutate !== "undefined" && mutate()
        setIsRejectLoading(false)
        return toast({ title: cvResault.message, variant: "default" })
      }
      setIsRejectLoading(false)
      return toast({ title: cvResault.message, variant: "destructive" })
    }
  }
  return (
    <>
      <LoadButton
        isLoading={isAccpetLoading}
        disabled={cvStatus === "accept" || isAccpetLoading}
        onClick={acceptClientAction}
        size={"sm"}
      >
        قبول
      </LoadButton>
      <LoadButton
        isLoading={isRejectLoading}
        disabled={cvStatus === "reject" || isRejectLoading}
        onClick={rejectClientAction}
        size={"sm"}
        variant={"destructiveOutline"}
      >
        رد
      </LoadButton>
    </>
  )
}

export default CvButton
