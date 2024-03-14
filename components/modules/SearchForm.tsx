"use client"
import React, { useState } from "react"
import { category_collection } from "@prisma/client"

import { Briefcase, CheckIcon, MapPin, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/modules/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/modules/ui/popover"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Input } from "./ui/input"

type SearchFormProps = {
  provinces: provinceWithCity[]
  categories: categoryWithCollection[]
}

const SearchForm: React.FC<SearchFormProps> = ({ provinces, categories }) => {
  return (
    <div className="w-full flex flex-col items-center justify-between md:flex-row">
      {/* className="w-full flex gap-3 justify-around flex-wrap" */}
      <Input
        wrapperClassName="w-[300px]"
        icon={<Search className="icon" />}
        placeholder="عنوان شغلی یا شرکت..."
      />
      <CategoryInput categories={categories} />
      <ProvinceInput provinces={provinces} />
      <Button>جستجو در مشاغل</Button>
    </div>
  )
}

type ProvinceInputProps = {
  provinces: provinceWithCity[]
}
const ProvinceInput: React.FC<ProvinceInputProps> = ({ provinces }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-start pl-2"
        >
          <MapPin className="icon btn-icon-l" />
          {value ? (
            <>
              <span>{value}</span>
              <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                <X
                  onClick={(e) => {
                    e.preventDefault()
                    setValue("")
                  }}
                  className="icon"
                />
              </button>
            </>
          ) : (
            "شهر"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] px-3 py-2">
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
                    setValue(province.name)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "icon btn-icon btn-icon-l",
                      value === "pedaret" ? "opacity-100" : "opacity-0"
                    )}
                  />
                  تمامی شهر های {province.name}
                </div>
                {province.city
                  ? province.city.map((cit) => (
                      <div
                        key={`accordion-city-item-${cit.id}`}
                        className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                        onClick={() => {
                          setValue(cit.name ?? province.name)
                          setOpen(false)
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "icon btn-icon btn-icon-l",
                            value === cit.name ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {cit.name}
                      </div>
                    ))
                  : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PopoverContent>
    </Popover>
  )
}

type CategoryInputProps = {
  categories: categoryWithCollection[]
}
const CategoryInput: React.FC<CategoryInputProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [collection, setCollection] = useState<category_collection>({} as category_collection)
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-[300px] justify-start pl-2"
        >
          <Briefcase className="icon btn-icon-l" />
          {collection.name ? (
            <>
              <span>{collection.name}</span>
              <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                <X
                  onClick={(e) => {
                    e.preventDefault()
                    setCollection({} as category_collection)
                  }}
                  className="icon"
                />
              </button>
            </>
          ) : (
            "گروه شغلی"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] px-3 py-2">
        <Accordion
          defaultValue={`accordion-category-item-${collection.category_id}`}
          type="single"
          collapsible
          className="w-full"
        >
          {categories.map((category) => (
            <AccordionItem
              key={`accordion-category-item-${category.id}`}
              value={`accordion-category-item-${category.id}`}
            >
              <AccordionTrigger className="py-2 hover:no-underline">
                {category.name}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col pb-0">
                {category.category_collection.length ? (
                  category.category_collection.map((collect) => (
                    <div
                      key={`accordion-collection-item-${collect.id}`}
                      className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                      onClick={() => {
                        setCollection(collect)
                        setIsOpen(false)
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "icon btn-icon btn-icon-l",
                          collection.name === collect.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {collect.name}
                    </div>
                  ))
                ) : (
                  <div className="text-destructive my-1 p-2 rounded-sm hover:bg-destructive-foreground">
                    شغلی برای {category.name} یافت نشد
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PopoverContent>
    </Popover>
  )
}

export { SearchForm }
