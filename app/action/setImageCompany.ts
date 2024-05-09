"use server"

import { unlink, writeFile } from "fs"
import path from "path"
import { v4 as uuid } from "uuid"
import isAuth from "./isAuth"

const setImageCompany = async (logoFile: File, logoName?: string) => {
  const { user } = await isAuth()
  let fileName = ""
  if (logoFile && logoFile.size && user) {
    const buffer = Buffer.from(await logoFile.arrayBuffer())
    fileName = uuid() + "_" + logoFile.name
    writeFile(path.join(process.cwd(), "public/uploads/" + fileName), buffer, (err) => {
      if (!err) {
        if (logoName) {
          unlink(path.join(process.cwd(), "public/uploads", logoName), (err) => {
            console.error("error on unlink a file in [changeProfile.ts]", err)
          })
        }
      }
    })
  }
  return fileName.length ? fileName : undefined
}

export default setImageCompany
