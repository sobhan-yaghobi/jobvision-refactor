import { province, city, category, category_collection } from "@prisma/client"

export type provinceWithCity = province & {
  city: city[]
}

export type categoryWithCollection = category & {
  category_collection: category_collection[]
}
