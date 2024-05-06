import isAuth from "@/app/action/isAuth"
import { FollowerWithUser } from "@/types/utils.type"

export const GET = async () => {
  const { user } = await isAuth()
  if (user?.company_id) {
  }
  const follower = user?.company_id
    ? await prisma.followers.findMany({
        where: { company_id: user?.company_id },
        include: { user: true },
      })
    : ([] as FollowerWithUser[])
  return Response.json(follower)
}
