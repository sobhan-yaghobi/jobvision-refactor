import { cookies } from "next/headers"

const POST = async () => {
  cookies().delete("token")
  return Response.json({ message: "خروج با موفقیت به اتمام رسید" }, { status: 201 })
}

export { POST }
