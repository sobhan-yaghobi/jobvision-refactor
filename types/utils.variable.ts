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

export const cooperationTypeItems: { type: cooperation_type; name: string }[] = [
  { name: "تمام وقت", type: "FULL_TIME" },
  { name: "پاره وقت", type: "PART_TIME" },
  { name: "قراردادی", type: "CONTRACT" },
]
