import { provinces, cities, categories, category_collections } from "@prisma/client"

export type provinceWithCity = provinces & {
  cities: cities[]
}

export type categoryWithCollection = categories & {
  category_collections: category_collections[]
}
