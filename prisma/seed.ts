import {
  AdsData,
  AdvantageData,
  CategoriesData,
  CategoryCollectionData,
  CitiesData,
  CompaniesData,
  LocationsData,
  ProvincesData,
  UsersData,
} from "../utils/initialData"

import {
  company as Company,
  ad as AD,
  category as Category,
  category_collection as Category_collection,
  city as City,
  province as Province,
  user as User,
  advantage as Advantage,
  location as Location,
  PrismaClient,
} from "@prisma/client"

import prisma from "../lib/prisma"

const main = async () => {
  await addInitialData("category", {
    data: CategoriesData,
    successMessage: "Inital Data Of Categories",
  })
  await addInitialData("category_collection", {
    data: CategoryCollectionData,
    successMessage: "Inital Data Of CategoryCollections",
  })
  await addInitialData("province", {
    data: ProvincesData,
    successMessage: "Inital Data Of Provinces",
  })
  await addInitialData("city", {
    data: CitiesData,
    successMessage: "Inital Data Of Cities",
  })
  await addInitialData("location", {
    data: LocationsData,
    successMessage: "Inital Data Of location",
  })

  await addInitialData("company", {
    data: CompaniesData,
    successMessage: "Inital Data Of Companies",
  })
  await addInitialData("user", {
    data: UsersData,
    successMessage: "Inital Data Of Users",
  })
  await addInitialData("advantage", {
    data: AdvantageData,
    successMessage: "Inital Data Of Advantages",
  })
  await addInitialData("ad", {
    data: AdsData,
    successMessage: "Inital Data Of Ads",
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })

//! ---------- Add Data Action
interface InitialData {
  data:
    | Category[]
    | Category_collection[]
    | Province[]
    | City[]
    | Company[]
    | User[]
    | Advantage[]
    | AD[]
    | Location[]
  successMessage: string
}
async function addInitialData(
  model:
    | "category"
    | "category_collection"
    | "province"
    | "city"
    | "company"
    | "user"
    | "advantage"
    | "ad"
    | "location",
  initialData: InitialData
): Promise<void> {
  try {
    await (prisma[model as keyof PrismaClient] as any).deleteMany()
    await (prisma[model as keyof PrismaClient] as any).createMany({ data: initialData.data })
    console.log(`${initialData.successMessage} Successfully Added`)
  } catch (error) {
    console.log(`Server Error on Add Initial Data of ${model}:`, error)
  }
}
