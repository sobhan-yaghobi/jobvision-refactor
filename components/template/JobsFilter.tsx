"use client"

import React, { useEffect, useState } from "react"

import SearchForm, { SearchFormProps } from "../modules/SearchForm"
import { Button } from "../modules/ui/button"
import useFilterQuery, { TypePath } from "@/hook/useFilterQuery"
import SingleSelect from "../modules/SingleSelect"
import {
  TypeCooperationType,
  TypePrice,
  TypeSeniorityLevel,
  cooperationTypeItems,
  priceItems,
  seniorityLevelItems,
} from "@/types/utils.variable"
import { CheckIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { find } from "lodash"

interface JobsFillterProps extends SearchFormProps {}

const booleanTypes: { name: string; type: TypePath }[] = [
  { name: "دورکاری", type: "itren" },
  { name: "کار آموزی", type: "telecommuting" },
  { name: "امکان استخدام افراد معلول", type: "disabledPeople" },
  { name: "امریه سربازی", type: "militaryOrder" },
]

const JobsFillter: React.FC<JobsFillterProps> = ({ categories, provinces }) => {
  const { searchParams, queryAction, isExsist, get } = useFilterQuery()
  const [enumDatas, setEnumDatas] = useState({
    seniorityLevel: {} as TypeSeniorityLevel,
    cooperationType: {} as TypeCooperationType,
    price: {} as TypePrice,
  })

  useEffect(() => {
    if (get("seniority_level")) {
      const newSeniorityLevel = find(seniorityLevelItems, function (item) {
        return item.type === get("seniority_level")
      })

      typeof newSeniorityLevel !== "undefined"
        ? setEnumDatas((prev) => ({ ...prev, seniorityLevel: newSeniorityLevel }))
        : queryAction("seniority_level", "")
    }

    if (get("cooperation_type")) {
      const newCooperationType = find(cooperationTypeItems, function (item) {
        return item.type === get("cooperation_type")
      })
      typeof newCooperationType !== "undefined"
        ? setEnumDatas((prev) => ({ ...prev, cooperationType: newCooperationType }))
        : queryAction("cooperation_type", "")
    }

    if (get("price")) {
      const newPrice = find(priceItems, function (item) {
        return item.type === get("price")
      })
      typeof newPrice !== "undefined"
        ? setEnumDatas((prev) => ({ ...prev, price: newPrice }))
        : queryAction("price", "")
    }
  }, [searchParams])

  return (
    <div>
      <SearchForm provinces={provinces} categories={categories} />
      <ul className="w-full flex mt-4 text-sm gap-3 overflow-x-auto">
        {booleanTypes.map((item) => (
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

        <SingleSelect
          contentClassName="!w-80"
          trigger={
            <Button
              className={`px-2 py-1 border border-solid rounded-sm ${
                enumDatas.seniorityLevel.type
                  ? "bg-primary/30 text-black hover:bg-primary/30"
                  : "bg-transparent text-muted-foreground hover:bg-muted"
              }`}
            >
              {enumDatas.seniorityLevel.type ? (
                <>
                  {enumDatas.seniorityLevel.name}
                  <X
                    onClick={(e) => {
                      e.stopPropagation()
                      queryAction("seniority_level", "")
                      setEnumDatas((prev) => ({
                        ...prev,
                        seniorityLevel: {} as TypeSeniorityLevel,
                      }))
                    }}
                    className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
                  />
                </>
              ) : (
                "سطح ارشدیت"
              )}
            </Button>
          }
        >
          <div>
            {seniorityLevelItems.map((item) => (
              <div
                key={item.type}
                className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                onClick={() => queryAction("seniority_level", item.type)}
              >
                <CheckIcon
                  className={cn(
                    "icon btn-icon btn-icon-l",
                    isExsist("seniority_level", item.type) ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.name}
              </div>
            ))}
          </div>
        </SingleSelect>

        <SingleSelect
          contentClassName="!w-80"
          trigger={
            <Button
              className={`px-2 py-1 border border-solid rounded-sm ${
                enumDatas.cooperationType.type
                  ? "bg-primary/30 text-black hover:bg-primary/30"
                  : "bg-transparent text-muted-foreground hover:bg-muted"
              }`}
            >
              {enumDatas.cooperationType.type ? (
                <>
                  {enumDatas.cooperationType.name}
                  <X
                    onClick={(e) => {
                      e.stopPropagation()
                      queryAction("cooperation_type", "")
                      setEnumDatas((prev) => ({
                        ...prev,
                        cooperationType: {} as TypeCooperationType,
                      }))
                    }}
                    className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
                  />
                </>
              ) : (
                "نوع همکاری"
              )}
            </Button>
          }
        >
          <div>
            {cooperationTypeItems.map((item) => (
              <div
                key={item.type}
                className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                onClick={() => queryAction("cooperation_type", item.type)}
              >
                <CheckIcon
                  className={cn(
                    "icon btn-icon btn-icon-l",
                    isExsist("cooperation_type", item.type) ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.name}
              </div>
            ))}
          </div>
        </SingleSelect>

        <SingleSelect
          contentClassName="!w-80"
          trigger={
            <Button
              className={`px-2 py-1 border border-solid rounded-sm ${
                enumDatas.price.type
                  ? "bg-primary/30 text-black hover:bg-primary/30"
                  : "bg-transparent text-muted-foreground hover:bg-muted"
              }`}
            >
              {enumDatas.price.type ? (
                <>
                  {enumDatas.price.name}
                  <X
                    onClick={(e) => {
                      e.stopPropagation()
                      queryAction("price", "")
                      setEnumDatas((prev) => ({
                        ...prev,
                        price: {} as TypePrice,
                      }))
                    }}
                    className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
                  />
                </>
              ) : (
                "حقوق"
              )}
            </Button>
          }
        >
          <div>
            {priceItems.map((item) => (
              <div
                key={item.type}
                className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                onClick={() => queryAction("price", item.type)}
              >
                <CheckIcon
                  className={cn(
                    "icon btn-icon btn-icon-l",
                    isExsist("price", item.type) ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.name}
              </div>
            ))}
          </div>
        </SingleSelect>
      </ul>
    </div>
  )
}

export default JobsFillter
