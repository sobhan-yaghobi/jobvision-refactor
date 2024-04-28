"use client"

import React, { useEffect, useState } from "react"
import { TypeFilterAd } from "@/types/utils.variable"
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
  const { searchParams, queryAction } = useFilterQuery()

  useEffect(() => {
    if (searchParams.get(type)) {
      const newMainType = items.find((item) => item.type === searchParams.get(type))
      !newMainType && queryAction(type, "")
    }
  }, [searchParams.get(type)])

  const getType = (mainType: string): TypeItem =>
    items.find((item) => item.type === mainType) || ({} as TypeItem)

  return (
    <ResponsiveSingleSelect
      key={getType(searchParams.get(type) as string).type ?? type}
      contentClassName="!w-80"
      trigger={
        <Button
          className={`px-2 py-1 border border-solid rounded-sm ${
            searchParams.get(type)
              ? "bg-primary/30 text-black hover:bg-primary/30"
              : "bg-transparent text-muted-foreground hover:bg-muted"
          }`}
        >
          {getType(searchParams.get(type) as string).type ? (
            <>
              {getType(searchParams.get(type) as string).name}
              <X
                onClick={(e) => {
                  e.stopPropagation()
                  queryAction(type, "")
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
            }}
          >
            <CheckIcon
              className={cn(
                "icon btn-icon btn-icon-l",
                getType(searchParams.get(type) as string).type === item.type
                  ? "opacity-100"
                  : "opacity-0"
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
