"use client"
import React from "react"

import useFilterQuery from "@/hook/useFilterQuery"

import { X } from "lucide-react"

import { Button } from "./ui/button"

const RemoveAllFilterButton = () => {
  const { paramsSize, removeAllAction } = useFilterQuery()

  return paramsSize() ? (
    <Button onClick={removeAllAction} variant={"destructiveOutline"} className="px-2 py-1">
      فیلتر ها
      <span className="ml-2 mr-1">({paramsSize()})</span>
      <X className="bg-destructive stroke-white rounded-sm icon" />
    </Button>
  ) : null
}

export default RemoveAllFilterButton
