"use client"

import React, { useEffect, useState } from "react"

import { sendCV } from "@/app/action/cv"

import useUser from "@/hook/store/useUser"

import { AD } from "@/types/utils.type"

import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"
import LoadButton from "./ui/LoadButton"

type SendCVButtonProps = {
  ad: AD
}

const SendCVButton: React.FC<SendCVButtonProps> = ({ ad }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCvSend, setIsCvSend] = useState(false)
  const { user } = useUser()

  //! ---------- Send CV Action
  const clientAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true)
    event.stopPropagation()
    const cvResault = await sendCV(ad)
    if (cvResault.status) {
      setIsCvSend(true)
      setIsLoading(false)
      return toast({ title: cvResault.message, variant: "default" })
    }
    setIsLoading(false)
    return toast({ title: cvResault.message, variant: "destructive" })
  }

  //! ---------- Check CV Is Send Before
  useEffect(() => {
    const isActive = user?.cv.some((cvItem) => cvItem.ad_id === ad.id)
    setIsCvSend(isActive || false)
  }, [user])

  return isCvSend ? (
    <Button variant={"outline"}>رزومه ارسال شده</Button>
  ) : (
    <LoadButton
      disabled={isLoading}
      isLoading={isLoading}
      onClick={clientAction}
      variant={"default"}
    >
      ارسال رزومه
    </LoadButton>
  )
}

export default SendCVButton
