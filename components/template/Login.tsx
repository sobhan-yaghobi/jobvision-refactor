"use client"

import React, { useState } from "react"
import z, { TypeOf } from "zod"

import { User } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../modules/ui/dialog"
import { Button } from "../modules/ui/button"
import { Input, InputMessage } from "../modules/ui/input"
import Title from "../modules/Title"
import { getLastMessage } from "@/lib/utils"

const Loginschema = z.object({
  email: z.string().trim().email("ایمیل معتبر نیست").min(1, "ایمیل اجباری میباشد"),
  password: z
    .string()
    .trim()
    .min(8, "حداقل 8 کارکتر اجباری میباشد")
    .max(100, "حداکثر کارکتر 100 میباشد"),
})
type TypeLoginFileds = z.infer<typeof Loginschema>

const Login = () => {
  const [errs, setErrs] = useState<{ path: string; message: string }[]>()
  const clientAction = async (formData: FormData) => {
    const newUser: TypeLoginFileds = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
    const resault = Loginschema.safeParse(newUser)
    if (!resault.success) {
      const errMessage = resault.error.issues.map((is) => ({
        path: is.path.at(0) as string,
        message: is.message,
      }))
      setErrs(errMessage)
      return
    }
    console.log(newUser)
  }
  return (
    <Dialog>
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
            <form action={clientAction} className="mt-6 w-full flex flex-col items-center gap-3">
              <InputMessage
                dir="ltr"
                name="email"
                wrapperClassName="w-full"
                placeholder="ایمیل"
                // message={errs?.filter((err) => err.path === "email").at(-1)?.message}
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
                message={errs?.filter((err) => err.path === "password").at(-1)?.message}
              />
              <Button className="w-full">ادامه</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Login
