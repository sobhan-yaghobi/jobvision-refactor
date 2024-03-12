import React from "react"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { TypeMenuItem } from "./Header"

import { ChevronDown } from "lucide-react"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

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
          <li className="h-full group peer center">
            <Link href={item.link}>
              <Button variant={"ghost"}>
                {item.name}
                <ChevronDown className="icon-sm btn-icon-r group-hover:-scale-y-100 transition" />
              </Button>
            </Link>
            <div className="bg-background w-10/12 h-5/6 absolute left-1/2 top-20 translate-x-full group-hover:-translate-x-1/2 overflow-hidden rounded-b-lg z-30 transition duration-500">
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
          <li>
            <Link href={item.link}>
              <Button variant={"ghost"}>{item.name}</Button>
            </Link>
          </li>
        )
      )}
      <div className="h-view w-full center fixed top-20 left-0 z-20 duration-150 transition peer-hover:bg-black/50"></div>
    </ul>
  )
}

type ListProps =
  | { mode: "cities"; array: provinceWithCity[] }
  | { mode: "visitedJobs"; array: categoryWithCollection[] }
const List: React.FC<ListProps> = ({ mode, array }) => {
  return array.length ? (
    <ul className="text-sm bg-white w-full columns-4 absolute top-12 bottom-0 left-0 right-0 cursor-default rounded-b-xl overflow-y-auto">
      {mode === "cities"
        ? array.map((province) => (
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
        : mode === "visitedJobs"
        ? array.map((category) => (
            <Item
              key={`list-item-${category.id}`}
              itemHref={`jobs/category-${category.id}`}
              itemName={category.name}
            >
              {category.category_collection ? (
                <ul className="w-full px-3 cursor-default dana">
                  {category.category_collection.map((collection) => (
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
        : null}
    </ul>
  ) : (
    <h3 className="text-destructive">آیتمی وجود ندازد</h3>
  )
}

type ItemProps = {
  itemHref: string
  itemName: string
}
const Item: React.FC<React.PropsWithChildren<ItemProps>> = ({ itemHref, itemName, children }) => (
  <li className="overflow-hidden max-h-fit p-2">
    <div className="text-jv-lightGray dana-bold w-full h-full flex flex-col px-3 py-1 hover:text-primary ">
      <Link
        href={itemHref}
        className="relative mb-1 after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-primary after:rounded-sm"
      >
        {itemName}
      </Link>
      {children}
    </div>
  </li>
)

export default Navbar
