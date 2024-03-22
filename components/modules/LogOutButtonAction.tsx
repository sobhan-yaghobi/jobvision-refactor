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
      if (props.mode === "ClientAction") {
        props.successAction(data.message)
      } else if (props.mode === "ServerAction") {
        toast({ title: data.message })
      }
    }
    if (props.mode === "ClientAction") {
      props.errorAction(data.message)
    } else if (props.mode === "ServerAction") {
      toast({ title: data.message, variant: "destructive" })
    }
  }
  return (
    <div onClick={() => setIsLogoutDialog(true)} className={props.className}>
      {props.mode === "ServerAction" ? props.Toaster : null}
      {props.children}
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
              onClick={logOutAction}
              className="text-destructive border-destructive hover:text-white hover:bg-destructive"
              type="button"
            >
              بله
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LogOutButtonAction
