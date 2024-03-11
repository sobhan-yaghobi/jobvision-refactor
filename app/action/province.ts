const getProvince = async () => {
  try {
    const province = await prisma.province.findMany({ include: { city: true } })
    return province
  } catch (error) {
    return {
      message: error,
    }
  }
}
