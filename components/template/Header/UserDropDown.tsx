"use client"
import React, { useCallback, useEffect, useState } from "react"

import { User } from "@/types/utils.type"

import useUser from "@/hook/store/useUser"
import { useToast } from "../../modules/ui/use-toast"

import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../modules/ui/dropdown-menu"
import LogOutButtonAction from "@/components/modules/LogOutButtonAction"
import { Button } from "../../modules/ui/button"
import Login from "@/components/template/Login"
import Link from "next/link"

const UserDropDown = () => {
  const { user, setUser } = useUser()
  const { toast } = useToast()
  const username = user !== null ? user.email.substring(0, user.email.lastIndexOf("@")) : ""
  const [isDropdownUser, setIsDropdownUser] = useState(false)

  //! ---------- SideEffects =>
  //! ----- Check Login Status Of User
  const getMeAction = useCallback(async () => {
    const res = await fetch("/api/getMe")
    if (res.status === 201) {
      const data: User | { message: string } = await res.json()
      if ("id" in data) {
        setUser(data)
      } else {
        toast({ title: "خطا در احراز هویت", variant: "destructive" })
      }
    }
  }, [setUser, toast])
  useEffect(() => {
    getMeAction()
    return () => {
      getMeAction()
    }
  }, [getMeAction])
  useEffect(() => {
    setIsDropdownUser(false)
    return () => setIsDropdownUser(false)
  }, [user])

  return (
    <>
      {user !== null ? (
        <>
          <DropdownMenu dir="rtl" open={isDropdownUser} onOpenChange={setIsDropdownUser}>
            <DropdownMenuTrigger asChild>
              <Button variant="default" className="outline-none">
                <span className="max-w-20 truncate">{username}</span>
                <ChevronDown
                  className={`icon btn-icon-r transition ${
                    isDropdownUser ? "-scale-y-100" : ""
                  } sm:btn-icon-r`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-3 mt-2">
              <DropdownMenuLabel className="text-left truncate">{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="p-0 cursor-pointer">
                  <Link className="px-2 py-1.5 inline-block" href={"/dashboard"}>
                    داشبورد
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogOutButtonAction className="text-destructive cursor-pointer">
                  خروج از حساب
                </LogOutButtonAction>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default UserDropDown
