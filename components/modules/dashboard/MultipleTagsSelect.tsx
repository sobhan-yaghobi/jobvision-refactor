import React, { ReactNode, useRef, useState } from "react"
import { cn } from "@/lib/utils"

import { categoryWithCollection } from "@/types/utils.type"
import { category_collections } from "@prisma/client"

import { CheckIcon, Tags, X } from "lucide-react"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { filter } from "lodash"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

type MultipleTagsSelectProps = {
  state: category_collections[]
  setState: React.Dispatch<React.SetStateAction<category_collections[]>>
  categories: categoryWithCollection[]
}

const MultipleTagsSelect: React.FC<MultipleTagsSelectProps> = ({ state, setState, categories }) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div ref={myDivRef} className="w-full h-10">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            role="combobox"
            aria-expanded={isOpen}
            className={`h-full relative flex items-center pr-12 border-2 border-muted rounded-sm cursor-pointer`}
          >
            <Tags className="icon-stroke-light absolute right-3" />
            {state.length ? (
              state.map((item) => (
                <Button
                  onClick={(e) => {
                    e.preventDefault()
                    setState((prev) =>
                      filter(prev, function (prevItem) {
                        return prevItem.id !== item.id
                      })
                    )
                  }}
                  key={item.id}
                  size={"sm"}
                  variant={"fill"}
                  className="h-7 ml-1 group last:ml-0"
                >
                  {item.name}
                  <X className="icon btn-icon-r p-1 rounded-sm group-hover:bg-destructive/50 group-hover:text-destructive-foreground" />
                </Button>
              ))
            ) : (
              <span className="text-muted-foreground text-sm">تگ های شغلی</span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent style={{ width: myDivRef.current?.clientWidth }} className="px-3 py-2">
          <Accordion type="single" collapsible>
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
                          setState((prev) =>
                            prev.some((prevItem) => collect.id === prevItem.id)
                              ? prev.filter((item) => item.id !== collect.id)
                              : [...prev, collect]
                          )
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "icon btn-icon btn-icon-l",
                            state.some((item) => item.id === collect.id)
                              ? "opacity-100"
                              : "opacity-0"
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

export default MultipleTagsSelect
