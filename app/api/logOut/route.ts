import { cookies } from "next/headers"

const POST = async () => {
  try {
    cookies().delete("token")
    return Response.json({ message: "خروج با موفقیت به اتمام رسید" }, { status: 201 })
  } catch {
    return Response.json({ message: "مشکلی در خروج از حساب پیش آمده" }, { status: 500 })
  }
}

export { POST }
