"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/utils/utils.function"
import { menuItem } from "@/utils/utils.variable"

import { usePathname, useSearchParams } from "next/navigation"

import { CategoryWithCollection, provinceWithCity } from "@/types/utils.type"

import { ChevronDown } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../modules/ui/tabs"
import { CategoryItem, ProvinceItem } from "./Item"
import { Button } from "../../modules/ui/button"
import Link from "next/link"

type NavbarProps = {
  className?: string
  category: CategoryWithCollection[]
  province: provinceWithCity[]
}

const Navbar: React.FC<NavbarProps> = ({ className, category, province }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isMegaMenu, setIsMegaMenu] = useState(false)
  useEffect(() => {
    setIsMegaMenu(false)

    return () => {
      setIsMegaMenu(false)
    }
  }, [pathname, searchParams])

  return (
    <ul className={cn("flex items-center", className)}>
      {menuItem.map((item) =>
        item.isMegaMenu ? (
          <li
            key={`navbar-list-item-${item.id}`}
            onMouseEnter={() => setIsMegaMenu(true)}
            onMouseLeave={() => setIsMegaMenu(false)}
            className="h-full center"
          >
            <Link href={item.link}>
              <Button variant={"ghost"}>
                {item.name}
                <ChevronDown className="icon-sm btn-icon-r group-hover:-scale-y-100 transition" />
              </Button>
            </Link>
            <div
              className={`bg-background w-10/12 h-5/6 absolute left-1/2 -translate-x-1/2 rounded-b-lg overflow-hidden  transition duration-500 ${
                isMegaMenu ? "top-20 z-40 opacity-100" : "-z-10 opacity-0"
              }`}
            >
              <Tabs
                dir="rtl"
                defaultValue="mostVisitedJobs"
                className="h-full flex flex-col m-0 p-0"
              >
                <TabsList variant={"secondary"}>
                  <TabsTrigger variant={"secondary"} value="mostVisitedJobs">
                    پربازدید ترین شغل ها
                  </TabsTrigger>
                  <TabsTrigger variant={"secondary"} value="cities">
                    شهر و استان
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="mostVisitedJobs">
                  <List mode="visitedJobs" array={category} />
                </TabsContent>
                <TabsContent value="cities">
                  <List mode="cities" array={province} />
                </TabsContent>
              </Tabs>
            </div>
          </li>
        ) : (
          <li key={`navbar-list-item-${item.id}`}>
            <Link href={item.link}>
              <Button variant={"ghost"}>{item.name}</Button>
            </Link>
          </li>
        )
      )}
      <div
        className={`h-view w-full center fixed top-20 left-0 z-30 duration-150 transition ${
          isMegaMenu ? "visible opacity-100 bg-black/50" : "opacity-0 invisible"
        }`}
      ></div>
    </ul>
  )
}

//! ---------- Component Of Navbar
type ListProps =
  | { mode: "cities"; array: provinceWithCity[] }
  | { mode: "visitedJobs"; array: CategoryWithCollection[] }

export const List: React.FC<ListProps> = ({ mode, array }) => {
  return array.length ? (
    <ul className="bg-white text-sm w-full columns-4 absolute top-12 bottom-0 left-0 right-0 rounded-b-xl cursor-default overflow-y-auto">
      {mode === "cities"
        ? array.map((province) => (
            <ProvinceItem key={`list-item-${province.id}`} province={province} />
          ))
        : mode === "visitedJobs"
        ? array.map((category) => (
            <CategoryItem key={`list-item-navbar-${category.id}`} category={category} />
          ))
        : null}
    </ul>
  ) : (
    <h3 className="text-destructive">آیتمی وجود ندازد</h3>
  )
}

export default Navbar
