"use client"
import React from "react"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import useFilterQuery from "@/hook/useFilterQuery"

const RemoveAllFilterButton = () => {
  const { paramsSize, isAnyFilterExsist } = useFilterQuery()
  return isAnyFilterExsist() ? (
    <Button onClick={() => {}} variant={"destructiveOutline"} className="px-2 py-1">
      فیلتر ها
      <span className="ml-2 mr-1">({paramsSize()})</span>
      <X className="bg-destructive stroke-white rounded-sm icon" />
    </Button>
  ) : null
}

export default RemoveAllFilterButton
