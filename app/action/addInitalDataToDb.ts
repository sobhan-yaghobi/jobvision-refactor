"use server"
import { DateObject } from "react-multi-date-picker"

import { v4 as uuid } from "uuid"

import {
  categories,
  category_collections,
  provinces,
  cities,
  companies,
  users,
  PrismaClient,
  ads,
  advantage,
  location,
} from "@prisma/client"
import prisma from "@/lib/prisma"

const CategoriesData: categories[] = [
  { id: uuid(), name: "حسابدار / مالی و..", link: "accounting" },
  { id: uuid(), name: "معامله گر و تحلیل بازار های مالی", link: "trader" },
  { id: uuid(), name: "منابع انسانی", link: "humen-resources" },
  { id: uuid(), name: "فروش و بازاریابی - کارشناس و مدیر", link: "sales" },
  { id: uuid(), name: "سئو", link: "seo" },
  { id: uuid(), name: "برنامه نویس و توسعه نرم افزار", link: "developer" },
]

const CategoryCollectionData: category_collections[] = [
  {
    id: uuid(),
    category_id: CategoriesData[0].id,
    name: "مدیر مالی",
    link: "finacial-manager",
  },
  {
    id: uuid(),
    category_id: CategoriesData[0].id,
    name: "کمک حسابدار",
    link: "accounting-assistant",
  },
  { id: uuid(), category_id: CategoriesData[0].id, name: "حسابرس", link: "auditor" },

  {
    id: uuid(),
    category_id: CategoriesData[5].id,
    name: "برنامه نویس Node.js",
    link: "nodejs",
  },
  {
    id: uuid(),
    category_id: CategoriesData[5].id,
    name: "برنامه نویس فرانت اند",
    link: "frontend",
  },
  { id: uuid(), category_id: CategoriesData[5].id, name: "برنامه نویس react", link: "react" },
  {
    id: uuid(),
    category_id: CategoriesData[5].id,
    name: "برنامه نویس اندروید",
    link: "android",
  },
]

const ProvincesData: provinces[] = [
  { id: uuid(), name: "تهران" },
  { id: uuid(), name: "خراسان رضوی" },
  { id: uuid(), name: "مازندران" },
]

const CitiesData: cities[] = [
  { id: uuid(), province_id: ProvincesData[0].id, name: "شهریار" },
  { id: uuid(), province_id: ProvincesData[0].id, name: "کمالشهر" },
  { id: uuid(), province_id: ProvincesData[0].id, name: "پرند" },

  { id: uuid(), province_id: ProvincesData[1].id, name: "مشهد" },
  { id: uuid(), province_id: ProvincesData[1].id, name: "نبشابور" },

  { id: uuid(), province_id: ProvincesData[2].id, name: "ساری" },
  { id: uuid(), province_id: ProvincesData[2].id, name: "چالوس" },
]

const LocationsData: location[] = [
  { id: uuid(), cities_id: CitiesData[3].id, address: "سعادت آباد" },
]

const CompaniesData: companies[] = [
  {
    id: uuid(),
    created_at: new Date(),
    name: "ایرانسل",
    locationId: LocationsData[0].id,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/MTN_Irancell_Logo.svg",
    score_company: 4.3,
    score_popularity: 4.6,
    score_experience_of_job_seekers: 5,
    score_responsiveness: 2,
    website: "www.irancel.com",
    description: "متن تستی برای شرکت ایرانسل",
    slogan: "متن تستی برای شعار شرکت ایرانسل",
    organization_employ: 3,
    type_of_activity: "شرکت خدمات رسانی دولتی",
    industry: "فناوری اطلاعات",
    established_year: new Date(new DateObject().format()),
  },
]

const UsersData: users[] = [
  {
    id: uuid(),
    company_id: CompaniesData[0].id,
    email: "sobhan@gmail.com",
    password: "sobhan1206",
    created_at: new Date(),
  },
]

const AdvantageData: advantage[] = [
  { id: uuid(), type: "وام" },
  { id: uuid(), type: "پارکینگ" },
  { id: uuid(), type: "پاداش" },
  { id: uuid(), type: "سرویس رفت و برگشت" },
]

const AdsData: ads[] = [
  {
    company_id: CompaniesData[0].id,
    id: "d7effb8f-e913-4c59-873d-0508536ee7c9",
    name: "متخصص next js",
    price: { max: 0, min: 200000000 },
    work_time: "از شنبه تا چهارشنبه ساعت 8 صبح تا 12 ظهر",
    travel_benefits: "سفر به کیش",
    age: { max: 0, min: 19 },
    edicational_level: ["دیپلم شبکه و نرم افزار"],
    key_indicator: ["یک سال سابقه کار با react", "دو سال سابقه کار"],
    software_skills: [
      "react - متوسط",
      "next js - متوسط",
      "js - متخصص",
      "html",
      "css",
      "react hook form",
      "axios",
      "zod",
      "prisma",
      "shadcn ui",
      "tailwind",
      "bootstrap",
      "typescript",
      "sass",
      "postman",
      "npm",
      "lodash",
      "figma",
    ],
    tags: [CategoryCollectionData[0], CategoryCollectionData[1]],
    facilities: [AdvantageData[0], AdvantageData[1], AdvantageData[2]],
    gender: "MALE",
    seniority_level: "EXPERT",
    cooperation_type: "FULL_TIME",
  },
]

interface InitialData {
  data:
    | categories[]
    | category_collections[]
    | provinces[]
    | cities[]
    | companies[]
    | users[]
    | advantage[]
    | location[]
  successMessage: string
}
async function addInitialData(
  model:
    | "categories"
    | "category_collections"
    | "provinces"
    | "cities"
    | "companies"
    | "users"
    | "advantage"
    | "ads"
    | "location",
  initialData: InitialData
): Promise<void> {
  try {
    const existingData = await (prisma[model as keyof PrismaClient] as any).findMany()
    if (existingData.length === 0) {
      await (prisma[model as keyof PrismaClient] as any).createMany({ data: initialData.data })
      console.log(`${initialData.successMessage} Successfully Added`)
    }
  } catch (error) {
    console.log(`Server Error on Add Initial Data of ${model}:`, error)
  }
}

const addInitalDataAction = async () => {
  await addInitialData("categories", {
    data: CategoriesData,
    successMessage: "Inital Data Of Categories",
  })
  await addInitialData("category_collections", {
    data: CategoryCollectionData,
    successMessage: "Inital Data Of CategoryCollections",
  })
  await addInitialData("provinces", {
    data: ProvincesData,
    successMessage: "Inital Data Of Provinces",
  })
  await addInitialData("cities", {
    data: CitiesData,
    successMessage: "Inital Data Of Cities",
  })
  await addInitialData("location", {
    data: LocationsData,
    successMessage: "Inital Data Of location",
  })
  await addInitialData("companies", {
    data: CompaniesData,
    successMessage: "Inital Data Of Companies",
  })
  await addInitialData("users", {
    data: UsersData,
    successMessage: "Inital Data Of Users",
  })
  await addInitialData("advantage", {
    data: AdvantageData,
    successMessage: "Inital Data Of Advantages",
  })
  await addInitialData("ads", {
    data: AdsData,
    successMessage: "Inital Data Of Ads",
  })
}

export default addInitalDataAction
