"use server"

import { TypeCompany } from "@/validation/zod.validations"
import isAuth from "./isAuth"
import prisma from "@/lib/prisma"

const registerCompany = async (company: TypeCompany) => {
  const { user } = await isAuth()

  if (user !== null) {
    if (user?.company_id !== null) {
      const companyResualt = await prisma.companies.update({
        where: { id: user.company_id },
        data: company,
      })
      if (companyResualt) {
        return {
          status: true,
        }
      }
      return { status: false }
    } else {
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
  }
  return { message: "مشکلی در ثبت یا بروزرسانی شرکت به وجود آمد", status: false }
}

export default registerCompany
