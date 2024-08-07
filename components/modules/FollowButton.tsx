"use client"
import React, { useState } from "react"
import { CompaniesWithFollower } from "@/types/utils.type"
import { createFollower, removeFollower } from "@/app/action/follower"

import { toast } from "./ui/use-toast"
import useUser from "@/hook/store/useUser"
import LoadButton from "./ui/LoadButton"

type FollowButtonProps = {
  company: CompaniesWithFollower
}

const FollowButton: React.FC<FollowButtonProps> = ({ company }) => {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [isFollow, setIsFollow] = useState(
    company.followers.some((follower) => follower.user_id === user?.id)
  )

  //! ---------- Actions
  //! ----- Follow Action
  const followAction = async () => {
    setIsLoading(true)
    const cvResult = await createFollower(company.id)
    if (cvResult.status) {
      setIsFollow(true)
      setIsLoading(false)
      return toast({ title: cvResult.message, variant: "default" })
    }
    setIsLoading(false)
    return toast({ title: cvResult.message, variant: "destructive" })
  }

  //! ----- UnFollow Action
  const unFollowAction = async () => {
    setIsLoading(true)
    const cvResult = await removeFollower(company.id)
    if (cvResult.status) {
      setIsFollow(false)
      setIsLoading(false)
      return toast({ title: cvResult.message, variant: "default" })
    }
    setIsLoading(false)
    return toast({ title: cvResult.message, variant: "destructive" })
  }

  return isFollow ? (
    <LoadButton
      disabled={isLoading}
      isLoading={isLoading}
      onClick={unFollowAction}
      variant={"outline"}
      className="w-full"
    >
      لغو دنبال کردن
    </LoadButton>
  ) : (
    <LoadButton
      disabled={isLoading}
      isLoading={isLoading}
      onClick={followAction}
      className="w-full"
    >
      دنبال کنید
    </LoadButton>
  )
}

export default FollowButton
