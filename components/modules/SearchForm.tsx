"use client"
import React, { useRef, useState } from "react"
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
    <div className="w-full flex flex-col gap-3 items-center justify-between lg:flex-row">
      <Input
        wrapperClassName="w-full"
        icon={<Search className="icon" />}
        placeholder="عنوان شغلی یا شرکت..."
      />
      <CategoryInput width="w-full" categories={categories} />
      <ProvinceInput width="w-full" provinces={provinces} />
      <Button className="w-auto">جستجو در مشاغل</Button>
    </div>
  )
}

type ProvinceInputProps = {
  width?: string
  provinces: provinceWithCity[]
}
const ProvinceInput: React.FC<ProvinceInputProps> = ({ provinces, width }) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <div ref={myDivRef} className={`${width ?? "w-[300px]"}`}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-start pl-2"
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
        <PopoverContent
          style={{ width: `${myDivRef.current?.clientWidth}px` }}
          className="px-3 py-2"
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
    </div>
  )
}

type CategoryInputProps = {
  width?: string
  categories: categoryWithCollection[]
}
const CategoryInput: React.FC<CategoryInputProps> = ({ categories, width }) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [collection, setCollection] = useState<category_collection>({} as category_collection)
  return (
    <div ref={myDivRef} className={`${width ?? "w-[300px]"}`}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className={`${width ?? "w-[300px]"} justify-start pl-2`}
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
        <PopoverContent style={{ width: myDivRef.current?.clientWidth }} className="px-3 py-2">
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
    </div>
  )
}

export { SearchForm }
