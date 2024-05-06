import React from "react"

import { cooperationTypeItems, priceItems, seniorityLevelItems } from "@/utils/utils.variable"

import RemoveAllFilterButton from "../modules/RemoveAllFilterButton"
import SelectSingleType from "../modules/SelectSingleType"
import SearchForm from "../modules/SearchForm"
import SingleType from "../modules/SingleType"

const JobsFillter: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <ul className="w-full flex mt-4 text-sm gap-3 overflow-x-auto">
        <RemoveAllFilterButton />
        <SingleType name="دورکاری" type="itren" />
        <SingleType name="کار آموزی" type="telecommuting" />
        <SingleType name="امکان استخدام افراد معلول" type="disabledPeople" />
        <SingleType name="امریه سربازی" type="militaryOrder" />

        <SelectSingleType placeholder="حقوق" type="price" items={priceItems} />
        <SelectSingleType
          placeholder="سطح ارشدیت"
          type="seniority_level"
          items={seniorityLevelItems}
        />
        <SelectSingleType
          placeholder="نوع همکاری"
          type="cooperation_type"
          items={cooperationTypeItems}
        />
      </ul>
    </div>
  )
}

export default JobsFillter
