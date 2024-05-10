"use client"

import React, { useEffect } from "react"

import { cn } from "@/utils/utils.function"

import useFilterQuery from "@/hook/useFilterQuery"

import { TypeFilterAd } from "@/utils/utils.variable"

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
  //! ---------- States
  const { searchParams, queryAction } = useFilterQuery()
  const mainType = searchParams.get(type) || ""

  //! ---------- Actions
  const getType = (mainType: string | null): TypeItem =>
    items.find((item) => item.type === mainType) || ({} as TypeItem)
  const isType = (itemType: string | null): boolean =>
    getType(searchParams.get(type) as string).type === itemType

  //! ---------- SideEffect
  useEffect(() => {
    if (mainType) {
      const newMainType = items.find((item) => item.type === searchParams.get(type))
      !newMainType && queryAction(type, "")
    }
  }, [mainType, type, items, queryAction, searchParams])

  return (
    <ResponsiveSingleSelect
      key={getType(searchParams.get(type) as string).type ?? type}
      contentClassName="!w-80 px-2 py-1"
      trigger={
        <Button
          className={`px-2 py-1 border border-solid ${
            isType(searchParams.get(type))
              ? "bg-primary/30 text-black hover:bg-primary/30"
              : "bg-transparent text-muted-foreground hover:bg-muted"
          }`}
        >
          {isType(searchParams.get(type)) ? (
            <>
              {getType(searchParams.get(type) as string).name}
              <X
                onClick={(e) => {
                  e.stopPropagation()
                  queryAction(type, "")
                }}
                className="icon btn-icon-r bg-primary stroke-primary-foreground rounded-sm"
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
            className={`flex my-1 py-2 rounded-md cursor-pointer hover:bg-muted ${
              isType(item.type) && "bg-muted"
            }`}
            onClick={() => {
              queryAction(type, item.type)
            }}
          >
            <CheckIcon
              className={cn(
                "icon btn-icon-l mr-2",
                isType(item.type) ? "opacity-100" : "opacity-0"
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
