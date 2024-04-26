"use client"

import React from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { paginationReturnType } from "@/types/utils.type"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "./ui/button"

type PaginationButtonsProps = {
  currentParam: number
  pagination: paginationReturnType
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({ currentParam, pagination }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const clickAction = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)

    if (pagination.pageNum >= pageNumber) {
      params.set("current", pageNumber.toString())
      replace(`?${params.toString()}`)
    }
  }
  return (
    <div className="center gap-1 *:py-0 *:px-4 *:h-10">
      <Button
        disabled={pagination.prev_page === null}
        onClick={() => clickAction(currentParam - 1)}
        size={"sm"}
        variant={"outline"}
      >
        <ChevronRight className="icon-sm" />
      </Button>

      {!Boolean(1 === currentParam - 1 || 1 >= currentParam) && <span className="center">...</span>}

      {pagination.pageArray.map(
        (item) =>
          item && (
            <Button
              key={item}
              variant={currentParam === item ? "default" : "outline"}
              onClick={() => clickAction(item)}
            >
              {item}
            </Button>
          )
      )}

      {!Boolean(pagination.pageNum === currentParam + 1 || pagination.pageNum <= currentParam) && (
        <span className="center">...</span>
      )}

      <Button
        disabled={pagination.next_page === null}
        onClick={() => clickAction(currentParam + 1)}
        size={"sm"}
        variant={"outline"}
      >
        <ChevronLeft className="icon-sm" />
      </Button>
    </div>
  )
}

export default PaginationButtons
