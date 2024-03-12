"use client"
import React, { useState } from "react"
import { TypeMenuItem } from "./Header"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"

import { ArrowRight, ChevronLeft, Menu } from "lucide-react"

import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "./ui/button"
import Link from "next/link"
import { Item } from "./Navbar"

type TypePage = {
  currentPage: "list" | "item" | "sub"
  itemPage: "city" | "category" | undefined
}

type TypeBackButton = {
  destination: TypePage["currentPage"]
}

type SidebarProps = {
  menuItem: TypeMenuItem[]
  className?: string
  category: categoryWithCollection[]
  province: provinceWithCity[]
}
const Sidebar: React.FC<SidebarProps> = ({ menuItem, className, category, province }) => {
  const [page, setPage] = useState<TypePage>({ currentPage: "list", itemPage: undefined })

  const BackButton: React.FC<TypeBackButton> = ({ destination }) => (
    <Button
      variant={"default"}
      onClick={() => setPage({ currentPage: destination, itemPage: undefined })}
      className="flex justify-between mb-3"
    >
      <ArrowRight className="icon" />
      بازگشت
    </Button>
  )
  
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"fill"} className={className}>
          <Menu className="icon" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-3/4 px-6">
        {page.currentPage === "list" ? (
          menuItem.map((item) => (
            <li
              onClick={() => setPage((prev) => ({ ...prev, currentPage: "item" }))}
              key={item.id}
              className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-muted"
            >
              <span>{item.name}</span>
              {item.isMegaMenu ? <ChevronLeft className="icon" /> : null}
            </li>
          ))
        ) : page.currentPage === "item" ? (
          <>
            <BackButton destination="list" />
            <ul>
              <li
                onClick={() => setPage({ currentPage: "sub", itemPage: "category" })}
                className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-muted"
                value="mostVisitedJobs"
              >
                <span>پربازدید ترین شغل ها</span>
                <ChevronLeft className="icon" />
              </li>
              <li
                onClick={() => setPage({ currentPage: "sub", itemPage: "city" })}
                className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-muted"
                value="cities"
              >
                <span>شهر و استان</span>
                <ChevronLeft className="icon" />
              </li>
            </ul>
          </>
        ) : page.currentPage === "sub" ? (
          <>
            <BackButton destination="item" />
            <ul>
              {page.itemPage === "category" ? (
                category.map((cat) => (
                  <Item
                    key={`list-item-${cat.id}`}
                    itemHref={`jobs/cat-${cat.id}`}
                    itemName={cat.name}
                  >
                    {cat.category_collection ? (
                      <ul className="w-full px-3 cursor-default dana">
                        {cat.category_collection.map((collection) => (
                          <li
                            key={`collection-item-${collection.id}`}
                            className="w-full flex items-center mt-2 first:mt-0"
                          >
                            <Link
                              href={`jobs/category_collection-${collection.link}`}
                              className="text-secondary w-full inline-block hover:text-primary"
                            >
                              {collection.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Item>
                ))
              ) : page.itemPage === "city" ? (
                province.map((province) => (
                  <Item
                    key={`list-item-${province.id}`}
                    itemHref={`jobs/province-${province.id}`}
                    itemName={province.name}
                  >
                    {province.city ? (
                      <ul className="w-full px-3 cursor-default dana">
                        {province.city.map((cit) => (
                          <li key={cit.id} className="w-full flex items-center mt-2 first:mt-0">
                            <Link
                              href={`jobs/city-${cit.name}`}
                              className="text-secondary w-full inline-block hover:text-primary"
                            >
                              {cit.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Item>
                ))
              ) : (
                <p className="text-destructive">آیتمی یافت نشد</p>
              )}
            </ul>
          </>
        ) : null}
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
