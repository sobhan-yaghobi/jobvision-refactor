import isAuth from "@/app/action/isAuth"
import { followerWithUser } from "@/types/utils.type"

export const GET = async () => {
  const { user } = await isAuth()
  if (user?.company_id) {
  }
  const follower = user?.company_id
    ? await prisma.followers.findMany({
        where: { company_id: user?.company_id },
        include: { user: true },
      })
    : ([] as followerWithUser[])
  return Response.json(follower)
}
