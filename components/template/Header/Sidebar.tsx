"use client"
import React, { useEffect, useState } from "react"
import { menuItem } from "@/utils/utils.variable"

import { CategoryWithCollection, provinceWithCity } from "@/types/utils.type"

import { ChevronLeft, ChevronRight, Menu } from "lucide-react"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/modules/ui/drawer"
import { Button } from "../../modules/ui/button"
import { CategoryItem, ProvinceItem } from "./Item"
import { usePathname, useSearchParams } from "next/navigation"

type TypePage = {
  currentPage: "list" | "item" | "sub"
  itemPage: "city" | "category" | undefined
}

type TypeBackButton = {
  destination: TypePage["currentPage"]
}

type SidebarProps = {
  className?: string
  category: CategoryWithCollection[]
  province: provinceWithCity[]
}

const Sidebar: React.FC<SidebarProps> = ({ className, category, province }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState<TypePage>({ currentPage: "list", itemPage: undefined })
  const BackButton: React.FC<TypeBackButton> = ({ destination }) => (
    <Button
      variant={"default"}
      onClick={() => setPage({ currentPage: destination, itemPage: undefined })}
      className="flex justify-between mb-3"
    >
      بازگشت
      <ChevronRight className="icon" />
    </Button>
  )

  useEffect(() => {
    setIsOpen(false)

    return () => {
      setIsOpen(false)
    }
  }, [pathname, searchParams])

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant={"fill"} className={className}>
          <Menu className="icon" />
        </Button>
      </DrawerTrigger>
      <DrawerContent touchClassName="mb-3" className="h-3/4 px-6">
        {page.currentPage === "list" ? (
          menuItem.map((item) => (
            <div
              onClick={() =>
                item.isMegaMenu && setPage((prev) => ({ ...prev, currentPage: "item" }))
              }
              key={item.id}
              className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-muted"
            >
              <span>{item.name}</span>
              {item.isMegaMenu ? <ChevronLeft className="icon" /> : null}
            </div>
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
            <ul className="overflow-y-auto">
              {page.itemPage === "category" ? (
                category.map((category) => (
                  <CategoryItem key={`list-item-sidebar-${category.id}`} category={category} />
                ))
              ) : page.itemPage === "city" ? (
                province.map((province) => (
                  <ProvinceItem key={`list-item-sidebar-${province.id}`} province={province} />
                ))
              ) : (
                <li className="text-destructive">آیتمی یافت نشد</li>
              )}
            </ul>
          </>
        ) : null}
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
