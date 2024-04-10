import { seniority_level, gender, cooperation_type } from "@prisma/client"

export const genderItems: { type: gender; name: string }[] = [
  { name: "آقا", type: "MALE" },
  { name: "خانوم", type: "FEMALE" },
  { name: "تفاوتی ندارد", type: "NOT_IMPORTANT" },
]

export type TypeSeniorityLevel = { type: seniority_level; name: string }
export const seniorityLevelItems: TypeSeniorityLevel[] = [
  { name: "کارگر", type: "WORKER" },
  { name: "کارمند", type: "EMPLOYEE" },
  { name: "کارشناس", type: "EXPERT" },
  { name: "کارشناس ارشد", type: "MA" },
  { name: "معاونت", type: "ASSISTANCE" },
  { name: "مدیر ارشد", type: "CHIEF" },
]

export type TypeCooperationType = { type: cooperation_type; name: string }
export const cooperationTypeItems: TypeCooperationType[] = [
  { name: "تمام وقت", type: "FULL_TIME" },
  { name: "پاره وقت", type: "PART_TIME" },
  { name: "قراردادی", type: "CONTRACT" },
]

export type TypePrice = {
  type:
    | "RIGHT_UNDER-4"
    | "RIGHT_BETWEEN-4-8"
    | "RIGHT_BETWEEN-8-12"
    | "RIGHT_BETWEEN-12-20"
    | "RIGHT_HIGHER-20"
  name: string
}
export const priceItems: TypePrice[] = [
  { name: "زیر 4 میلیون تومان", type: "RIGHT_UNDER-4" },
  { name: "بین 4 تا 8 میلیون", type: "RIGHT_BETWEEN-4-8" },
  { name: "بین 8 تا 12 میلیون", type: "RIGHT_BETWEEN-8-12" },
  { name: "بین 12 تا 20 میلیون", type: "RIGHT_BETWEEN-12-20" },
  { name: "بالای 20 میلیون تومان", type: "RIGHT_HIGHER-20" },
]

export const filterSaerchForm = {
  search: "search",
  city: "city",
  collection: "collection",
  province: "province",
}

export type TypeFilterAd =
  | "itren"
  | "telecommuting"
  | "disabledPeople"
  | "militaryOrder"
  | "seniority_level"
  | "cooperation_type"
  | "price"

export const filterAd = {
  itren: "itren",
  telecommuting: "telecommuting",
  disabledPeople: "disabledPeople",
  militaryOrder: "militaryOrder",
  seniority_level: "seniority_level",
  cooperation_type: "cooperation_type",
  price: "price",
}
