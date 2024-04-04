import {
  provinces,
  cities,
  categories,
  category_collections,
  ads,
  advantage,
  companies,
  location,
} from "@prisma/client"

export type provinceWithCity = provinces & {
  cities: cities[]
}

export type categoryWithCollection = categories & {
  category_collections: category_collections[]
}

export type locationWithCity = location & {
  city: cities
}

export type companyWithLocation = companies & {
  location: locationWithCity
}

type adWithCompanyLoaction = ads & {
  companies: companyWithLocation
}

export interface ad extends adWithCompanyLoaction {
  age: { min: number; max: number }
  price: { min: number; max: number }
  tags: category_collections[]
  key_indicator: string[]
  software_skills: string[]
  facilities: advantage[]
  edicational_level: string[]
}
