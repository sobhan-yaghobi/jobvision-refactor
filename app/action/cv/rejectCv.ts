"use server"

const rejectCv = async (id: string) => {
  const cvResualt = await prisma.cv.update({ where: { id }, data: { status: "reject" } })
  if (cvResualt) {
    return { message: "درخواست با موفقیت رد شد", status: true }
  }
  return { message: "مشکلی در رد کردن درخواست به وجود آمد", status: false }
}

export default rejectCv
