import { provinces, cities, categories, category_collections, ads, advantage } from "@prisma/client"

export type provinceWithCity = provinces & {
  cities: cities[]
}

export type categoryWithCollection = categories & {
  category_collections: category_collections[]
}

export interface ad extends ads {
  age: { min: number; max: number }
  price: { min: number; max: number }
  tags: category_collections[]
  key_indicator: string[]
  software_skills: string[]
  facilities: advantage[]
  edicational_level: string[]
}
