"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { toast } from "@/components/modules/ui/use-toast"
import useUser from "@/hook/store/useUser"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/modules/ui/dialog"
import { Button } from "@/components/modules/ui/button"
import { Toaster } from "@/components/modules/ui/toaster"

type LogOutButtonActionProps = {
  redirectPath?: string
}

const LogOutButtonAction: React.FC<React.PropsWithChildren<LogOutButtonActionProps>> = ({
  children,
  redirectPath,
}) => {
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
      if (redirectPath) {
        router.replace(redirectPath)
      }
      toast({ title: data.message, variant: "default" })
    }
    toast({ title: data.message, variant: "destructive" })
  }
  return (
    <div onClick={() => setIsLogoutDialog(true)}>
      {children}
      <Toaster />
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
