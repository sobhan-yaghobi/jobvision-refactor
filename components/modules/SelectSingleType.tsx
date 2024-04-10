"use client"

import React, { useEffect, useState } from "react"
import { TypeFilterAd, filterAd } from "@/types/utils.variable"
import { cn } from "@/utils/utils.function"

import useFilterQuery from "@/hook/useFilterQuery"

import { CheckIcon, X } from "lucide-react"

import { Button } from "./ui/button"
import ResponsiveSingleSelect from "./ResponsiveSingleSelect"

type TypeItem = { name: string; type: string }

type SelectSingleTypeProps = {
  placeholder: string
  type: TypeFilterAd
  items: TypeItem[]
}

const SelectSingleType: React.FC<SelectSingleTypeProps> = ({ placeholder, type, items }) => {
  const { searchParams, queryAction, isExsist } = useFilterQuery()
  const [mainType, setMainType] = useState<TypeItem>({} as TypeItem)

  useEffect(() => {
    if (searchParams.get(filterAd[type])) {
      const newMainType = items.find((item) => item.type === searchParams.get(filterAd[type]))
      newMainType ? setMainType(newMainType) : setMainType({} as TypeItem)
    }
  }, [searchParams.get(filterAd[type])])

  return (
    <ResponsiveSingleSelect
      key={mainType.type ?? type}
      contentClassName="!w-80"
      trigger={
        <Button
          className={`px-2 py-1 border border-solid rounded-sm ${
            mainType.type
              ? "bg-primary/30 text-black hover:bg-primary/30"
              : "bg-transparent text-muted-foreground hover:bg-muted"
          }`}
        >
          {mainType.type ? (
            <>
              {mainType.name}
              <X
                onClick={(e) => {
                  e.stopPropagation()
                  queryAction(type, "")
                  setMainType({} as TypeItem)
                }}
                className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
              />
            </>
          ) : (
            placeholder
          )}
        </Button>
      }
    >
      <div>
        {items.map((item) => (
          <div
            key={item.type}
            className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
            onClick={() => {
              queryAction(type, item.type)
              setMainType(item)
            }}
          >
            <CheckIcon
              className={cn(
                "icon btn-icon btn-icon-l",
                isExsist(type, item.name) ? "opacity-100" : "opacity-0"
              )}
            />
            {item.name}
          </div>
        ))}
      </div>
    </ResponsiveSingleSelect>
  )
}

export default SelectSingleType
