"use client"

import React, { useRef, useState } from "react"

import { registerAction, validateRegister } from "@/app/action/register"

import { TypeSignIn } from "@/validation/zod.validations"
import { getLastMessage } from "@/utils/utils.function"

import { useToast } from "../modules/ui/use-toast"
import useUser from "@/hook/store/useUser"
import { useRouter } from "next/navigation"

import { User } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../modules/ui/dialog"
import { InputMessage } from "../modules/ui/input"
import { ToastAction } from "../modules/ui/toast"
import Title from "../modules/Title"
import LoadButton from "../modules/ui/LoadButton"
import { Button } from "../modules/ui/button"

const Login = () => {
  const router = useRouter()
  const { toast } = useToast()
  const { setUser } = useUser()
  const formRef = useRef<HTMLFormElement>(null)
  const [open, setOpen] = useState(false)
  const [errs, setErrs] = useState<{ path: string; message: string }[]>()

  //! ---------- Auth Action
  const clientAction = async (formData: FormData) => {
    const newUser: TypeSignIn = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
    const registerResult = await validateRegister(newUser)
    if (registerResult.errors) {
      setErrs(registerResult.errors)
      return
    }
    const sign = await registerAction(registerResult.data)

    const toastId = toast({
      title: sign.message,
      variant: sign.status === "error" ? "destructive" : "default",
      ...(sign.status === "success" && {
        action: (
          <ToastAction
            onClick={() => {
              toastId.dismiss()
              router.push("/dashboard")
            }}
            className="!bg-primary text-primary-foreground"
            altText="رفتن به پنل داشورد"
          >
            مشاهده پنل
          </ToastAction>
        ),
      }),
    })
    if (sign.status === "success") {
      setOpen(false)
      setUser(sign.user)
      formRef.current?.reset()
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <User className="icon md:btn-icon-l" />
            <span className="hidden md:block">ورود | ثبت نام</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12 rounded-sm lg:w-96">
          <DialogHeader>
            <DialogTitle className="text-center">
              <Title size="lg" className="text-center mb-6">
                <h1 className="text-primary">جاب ویژن</h1>
              </Title>
              <div className="text-xl font-thin">
                <span className="dana-bold">ورود | ثبت نام</span> کارجو
              </div>
            </DialogTitle>
            <DialogDescription>
              <form
                ref={formRef}
                action={clientAction}
                className="mt-6 w-full flex flex-col items-center gap-3"
              >
                <InputMessage
                  dir="ltr"
                  name="email"
                  wrapperClassName="w-full"
                  placeholder="ایمیل"
                  message={
                    getLastMessage({
                      array: errs,
                      key: "path",
                      main_id: "email",
                    })?.message
                  }
                />
                <InputMessage
                  dir="ltr"
                  name="password"
                  wrapperClassName="w-full"
                  placeholder="رمز عبور"
                  type="password"
                  autoComplete="current-password"
                  message={
                    getLastMessage({
                      array: errs,
                      key: "path",
                      main_id: "password",
                    })?.message
                  }
                />

                <LoadButton className="w-full">ادامه</LoadButton>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Login
