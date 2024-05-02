"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/utils/utils.function"

import logout from "@/app/action/logout"

import useUser from "@/hook/store/useUser"
import { useToast } from "./ui/use-toast"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/modules/ui/dialog"
import { Button, buttonVariants } from "@/components/modules/ui/button"
import { VariantProps } from "class-variance-authority"

export interface LogOutButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  redirect?: string
  includeProps?: boolean
}

const LogOutButtonAction = React.forwardRef<HTMLButtonElement, LogOutButtonActionProps>(
  ({ includeProps, ...props }, forwardedRef) => {
    const router = useRouter()
    const { setUser } = useUser()
    const { toast } = useToast()
    const [isLogoutDialog, setIsLogoutDialog] = useState(false)

    const logOutAction = async () => {
      const resault = await logout()
      if (resault.status) {
        setUser(null)
        setIsLogoutDialog(false)
        if (props.redirect) {
          router.replace(props.redirect)
        }
        toast({ title: resault.message, variant: "default" })
      }
      toast({ title: resault.message, variant: "destructive" })
    }
    return (
      <>
        <Button
          variant={"none"}
          ref={forwardedRef}
          onClick={() => setIsLogoutDialog(true)}
          className={cn("h-10 focus:!text-current", props.className)}
          {...(includeProps && { ...props })}
        >
          {props.children}
        </Button>
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
)

export default LogOutButtonAction
