"use client"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"

import * as React from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type NavigationMenuProps = {
  className?: string
  province: provinceWithCity[]
  category: categoryWithCollection[]
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, province, category }) => (
  <>
    <ul className={cn("flex", className)}>
      <li>
        <Button variant={"ghost"}>فرصت های شغلی</Button>
      </li>
      <li>
        <Button variant={"ghost"}>محصولات</Button>
      </li>
      <li>
        <Link href={"/"}>
          <Button variant={"ghost"}>رده بندی شرکت ها</Button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <Button variant={"ghost"}>رزومه ساز</Button>
        </Link>
      </li>
    </ul>
    <div className="h-view w-full center fixed top-20 left-0 bg-black/50">
      <div className="w-10/12 h-5/6 bg-background absolute top-0 rounded-b-lg overflow-hidden">
        <Tabs dir="rtl" defaultValue="mostVisitedJobs" className="h-full m-0 p-0 flex flex-col">
          <TabsList variant={"secondary"}>
            <TabsTrigger variant={"secondary"} value="mostVisitedJobs">
              پربازدید ترین شغل ها
            </TabsTrigger>
            <TabsTrigger variant={"secondary"} value="cities">
              شهر و استان
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mostVisitedJobs">
            <ListItem mode="visitedJobs" array={category} />
          </TabsContent>
          <TabsContent value="cities">
            <ListItem mode="cities" array={province} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </>
)

type ListItemProps =
  | { mode: "cities"; array: provinceWithCity[] }
  | { mode: "visitedJobs"; array: categoryWithCollection[] }

const ListItem: React.FC<ListItemProps> = ({ mode, array }) => {
  return array.length ? (
    <ul className="text-sm bg-white w-full columns-4 absolute top-12 bottom-0 left-0 right-0 cursor-default rounded-b-xl overflow-y-auto">
      {mode === "cities"
        ? array.map((province) => (
            <li key={`list-item-${province.id}`} className="overflow-hidden max-h-fit p-2">
              <div className="text-jv-lightGray dana-bold w-full h-full flex flex-col px-3 py-1 hover:text-primary ">
                <Link
                  href={`jobs/province-${province.id}`}
                  className="relative mb-1 after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-primary after:rounded-sm"
                >
                  {province.name}
                </Link>
                {province.city ? (
                  <ul className="w-full px-3 cursor-default dana">
                    {province.city.map((cit) => (
                      <li className="w-full flex items-center mt-2 first:mt-0">
                        <Link
                          href={`jobs/city-${cit.id}`}
                          className="text-secondary w-full inline-block hover:text-primary"
                        >
                          {cit.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))
        : mode === "visitedJobs"
        ? array.map((category) => (
            <li key={`list-item-${category.id}`} className="overflow-hidden max-h-fit p-2">
              <div className="text-jv-lightGray dana-bold w-full h-full flex flex-col px-3 py-1 hover:text-primary ">
                <Link
                  href={`jobs/category-${category.id}`}
                  className="relative mb-1 after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-primary after:rounded-sm"
                >
                  {category.name}
                </Link>
                {category.category_collection ? (
                  <ul className="w-full px-3 cursor-default dana">
                    {category.category_collection.map((collection) => (
                      <li className="w-full flex items-center mt-2 first:mt-0">
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
              </div>
            </li>
          ))
        : null}
    </ul>
  ) : (
    <h3 className="text-destructive">آیتمی وجود ندازد</h3>
  )
}

export default NavigationMenu
