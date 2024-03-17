import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compare, hash } from "bcryptjs"
import { sign, verify } from "jsonwebtoken"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const getLastMessage = <T>({
  main_id,
  array,
  key,
}: {
  main_id: string
  array: T[] | undefined
  key: keyof T
}): T | undefined => {
  const messages = array?.filter((item) => item[key] === main_id)
  return messages?.length ? messages[messages.length - 1] : undefined
}

const hashPassword = (password: string): Promise<string> => hash(password, 12)

const generateToken = (data: any) =>
  sign({ ...data }, process.env.privateKey ?? "", {
    expiresIn: "72h",
  })

const verifyPassword = (password: string, hashedPassword: string) =>
  compare(password, hashedPassword)

const verifyToken = (token: string | undefined) => {
  if (typeof token === "undefined") {
    return false
  }
  try {
    const validationResult = verify(token, process.env.privateKey as string)
    return validationResult
  } catch (err) {
    console.log("Verify Token Error =>", err)
    return false
  }
}

const isLogin = (token: string | undefined) => {
  const tokenResualt = token ? verifyToken(token) : false
  if (typeof tokenResualt === "object" && "email" in tokenResualt && token) {
    return true
  }
  return false
}

export { cn, getLastMessage, hashPassword, generateToken, verifyPassword, verifyToken, isLogin }
