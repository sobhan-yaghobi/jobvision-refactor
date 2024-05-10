"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"
import setImageCompany from "./setImageCompany"

import { TypeCompany, companySchema } from "@/validation/zod.validations"

//! ---------- Register And Update Company
export const registerCompany = async (company: TypeCompany, formData: FormData) => {
  const { user } = await isAuth()

  if (user !== null) {
    //! ---------- Update Company User
    if (user?.company_id !== null) {
      const { location, ...companyModify } = company
      const companyResponse = await prisma.company.findFirst({
        where: { id: user.company_id },
        include: {},
      })
      const locationResault = await prisma.location.update({
        where: { id: companyResponse?.location_id },
        data: location,
      })
      const logo = await setImageCompany(formData.get("logo") as File, companyResponse?.logo)

      const companyResualt = await prisma.company.update({
        where: { id: user.company_id },
        data: { ...companyModify, logo },
      })

      if (companyResualt && locationResault) {
        return {
          status: true,
          message: "اطلاعات شرکت با موفقیت آپدیت شد",
        }
      }
      return { status: false, message: "مشکلی در بروزرسانی شرکت به وجود آمد" }
    } else {
      //! ---------- Create Company User
      const locationResault = await prisma.location.create({ data: company.location })
      const { location, ...companyModify } = company
      const logo = await setImageCompany(formData.get("logo") as File)

      if (logo) {
        const companyResualt = await prisma.company.create({
          data: { ...companyModify, location_id: locationResault.id, logo },
        })
        if (companyResualt && locationResault) {
          const userResault = await prisma.user.update({
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
  }
  return { message: "مشکلی در ثبت یا بروزرسانی شرکت به وجود آمد", status: false }
}

//! ---------- Validate Company
export const validateCompany = async (company: TypeCompany) => {
  const resault = companySchema.safeParse(company)
  return resault
}
