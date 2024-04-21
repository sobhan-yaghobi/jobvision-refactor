"use server"

import { unlink, writeFile } from "fs"
import path from "path"
import { v4 as uuid } from "uuid"
import isAuth from "./isAuth"

const setImageCompany = async (logoFile: File) => {
  const { user } = await isAuth()
  let fileName = ""
  if (logoFile && logoFile.size && user) {
    const company = await prisma.company.findFirst({ where: { id: user.company_id as string } })
    const buffer = Buffer.from(await logoFile.arrayBuffer())
    fileName = uuid() + "_" + logoFile.name
    writeFile(path.join(process.cwd(), "public/uploads/" + fileName), buffer, async (err) => {
      if (!err) {
        if (company?.logo) {
          unlink(path.join(process.cwd(), "public/", company.logo || ""), (err) => {
            console.error("error on unlink a file in [changeProfile.ts]", err)
          })
        }
      }
    })
  }
  return fileName.length ? fileName : undefined
}

export default setImageCompany
