"use client"

import React, { useRef, useState } from "react"

import { TypeSignIn, signInSchema } from "@/validation/zod.validations"
import { getLastMessage } from "@/utils/utils.function"

import { registerAction } from "@/app/action/register"

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

  const clientAction = async (formData: FormData) => {
    const newUser: TypeSignIn = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
    const resault = signInSchema.safeParse(newUser)
    if (!resault.success) {
      const errMessage = resault.error.issues.map((is) => ({
        path: is.path.at(0) as string,
        message: is.message,
      }))
      setErrs(errMessage)
      return
    }
    const sign = await registerAction(resault.data)

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
            <User className="md:btn-icon-l icon" />
            <span className="hidden md:block">ورود | ثبت نام</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12 lg:w-96 rounded-sm">
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
