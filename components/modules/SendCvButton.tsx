import React, { useEffect, useState } from "react"
import useUser from "@/hook/store/useUser"

import { ad } from "@/types/utils.type"

import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"
import LoadButton from "./ui/LoadButton"

type SendCvButtonProps = {
  ad: ad
}

const SendCvButton: React.FC<SendCvButtonProps> = ({ ad }) => {
  const { user } = useUser()
  const [isCvSend, setIsCvSend] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const isActive = user?.cv.some((cvItem) => cvItem.ad_id === ad.id)
    setIsCvSend(isActive || false)
  }, [user])

  const clientAction = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true)
    event.stopPropagation()
    const res = await fetch("/api/cv/action?query=send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ad),
    })
    const cvResault = await res.json()
    if (cvResault.status) {
      setIsCvSend(true)
      setIsLoading(false)
      return toast({ title: cvResault.message, variant: "default" })
    }
    setIsLoading(false)
    return toast({ title: cvResault.message, variant: "destructive" })
  }

  return isCvSend ? (
    <Button variant={"fill"}>رزومه ارسال شده</Button>
  ) : (
    <LoadButton isLoading={isLoading} onClick={clientAction} variant={"default"}>
      ارسال رزومه
    </LoadButton>
  )
}

export default SendCvButton
