"use client"
import React, { ReactNode, useState } from "react"
import { useRouter } from "next/navigation"

import useUser from "@/hook/store/useUser"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/modules/ui/dialog"
import { Button } from "@/components/modules/ui/button"
import { toast } from "./ui/use-toast"

type LogOutButtonActionProps = {
  mode: "ClientAction" | "ServerAction"
  className?: string
  redirectPath?: string
} & (
  | {
      mode: "ClientAction"
      successAction: (message: string) => void
      errorAction: (message: string) => void
    }
  | { mode: "ServerAction"; Toaster: ReactNode }
)

const LogOutButtonAction: React.FC<React.PropsWithChildren<LogOutButtonActionProps>> = (props) => {
  const router = useRouter()
  const { setUser } = useUser()
  const [isLogoutDialog, setIsLogoutDialog] = useState(false)

  const messageShowAction = (status: number, message: string) => {
    if (props.mode === "ClientAction") {
      if (status === 201) {
        props.successAction(message)
      } else {
        props.errorAction(message)
      }
    }
    if (props.mode === "ServerAction") {
      console.log(message, status)

      if (status === 201) {
        toast({ title: message })
      } else {
        toast({ title: message, variant: "destructive" })
        props.redirectPath && router.replace(props.redirectPath)
      }
    }
    return false
  }

  const logOutAction = async () => {
    const res = await fetch("/api/logOut", {
      method: "POST",
    })
    const data = await res.json()
    if (res.status === 201) {
      setUser(null)
      setIsLogoutDialog(false)
      if (props.redirectPath) {
        router.replace(props.redirectPath)
      }
      messageShowAction(res.status, data.message)
    }
    messageShowAction(res.status, data.message)
  }
  return (
    <>
      <div onClick={() => setIsLogoutDialog(true)} className={props.className}>
        {props.mode === "ServerAction" ? props.Toaster : null}
        {props.children}
      </div>
      <Dialog open={isLogoutDialog} onOpenChange={() => setIsLogoutDialog(false)}>
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
              onClick={logOutAction}
              className="text-destructive border-destructive hover:text-white hover:bg-destructive"
              type="button"
            >
              بله
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LogOutButtonAction
