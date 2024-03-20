"use client"

import React, { useState } from "react"

import { SearchForm, SearchFormProps } from "../modules/SearchForm"
import { Button } from "../modules/ui/button"

interface JobsFillterProps extends SearchFormProps {}

const JobsFillter: React.FC<JobsFillterProps> = ({ categories, provinces, buttonVariant }) => {
  const [tags, setTags] = useState<string[]>([])
  return (
    <div>
      <SearchForm provinces={provinces} categories={categories} buttonVariant={buttonVariant} />
      <ul className="flex mt-4 text-sm gap-3">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <li key={index}>
              <Button variant={"outline"} className="px-2 py-1 border border-solid rounded-sm">
                دورکاری
              </Button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default JobsFillter
