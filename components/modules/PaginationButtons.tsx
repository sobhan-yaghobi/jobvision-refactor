"use client"

import React from "react"
import { paginationReturnType } from "@/types/utils.type"

import { useRouter } from "next/navigation"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "./ui/button"

type PaginationButtonsProps = {
  currnetPage: number
  setCurrnetPage: React.Dispatch<React.SetStateAction<number>>
  pagination: paginationReturnType
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currnetPage,
  setCurrnetPage,
  pagination,
}) => {
  return (
    <div className="center gap-1">
      <Button
        disabled={pagination.prev_page === null}
        onClick={() => setCurrnetPage(currnetPage - 1)}
        size={"sm"}
        variant={"outline"}
      >
        <ChevronRight className="icon-sm" />
      </Button>

      {pagination.pageArray.map(
        (item) =>
          item && (
            <Button
              key={item}
              variant={currnetPage === item ? "default" : "outline"}
              onClick={() => setCurrnetPage(item)}
            >
              {item}
            </Button>
          )
      )}
      <span>...</span>

      <Button
        disabled={pagination.next_page === null}
        onClick={() => setCurrnetPage(currnetPage + 1)}
        size={"sm"}
        variant={"outline"}
      >
        <ChevronLeft className="icon-sm" />
      </Button>
    </div>
  )
}

export default PaginationButtons
