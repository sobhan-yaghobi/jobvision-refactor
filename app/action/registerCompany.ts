"use server"

import prisma from "@/lib/prisma"
import isAuth from "./isAuth"
import { dateGenerate, generageFloat } from "@/utils/utils.function"
import supabase from "@/lib/supabase"
import { imageBucket } from "@/utils/utils.variable"

import {
  CompanySchemaWithLogo,
  TypeCompany,
  TypeCompanyWithLogo,
} from "@/validation/zod.validations"

//! ---------- Register And Update Company
export const registerCompany = async (company: TypeCompany, formData: FormData) => {
  const { user } = await isAuth()

  if (user && "id" in user) {
    //! ---------- Update Company User
    if (user.company_id !== null) {
      const { location, ...companyModify } = company
      const companyResponse = await prisma.company.findFirst({
        where: { id: user.company_id },
        include: {},
      })
      //! ----- Company Exsist Condition
      if (companyResponse && "id" in companyResponse) {
        const locationResault = await prisma.location.update({
          where: { id: companyResponse?.location_id },
          data: location,
        })

        const logoFile = formData.get("logo") as File
        const logo = logoFile.size
          ? await updateImage(logoFile, companyResponse?.logo, user.id)
          : true
        //! ----- Logo Exsist Condition
        if (logo) {
          //! ----- Update Company
          const companyResualt = await prisma.company.update({
            where: { id: user.company_id },
            data: { ...companyModify, ...(typeof logo === "string" && { logo }) },
          })

          //! ----- Company Update Successfully Condition
          if (companyResualt && locationResault) {
            return {
              status: true,
              message: "اطلاعات شرکت با موفقیت آپدیت شد",
            }
          }
          return { status: false, message: "مشکلی در بروزرسانی شرکت به وجود آمد" }
        } else {
          return { message: "مشکلی در بروزرسانی لوگو شرکت به وجود آمد", status: false }
        }
      } else {
        return { message: "مشکلی در پیدا کردن شرکت به وجود آمد", status: false }
      }
    } else {
      //! ---------- Create Company User
      //! ----- Create Location
      const locationResault = await prisma.location.create({
        data: company.location,
      })
      const { location, ...companyModify } = company

      //! ----- Logo Exsist Condition
      const logo = await createImage(formData.get("logo") as File, user.id)
      if (logo) {
        //! ----- Create Company
        const companyResualt = await prisma.company.create({
          data: { ...companyModify, location_id: locationResault.id, logo },
        })

        //! ----- Company Create Successfully Condition
        if (companyResualt && locationResault) {
          const userResault = await prisma.user.update({
            where: { id: user?.id },
            data: { company_id: companyResualt.id },
          })
          if (userResault) {
            return {
              message: "شرکت با موفقیت ثبت شد",
              status: true,
            }
          }
        }
        return { message: "مشکلی در ثبت شرکت به وجود آمد", status: false }
      } else {
        return { message: "مشکلی در ثبت لوگو شرکت به وجود آمد", status: false }
      }
    }
  }
  return { message: "مشکلی در ثبت یا بروزرسانی شرکت به وجود آمد", status: false }
}

//! ---------- Action Of Company Image
export const createImage = async (file: File, user_id: string) => {
  const fileName = user_id + "_" + file.name
  const { data, error } = await supabase.storage.from(imageBucket).upload(fileName, file)
  return data && !error ? fileName : false
}
const updateImage = async (file: File, fileName: string, user_id: string) => {
  const removeResault = await supabase.storage.from(imageBucket).remove([fileName])
  if (!removeResault.error) {
    const newFileName = await createImage(file, user_id)
    return newFileName
  }
  return false
}

//! ---------- Validate Company
export const validateCompany = async (city_id: string, formData: FormData) => {
  const companyObject: TypeCompany = {
    name: formData.get("name") as string,
    location: { address: formData.get("address") as string, city_id },
    score_company: generageFloat(),
    score_popularity: generageFloat(),
    score_experience_of_job_seekers: generageFloat(),
    score_responsiveness: generageFloat(),
    website: formData.get("website") as string,
    description: formData.get("description") as string,
    slogan: formData.get("slogan") as string,
    organization_employ: Number(formData.get("organization_employ")),
    industry: formData.get("industry") as string,
    established_year: dateGenerate(formData.get("established_year") as string),
    type_of_activity: formData.get("type_of_activity") as string,
  }
  const resault = CompanySchemaWithLogo.safeParse({ ...companyObject, logo: formData.get("logo") })
  const { logo, ...companyResault } = resault.success ? resault.data : ({} as TypeCompanyWithLogo)

  return {
    companyObject,
    validateData: resault.success ? companyResault : ({} as TypeCompany),
    errors: !resault.success
      ? resault.error.issues.map((err) => ({
          message: err.message as string,
          path: err.path.at(0) as string,
        }))
      : null,
  }
}
