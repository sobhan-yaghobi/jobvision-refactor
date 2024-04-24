import {
  province,
  city,
  category,
  category_collection,
  ad as TypeAd,
  advantage,
  company,
  location,
  cv,
  user as userPrisma,
  Prisma,
} from "@prisma/client"

export type user = userPrisma & {
  cv: cv[]
}

export type categoryWithCollection = category & {
  category_collections: category_collection[]
}

export type locationWithCity = location & {
  city: city
}

export type companyWithLocation = company & {
  location: locationWithCity
}

type adWithCompanyLoaction = TypeAd & {
  company: companyWithLocation
}

export interface ad extends adWithCompanyLoaction {
  age: { min: number; max: number }
  price: { min: number; max: number }
  tags: category_collection[]
  key_indicator: string[]
  software_skills: string[]
  facilities: advantage[]
  edicational_level: string[]
}

export type cvWithAdWithUser = cv & {
  user: user
  ad: ad
}

const companyInclude = Prisma.validator<Prisma.companyInclude>()({
  followers: true,
})
export type companiesWithFollower = Prisma.companyGetPayload<{
  include: typeof companyInclude
}>

const provinceInclude = Prisma.validator<Prisma.provinceInclude>()({ cities: true })
export type provinceWithCity = Prisma.provinceGetPayload<{
  include: typeof provinceInclude
}>

const followerInclude = Prisma.validator<Prisma.followersInclude>()({ user: true })
export type followerWithUser = Prisma.followersGetPayload<{
  include: typeof followerInclude
}>

export type paginationReturnType = {
  current: number
  pageNumbers: number
  pageArray: number[]
  next_page: number | null
  prev_page: number | null
}
