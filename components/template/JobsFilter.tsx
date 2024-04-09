"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/utils/utils.function"

import useFilterQuery, { TypePath } from "@/hook/useFilterQuery"
import {
  TypeCooperationType,
  TypePrice,
  TypeSeniorityLevel,
  cooperationTypeItems,
  priceItems,
  seniorityLevelItems,
} from "@/types/utils.variable"

import { CheckIcon, X } from "lucide-react"

import SearchForm from "../modules/SearchForm"
import { Button } from "../modules/ui/button"
import ResponsiveSingleSelect from "../modules/ResponsiveSingleSelect"

type TypeEnumDatas = {
  seniorityLevel: TypeSeniorityLevel
  cooperationType: TypeCooperationType
  price: TypePrice
  [key: string]: any
}

type TypeEnumItems = {
  name: string
  placeholder: string
  removeAction: Function
  items: TypeSeniorityLevel[] | TypeCooperationType[] | TypePrice[]
  queryAcion: (type: string) => void
  isCheck: (type: string) => boolean
  value: () => string | null
}

const booleanTypeItems: { name: string; type: TypePath }[] = [
  { name: "دورکاری", type: "itren" },
  { name: "کار آموزی", type: "telecommuting" },
  { name: "امکان استخدام افراد معلول", type: "disabledPeople" },
  { name: "امریه سربازی", type: "militaryOrder" },
]

const JobsFillter: React.FC = () => {
  const { searchParams, queryAction, isExsist, get } = useFilterQuery()
  const [enumDatas, setEnumDatas] = useState<TypeEnumDatas>({
    seniorityLevel: {} as TypeSeniorityLevel,
    cooperationType: {} as TypeCooperationType,
    price: {} as TypePrice,
  })

  const enumTypeItems: TypeEnumItems[] = [
    {
      name: "seniorityLevel",
      placeholder: "سطح ارشدیت",
      removeAction: () => {
        queryAction("seniority_level", "")
        setEnumDatas((prev) => ({
          ...prev,
          seniorityLevel: {} as TypeSeniorityLevel,
        }))
      },
      items: seniorityLevelItems,
      queryAcion: (type) => queryAction("seniority_level", type),
      isCheck: (type) => isExsist("seniority_level", type),
      value: () => get("seniority_level"),
    },
    {
      name: "cooperationType",
      placeholder: "نوع همکاری",
      removeAction: () => {
        queryAction("cooperation_type", "")
        setEnumDatas((prev) => ({
          ...prev,
          cooperationType: {} as TypeCooperationType,
        }))
      },
      items: cooperationTypeItems,
      queryAcion: (type) => queryAction("cooperation_type", type),
      isCheck: (type) => isExsist("cooperation_type", type),
      value: () => get("cooperation_type"),
    },
    {
      name: "price",
      placeholder: "حقوق",
      removeAction: () => {
        queryAction("price", "")
        setEnumDatas((prev) => ({
          ...prev,
          price: {} as TypePrice,
        }))
      },
      items: priceItems,
      queryAcion: (type) => queryAction("price", type),
      isCheck: (type) => isExsist("price", type),
      value: () => get("price"),
    },
  ]

  useEffect(() => {
    enumTypeItems.map((enumType) => {
      if (enumType.value()) {
        const newItems = enumType.items.find((item) => item.type === enumType.value())

        typeof newItems !== "undefined"
          ? setEnumDatas((prev) => ({ ...prev, [enumType.name]: newItems }))
          : enumType.queryAcion("")
      }
    })
  }, [searchParams])

  return (
    <div>
      <SearchForm />
      <ul className="w-full flex mt-4 text-sm gap-3 overflow-x-auto">
        {booleanTypeItems.map((item) => (
          <Button
            key={item.type}
            onClick={() => queryAction(item.type, "true")}
            className={`px-2 py-1 border border-solid rounded-sm ${
              isExsist(item.type, "true")
                ? "bg-primary/30 text-black hover:bg-primary/30"
                : "bg-transparent text-muted-foreground hover:bg-muted"
            }`}
          >
            {item.name}
            {isExsist(item.type, "true") ? (
              <X
                onClick={(e) => {
                  e.stopPropagation()
                  queryAction(item.type, "")
                }}
                className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
              />
            ) : null}
          </Button>
        ))}

        {enumTypeItems.map((enumType) => (
          <ResponsiveSingleSelect
            key={enumDatas[enumType.name].type ?? enumType.name}
            contentClassName="!w-80"
            trigger={
              <Button
                className={`px-2 py-1 border border-solid rounded-sm ${
                  enumDatas[enumType.name].type
                    ? "bg-primary/30 text-black hover:bg-primary/30"
                    : "bg-transparent text-muted-foreground hover:bg-muted"
                }`}
              >
                {enumDatas[enumType.name].type ? (
                  <>
                    {enumDatas[enumType.name].name}
                    <X
                      onClick={(e) => {
                        e.stopPropagation()
                        enumType.removeAction()
                      }}
                      className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
                    />
                  </>
                ) : (
                  enumType.placeholder
                )}
              </Button>
            }
          >
            <div>
              {enumType.items.map((item) => (
                <div
                  key={item.type}
                  className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                  onClick={() => enumType.queryAcion(item.type)}
                >
                  <CheckIcon
                    className={cn(
                      "icon btn-icon btn-icon-l",
                      enumType.isCheck(item.type) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </ResponsiveSingleSelect>
        ))}
      </ul>
    </div>
  )
}

export default JobsFillter
