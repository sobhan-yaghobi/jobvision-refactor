import React from "react"
import { TypeFilterAd } from "@/types/utils.variable"
import useFilterQuery from "@/hook/useFilterQuery"

import { X } from "lucide-react"

import { Button } from "./ui/button"

type SingleTypeProps = {
  name: string
  type: TypeFilterAd
}

const SingleType: React.FC<SingleTypeProps> = ({ name, type }) => {
  const { queryAction, isExsist } = useFilterQuery()
  return (
    <Button
      key={type}
      onClick={() => queryAction(type, "true")}
      className={`px-2 py-1 border border-solid rounded-sm ${
        isExsist(type, "true")
          ? "bg-primary/30 text-black hover:bg-primary/30"
          : "bg-transparent text-muted-foreground hover:bg-muted"
      }`}
    >
      {name}
      {isExsist(type, "true") ? (
        <X
          onClick={(e) => {
            e.stopPropagation()
            queryAction(type, "")
          }}
          className="bg-primary stroke-primary-foreground icon btn-icon-r rounded-sm"
        />
      ) : null}
    </Button>
  )
}

export default SingleType
