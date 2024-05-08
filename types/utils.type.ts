import {
  Prisma,
  category_collection as Category_collection,
  advantage as Advantage,
  status,
} from "@prisma/client"
import { ReactNode } from "react"

//! ---------- Header Types
export type TypeMenuItem = {
  id: number
  name: string
  link: string
  isMegaMenu: boolean
}

//! ---------- Footer Types
export type QuickAccessItemType = {
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
export type ADWithCompanyLoaction = Prisma.adGetPayload<{
  include: typeof adInclude
}>

export interface AD extends ADWithCompanyLoaction {
  age: { min: number; max: number }
  price: { min: number; max: number }
  tags: Category_collection[]
  key_indicator: string[]
  software_skills: string[]
  facilities: Advantage[]
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

export type CVRequestProps = {
  mutate?: () => void
  cv: CVWithAdWithUser
  status: status
}

//! ---------- User Type
const userInclude = Prisma.validator<Prisma.userInclude>()({
  cv: true,
})
export type User = Prisma.userGetPayload<{
  include: typeof userInclude
}>

//! ---------- Category Type
const categoryInclude = Prisma.validator<Prisma.categoryInclude>()({
  category_collections: true,
})
export type CategoryWithCollection = Prisma.categoryGetPayload<{
  include: typeof categoryInclude
}>

//! ---------- Company Types
const compInclude = Prisma.validator<Prisma.companyInclude>()({
  location: true,
})
export type CompanyWithLocation = Prisma.companyGetPayload<{
  include: typeof compInclude
}>

const companyInclude = Prisma.validator<Prisma.companyInclude>()({
  followers: true,
})
export type CompaniesWithFollower = Prisma.companyGetPayload<{
  include: typeof companyInclude
}>

//! ---------- CV Type
const cvInclude = Prisma.validator<Prisma.cvInclude>()({
  user: true,
  ad: true,
})
export type CVWithAdWithUser = Prisma.cvGetPayload<{
  include: typeof cvInclude
}>

//! ---------- Province Type
const provinceInclude = Prisma.validator<Prisma.provinceInclude>()({ cities: true })
export type provinceWithCity = Prisma.provinceGetPayload<{
  include: typeof provinceInclude
}>

//! ---------- Follower Type
const followerInclude = Prisma.validator<Prisma.followersInclude>()({ user: true })
export type FollowerWithUser = Prisma.followersGetPayload<{
  include: typeof followerInclude
}>

//! ---------- Filter Type
export type FilterAds = {
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
