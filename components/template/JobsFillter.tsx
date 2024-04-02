"use client"

import React, { useEffect, useRef, useState } from "react"

import SearchForm, { SearchFormProps } from "../modules/SearchForm"
import { Button } from "../modules/ui/button"
import useFilterQuery, { TypePath } from "@/hook/useFilterQuery"
import SingleSelect from "../modules/SingleSelect"
import { TypeSeniorityLevel, seniorityLevelItems } from "@/types/utils.variable"
import { CheckIcon } from "lucide-react"
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
  const { searchParams, queryAction, isExsist, get, deleteParam } = useFilterQuery()
  const enumDatas = useRef({
    seniorityLevel: {} as TypeSeniorityLevel,
  })

  useEffect(() => {
    if (get("seniority_level")) {
      const newSeniorityLevel = find(seniorityLevelItems, function (item) {
        return item.type === get("seniority_level")
      })
      console.log("newSeniorityLevel", newSeniorityLevel)

      typeof newSeniorityLevel !== "undefined"
        ? (enumDatas.current.seniorityLevel = newSeniorityLevel)
        : queryAction("seniority_level", "")
    }
  }, [searchParams])

  return (
    <div>
      <SearchForm provinces={provinces} categories={categories} />
      <ul className="w-full flex mt-4 text-sm gap-3 overflow-x-auto">
        {booleanTypes.map((item) => (
          <Button
            key={item.type}
            onClick={() => queryAction(item.type, isExsist(item.type, "true") ? "" : "true")}
            className={`px-2 py-1 border border-solid rounded-sm ${
              isExsist(item.type, "true")
                ? "bg-primary text-primary-foreground hover:bg-primary/80"
                : "bg-muted text-muted-foreground hover:bg-muted"
            }`}
          >
            {item.name}
          </Button>
        ))}
        <SingleSelect
          className="w-80"
          trigger={
            <Button
              className={`px-2 py-1 border border-solid rounded-sm ${
                get("seniority_level")?.length
                  ? "bg-primary text-primary-foreground hover:bg-primary/80"
                  : "bg-muted text-muted-foreground hover:bg-muted"
              }`}
            >
              {"سطح ارشدیت"}
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
      </ul>
    </div>
  )
}

export default JobsFillter
