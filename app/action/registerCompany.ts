"use server"

import { TypeCompany } from "@/validation/zod.validations"
import isAuth from "./isAuth"
import prisma from "@/lib/prisma"

const registerCompany = async (company: TypeCompany) => {
  const { isUser, user } = await isAuth()

  if (isUser) {
    const companyResualt = await prisma.companies.create({ data: company })
    if (companyResualt) {
      const userResault = await prisma.users.update({
        where: { id: user?.id },
        data: { company_id: companyResualt.id },
      })
      if (userResault) {
        return {
          message: "شرکت با موفقیت ثبت شد",
          status: true,
          company: companyResualt,
          user: userResault,
        }
      }
    }
  }
  return { message: "مشکلی در ثبت شرکت به وجود آمد", status: false }
}

export default registerCompany
