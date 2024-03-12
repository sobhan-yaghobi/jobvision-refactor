import React from "react"
import { TypeMenuItem } from "./Header"
import { categoryWithCollection, provinceWithCity } from "@/types/utils.type"

import { ChevronLeft, Menu } from "lucide-react"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "./ui/button"

type SidebarProps = {
  menuItem: TypeMenuItem[]
  className?: string
  category: categoryWithCollection[]
  province: provinceWithCity[]
}
const Sidebar: React.FC<SidebarProps> = ({ menuItem, className, category, province }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"fill"} className={className}>
          <Menu className="icon" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-3/4 p-6">
        {menuItem.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-muted"
          >
            <span>{item.name}</span>
            {item.isMegaMenu ? <ChevronLeft className="icon" /> : null}
          </li>
        ))}
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
