"use client"
import React, { useEffect, useState } from "react"

import { users } from "@prisma/client"

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

  const username = user !== null ? user.email.substring(0, user.email.lastIndexOf("@")) : ""
  const [isDropdownUser, setIsDropdownUser] = useState(false)
  return (
    <>
      {user !== null ? (
        <>
          <DropdownMenu dir="rtl" open={isDropdownUser} onOpenChange={setIsDropdownUser}>
            <DropdownMenuTrigger asChild>
              <Button variant="default" className="outline-none">
                <span className="hidden sm:inline-block">{username}</span>
                <ChevronDown
                  className={`icon transition ${
                    isDropdownUser ? "-scale-y-100" : ""
                  } sm:btn-icon-r`}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-3 mt-2">
              <DropdownMenuLabel>{username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="p-0">
                  <Link className="px-2 py-1.5 inline-block" href={"/"}>
                    داشبورد
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogOutButtonAction>خروج از حساب</LogOutButtonAction>
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
