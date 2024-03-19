"use client"
import React, { useEffect, useState } from "react"
import { users } from "@prisma/client"

import useUser from "@/hook/store/useUser"

import { toast } from "../ui/use-toast"

import { ChevronDown } from "lucide-react"

import { Toaster } from "../ui/toaster"
import Login from "@/components/template/Login"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Link from "next/link"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"

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
  const username = user !== null ? user.email.substring(0, user.email.lastIndexOf("@")) : ""
  const [isDropdownUser, setIsDropdownUser] = useState(false)
  const [isLogoutDialog, setIsLogoutDialog] = useState(false)
  return (
    <>
      <Toaster />
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
              <DropdownMenuItem
                onClick={() => setIsLogoutDialog(true)}
                className="text-destructive cursor-pointer"
              >
                خروج از حساب
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog open={isLogoutDialog} onOpenChange={setIsLogoutDialog}>
            <DialogContent isDirectionCloseLeft>
              <DialogHeader className="mb-3">
                <DialogTitle>آیا از خروج خود مطمعن هستید !؟</DialogTitle>
              </DialogHeader>
              <DialogFooter className="flex gap-2">
                <Button variant={"outline"} onClick={() => setIsLogoutDialog(false)} type="button">
                  خیر
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => setIsLogoutDialog(false)}
                  className="text-destructive border-destructive hover:text-white hover:bg-destructive"
                  type="button"
                >
                  بله
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default UserDropDown
