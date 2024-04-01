"use server"

import isAuth from "./isAuth"

import { TypeCompany } from "@/validation/zod.validations"
import prisma from "@/lib/prisma"

const registerCompany = async (company: TypeCompany) => {
  const { user } = await isAuth()

  if (user !== null) {
    if (user?.company_id !== null) {
      const { location, ...companyModify } = company
      const companyResponse = await prisma.companies.findFirst({ where: { id: user.company_id } })
      const locationResault = await prisma.location.update({
        where: { id: companyResponse?.locationId },
        data: location,
      })

      const companyResualt = await prisma.companies.update({
        where: { id: user.company_id },
        data: { ...companyModify },
      })

      if (companyResualt && locationResault) {
        return {
          status: true,
        }
      }
      return { status: false }
    } else {
      const locationResault = await prisma.location.create({ data: company.location })

      const { location, ...companyModify } = company
      const companyResualt = await prisma.companies.create({
        data: { ...companyModify, locationId: locationResault.id },
      })
      if (companyResualt && locationResault) {
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
