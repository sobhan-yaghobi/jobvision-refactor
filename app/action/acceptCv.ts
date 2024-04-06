"use server"

const acceptCv = async (id: string) => {
  const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "accept" } })
  if (cvResualt) {
    return { message: "درخواست با موفقیت قبول شد", status: true }
  }
  return { message: "مشکلی در قبول کردن درخواست به وجود آمد", status: false }
}

export default acceptCv
