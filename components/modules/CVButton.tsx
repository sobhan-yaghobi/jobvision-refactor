"use client"

import React, { useState } from "react"
import { toast } from "./ui/use-toast"

import { CVRequestProps } from "@/types/utils.type"

import { acceptCV, rejectCV } from "@/app/action/cv"

import LoadButton from "./ui/LoadButton"
import { MailCheck, MailMinus } from "lucide-react"

type CVButtonProps = CVRequestProps

const CVButton: React.FC<CVButtonProps> = ({ cv, status: cvStatus, mutate }) => {
  const [isRejectLoading, setIsRejectLoading] = useState(false)
  const [isAccpetLoading, setIsAccpetLoading] = useState(false)

  //! ---------- Actions
  //! ----- Accept CV
  const acceptClientAction = async () => {
    if (cvStatus !== "accept") {
      setIsAccpetLoading(true)
      const cvResault = await acceptCV(cv.id)
      if (cvResault.status) {
        typeof mutate !== "undefined" && mutate()
        setIsAccpetLoading(false)
        return toast({ title: cvResault.message, variant: "default" })
      }
      setIsAccpetLoading(false)
      return toast({ title: cvResault.message, variant: "destructive" })
    }
  }

  //! ----- Reject CV
  const rejectClientAction = async () => {
    if (cvStatus !== "reject") {
      setIsRejectLoading(true)
      const cvResault = await rejectCV(cv.id)
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
        isReplace
        isLoading={isAccpetLoading}
        disabled={cvStatus === "accept" || isAccpetLoading}
        onClick={acceptClientAction}
        variant={"success"}
        size={"sm"}
        title="تایید رزومه"
        aria-label="تایید رزومه"
      >
        <MailCheck className="icon" />
      </LoadButton>

      <LoadButton
        isReplace
        isLoading={isRejectLoading}
        disabled={cvStatus === "reject" || isRejectLoading}
        onClick={rejectClientAction}
        size={"sm"}
        variant={"destructiveLight"}
        title="رد رزومه"
        aria-label="رد رزومه"
      >
        <MailMinus className="icon" />
      </LoadButton>
    </>
  )
}

export default CVButton
