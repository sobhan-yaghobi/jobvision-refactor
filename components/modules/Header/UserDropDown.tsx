"use client"
import React, { useEffect } from "react"

import useUser from "@/hook/store/useUser"

import { toast } from "../ui/use-toast"

import { users } from "@prisma/client"
import { Toaster } from "../ui/toaster"
import Login from "@/components/template/Login"

const UserDropDown = () => {
  const { user, setUser } = useUser()

  useEffect(() => {
    const getMeAction = async () => {
      const res = await fetch("/api/getMe")
      if (res.status === 201) {
        const data: users | { message: string } = await res.json()
        if ("id" in data) {
          setUser(data)
        } else {
          toast({ title: "خطا در احراز هویت", variant: "destructive" })
        }
      }
    }
    getMeAction()
  }, [])
  return (
    <>
      <Toaster />
      <div>{user !== null ? <>{user.email}</> : <Login />}</div>
    </>
  )
}

export default UserDropDown
