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
      //! ----- Company Exist Condition
      if (companyResponse && "id" in companyResponse) {
        const locationResult = await prisma.location.update({
          where: { id: companyResponse?.location_id },
          data: location,
        })

        const logoFile = formData.get("logo") as File
        const logo = logoFile.size
          ? await updateImage(logoFile, companyResponse?.logo, user.id)
          : true
        //! ----- Logo Exist Condition
        if (logo) {
          //! ----- Update Company
          const companyResult = await prisma.company.update({
            where: { id: user.company_id },
            data: { ...companyModify, ...(typeof logo === "string" && { logo }) },
          })

          //! ----- Company Update Successfully Condition
          if (companyResult && locationResult) {
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
      const locationResult = await prisma.location.create({
        data: company.location,
      })
      const { location, ...companyModify } = company

      //! ----- Logo Exist Condition
      const logo = await createImage(formData.get("logo") as File, user.id)
      if (logo) {
        //! ----- Create Company
        const companyResult = await prisma.company.create({
          data: { ...companyModify, location_id: locationResult.id, logo },
        })

        //! ----- Company Create Successfully Condition
        if (companyResult && locationResult) {
          const userResult = await prisma.user.update({
            where: { id: user?.id },
            data: { company_id: companyResult.id },
          })
          if (userResult) {
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
  const removeResult = await supabase.storage.from(imageBucket).remove([fileName])
  if (!removeResult.error) {
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
  const Result = CompanySchemaWithLogo.safeParse({ ...companyObject, logo: formData.get("logo") })
  const { logo, ...companyResult } = Result.success ? Result.data : ({} as TypeCompanyWithLogo)

  return {
    companyObject,
    validateData: Result.success ? companyResult : ({} as TypeCompany),
    errors: !Result.success
      ? Result.error.issues.map((err) => ({
          message: err.message as string,
          path: err.path.at(0) as string,
        }))
      : null,
  }
}
