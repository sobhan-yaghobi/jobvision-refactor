"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

import { category_collections, cities, provinces } from "@prisma/client"

import { Briefcase, CheckIcon, MapPin, Search, X } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { Button, ButtonProps } from "@/components/modules/ui/button"
import SingleSelect from "./SingleSelect"
import { Input } from "./ui/input"

export type SearchFormProps = {
  provinces: provinceWithCity[]
  categories: categoryWithCollection[]
  buttonVariant?: ButtonProps["variant"]
}
type StateProvinceOrCity =
  | { mode: "Province"; province: provinces }
  | { mode: "City"; city: cities }

const SearchForm: React.FC<SearchFormProps> = ({ provinces, categories, buttonVariant }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isprovinceOpen, setIsProvinceOpen] = useState(false)

  const [collection, setCollection] = useState<category_collections>({} as category_collections)
  const [cityOrProvince, setCityOrProvince] = useState<StateProvinceOrCity>(
    {} as StateProvinceOrCity
  )
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-between lg:flex-row">
      <Input
        wrapperClassName="w-full"
        icon={<Search className="icon" />}
        placeholder="عنوان شغلی یا شرکت..."
      />

      <SingleSelect
        isOpen={isCategoryOpen}
        setIsOpen={setIsCategoryOpen}
        className="w-full"
        trigger={
          <div
            className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <div className="absolute right-3 center">
              <Briefcase className="icon" />
            </div>
            {collection.id ? (
              <>
                <span className="text-sm">{collection.name}</span>
                <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                  <X
                    onClick={(e) => {
                      e.preventDefault()
                      setCollection({} as category_collections)
                    }}
                    className="icon"
                  />
                </button>
              </>
            ) : (
              <p className="text-muted-foreground text-sm">گروه شغلی</p>
            )}
          </div>
        }
      >
        <Accordion type="single" collapsible className="w-full">
          {categories.map((cateogry) => (
            <AccordionItem
              key={`accordion-cateogry-item-${cateogry.id}`}
              value={`accordion-cateogry-item-${cateogry.id}`}
            >
              <AccordionTrigger className="py-2 hover:no-underline">
                {cateogry.name}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                {cateogry.category_collections.length ? (
                  cateogry.category_collections.map((collect) => (
                    <div
                      key={`accordion-collection-item-${collect.id}`}
                      className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                      onClick={() => {
                        setCollection(collect)
                        setIsCategoryOpen(false)
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "icon btn-icon btn-icon-l",
                          collection.id === collect.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {collect.name}
                    </div>
                  ))
                ) : (
                  <p className="text-destructive my-1 p-2 rounded-sm hover:bg-destructive-foreground">
                    شغلی برای {cateogry.name} یافت نشد
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SingleSelect>

      <SingleSelect
        isOpen={isprovinceOpen}
        setIsOpen={setIsProvinceOpen}
        className="w-full"
        trigger={
          <div
            className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <div className="absolute right-3 center">
              <MapPin className="icon" />
            </div>
            {cityOrProvince.mode ? (
              <>
                <span className="text-sm">
                  {cityOrProvince.mode === "City"
                    ? cityOrProvince.city.name
                    : cityOrProvince.province.name}
                </span>
                <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                  <X
                    onClick={(e) => {
                      e.preventDefault()
                      setCityOrProvince({} as StateProvinceOrCity)
                    }}
                    className="icon"
                  />
                </button>
              </>
            ) : (
              <p className="text-muted-foreground text-sm">شهر</p>
            )}
          </div>
        }
      >
        <Accordion type="single" collapsible className="w-full">
          {provinces.map((province) => (
            <AccordionItem
              key={`accordion-province-item-${province.id}`}
              value={`accordion-province-item-${province.id}`}
            >
              <AccordionTrigger className="py-2 hover:no-underline">
                {province.name}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col">
                <div
                  className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                  onClick={() => {
                    setCityOrProvince({ mode: "Province", province })
                    setIsProvinceOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "icon btn-icon btn-icon-l",
                      cityOrProvince.mode === "Province" &&
                        cityOrProvince.province.id === province.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  تمامی شهر های {province.name}
                </div>
                {province.cities
                  ? province.cities.map((city) => (
                      <div
                        key={`accordion-city-item-${city.id}`}
                        className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                        onClick={() => {
                          setCityOrProvince({ mode: "City", city })
                          setIsProvinceOpen(false)
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "icon btn-icon btn-icon-l",
                            cityOrProvince.mode === "City" && cityOrProvince.city.id === city.id
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {city.name}
                      </div>
                    ))
                  : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SingleSelect>
      <Button variant={buttonVariant} className="w-auto">
        جستجو در مشاغل
      </Button>
    </div>
  )
}

export default SearchForm
