"use client"

import React from "react"

import useFilterQuery from "@/hook/useFilterQuery"

import { TypeFilterAd } from "@/utils/utils.variable"

import { X } from "lucide-react"

import { Button } from "./ui/button"

type SingleTypeProps = {
  name: string
  type: TypeFilterAd
}

const SingleType: React.FC<SingleTypeProps> = ({ name, type }) => {
  const { queryAction, isExist } = useFilterQuery()
  return (
    <Button
      key={type}
      onClick={() => queryAction(type, "true")}
      className={`px-2 py-1 border border-solid ${
        isExist(type, "true")
          ? "bg-primary/30 text-black hover:bg-primary/30"
          : "bg-transparent text-muted-foreground hover:bg-muted"
      }`}
    >
      {name}
      {isExist(type, "true") ? (
        <X
          onClick={(e) => {
            e.stopPropagation()
            queryAction(type, "")
          }}
          className="icon btn-icon-r bg-primary stroke-primary-foreground rounded-sm"
        />
      ) : null}
    </Button>
  )
}

export default SingleType
