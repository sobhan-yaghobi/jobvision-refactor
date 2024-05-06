import {
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
import { ReactNode } from "react"

export type TypeMenuItem = {
  id: number
  name: string
  link: string
  isMegaMenu: boolean
}

export type quickAccessSubLinkType = {
  id: number
  title: string
  link: string
}
export type quickAccessLinkType = {
  id: number
  title: string
  link: string
  sublink: quickAccessSubLinkType[]
}
export type quickAccessItemType = {
  id: number
  title: string
  links: quickAccessLinkType[]
}

export type TypeStatus = {
  important: boolean
  response: boolean
  itern: boolean
  telecommuting: boolean
  disabledPeople: boolean
  militaryOrder: boolean
  [key: string]: boolean
}

export type TypeSidebarItem = {
  label: string
  icon: ReactNode
  href: string
  children?: (TypeSidebarItem & {
    parent_href: TypeSidebarItem["href"]
  })[]
}

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

export type filterAds = {
  search: string | null
  city: string | null
  province: string | null
  collection: string | null
  itern: string | null
  telecommuting: string | null
  disabledPeople: string | null
  militaryOrder: string | null
  price: string | null
  seniority_level: string | null
  cooperation_type: string | null
}
