import { Prisma, category_collection, advantage } from "@prisma/client"
import { ReactNode } from "react"

//! ---------- Header Types
export type TypeMenuItem = {
  id: number
  name: string
  link: string
  isMegaMenu: boolean
}

//! ---------- Footer Types
export type quickAccessItemType = {
  id: number
  title: string
  links: {
    id: number
    title: string
    link: string
    sublink: {
      id: number
      title: string
      link: string
    }[]
  }[]
}

//! ---------- AD Types
export type TypeStatus = {
  important: boolean
  response: boolean
  itern: boolean
  telecommuting: boolean
  disabledPeople: boolean
  militaryOrder: boolean
  [key: string]: boolean
}

const adInclude = Prisma.validator<Prisma.adInclude>()({
  company: { include: { location: { include: { city: true } } } },
})
export type adWithCompanyLoaction = Prisma.adGetPayload<{
  include: typeof adInclude
}>

export interface ad extends adWithCompanyLoaction {
  age: { min: number; max: number }
  price: { min: number; max: number }
  tags: category_collection[]
  key_indicator: string[]
  software_skills: string[]
  facilities: advantage[]
  edicational_level: string[]
}

//! ---------- Dashboard Types
export type TypeSidebarItem = {
  label: string
  icon: ReactNode
  href: string
  children?: (TypeSidebarItem & {
    parent_href: TypeSidebarItem["href"]
  })[]
}

//! ---------- User Type
const userInclude = Prisma.validator<Prisma.userInclude>()({
  cv: true,
})
export type user = Prisma.userGetPayload<{
  include: typeof userInclude
}>

//! ---------- Category Type
const categoryInclude = Prisma.validator<Prisma.categoryInclude>()({
  category_collections: true,
})
export type categoryWithCollection = Prisma.categoryGetPayload<{
  include: typeof categoryInclude
}>

//! ---------- Location Type
const locationInclude = Prisma.validator<Prisma.locationInclude>()({
  city: true,
})
export type locationWithCity = Prisma.locationGetPayload<{
  include: typeof locationInclude
}>

//! ---------- Company Types
const compInclude = Prisma.validator<Prisma.companyInclude>()({
  location: true,
})
export type companyWithLocation = Prisma.companyGetPayload<{
  include: typeof compInclude
}>

const companyInclude = Prisma.validator<Prisma.companyInclude>()({
  followers: true,
})
export type companiesWithFollower = Prisma.companyGetPayload<{
  include: typeof companyInclude
}>

//! ---------- CV Type
const cvInclude = Prisma.validator<Prisma.cvInclude>()({
  user: true,
  ad: true,
})
export type cvWithAdWithUser = Prisma.cvGetPayload<{
  include: typeof cvInclude
}>

//! ---------- Province Type
const provinceInclude = Prisma.validator<Prisma.provinceInclude>()({ cities: true })
export type provinceWithCity = Prisma.provinceGetPayload<{
  include: typeof provinceInclude
}>

//! ---------- Follower Type
const followerInclude = Prisma.validator<Prisma.followersInclude>()({ user: true })
export type followerWithUser = Prisma.followersGetPayload<{
  include: typeof followerInclude
}>

//! ---------- Filter Type
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
