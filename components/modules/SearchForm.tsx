"use client"
import React, { useRef, useState } from "react"
import { category_collections } from "@prisma/client"

import { Briefcase, CheckIcon, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/modules/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/modules/ui/popover"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Input } from "./ui/input"
import ProvinceInput, { StateProvinceOrCity } from "./ProvinceInput"

export type SearchFormProps = {
  provinces: provinceWithCity[]
  categories: categoryWithCollection[]
  buttonVariant?: ButtonProps["variant"]
}

const SearchForm: React.FC<SearchFormProps> = ({ provinces, categories, buttonVariant }) => {
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
      <CategoryInput width="w-full" categories={categories} />
      <ProvinceInput
        isAllCity
        state={cityOrProvince}
        setState={setCityOrProvince}
        placeholder="شهر"
        provinces={provinces}
      />
      <Button variant={buttonVariant} className="w-auto">
        جستجو در مشاغل
      </Button>
    </div>
  )
}

type CategoryInputProps = {
  width?: string
  categories: categoryWithCollection[]
}
export const CategoryInput: React.FC<CategoryInputProps> = ({ categories, width }) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [collection, setCollection] = useState<category_collections>({} as category_collections)
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
                      setCollection({} as category_collections)
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
                  {category.category_collections.length ? (
                    category.category_collections.map((collect) => (
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
