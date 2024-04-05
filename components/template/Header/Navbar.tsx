import React from "react"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { TypeMenuItem } from "./Header"

import { ChevronDown } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../modules/ui/tabs"
import { CategoryItem, ProvinceItem } from "./Item"
import { Button } from "../../modules/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

type NavbarProps = {
  menuItem: TypeMenuItem[]
  className?: string
  category: categoryWithCollection[]
  province: provinceWithCity[]
}
const Navbar: React.FC<NavbarProps> = async ({ menuItem, className, category, province }) => {
  return (
    <ul className={cn("flex items-center", className)}>
      {menuItem.map((item) =>
        item.isMegaMenu ? (
          <li key={`navbar-list-item-${item.id}`} className="h-full group peer center">
            <Link href={item.link}>
              <Button variant={"ghost"}>
                {item.name}
                <ChevronDown className="icon-sm btn-icon-r group-hover:-scale-y-100 transition" />
              </Button>
            </Link>
            <div className="bg-background w-10/12 h-5/6 absolute left-1/2 top-20 translate-x-full group-hover:-translate-x-1/2 overflow-hidden rounded-b-lg z-40 transition duration-500">
              <Tabs
                dir="rtl"
                defaultValue="mostVisitedJobs"
                className="h-full m-0 p-0 flex flex-col"
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
      <div className="h-view w-full center fixed top-20 left-0 z-30 opacity-0 invisible duration-150 transition peer-hover:visible peer-hover:opacity-100 peer-hover:bg-black/50"></div>
    </ul>
  )
}

type ListProps =
  | { mode: "cities"; array: provinceWithCity[] }
  | { mode: "visitedJobs"; array: categoryWithCollection[] }
export const List: React.FC<ListProps> = ({ mode, array }) => {
  return array.length ? (
    <ul className="text-sm bg-white w-full columns-4 absolute top-12 bottom-0 left-0 right-0 cursor-default rounded-b-xl overflow-y-auto">
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
