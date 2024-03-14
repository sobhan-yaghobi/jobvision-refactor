import { User } from "lucide-react"
import prisma from "@/lib/prisma"

import Navbar from "./Navbar"
import { Button } from "../ui/button"
import Logo from "../Logo"
import Sidebar from "./Sidebar"

export type TypeMenuItem = {
  id: number
  name: string
  link: string
  isMegaMenu: boolean
}
const menuItem: TypeMenuItem[] = [
  { id: 1, name: "فرصت های شغلی", link: "/jobs", isMegaMenu: true },
  { id: 2, name: "رده بندی شرکت ها", link: "/", isMegaMenu: false },
  { id: 3, name: "رزومه ساز", link: "/", isMegaMenu: false },
]

const Header = async () => {
  const category = await prisma.category.findMany({ include: { category_collection: true } })
  const province = await prisma.province.findMany({
    include: {
      city: true,
    },
  })
  return (
    <header className="border-b border-solid border-2 border-muted w-full mb-4 z-50">
      <div className="h-20 flex items-center justify-between container">
        <div className="h-full flex items-center">
          <Sidebar
            menuItem={menuItem}
            category={category}
            province={province}
            className="ml-3 xl:hidden"
          />
          <Logo variants="PrimaryText" className="w-24" />
          <Navbar
            menuItem={menuItem}
            category={category}
            province={province}
            className="h-full hidden mr-6 xl:flex"
          />
        </div>
        <div className="h-full flex items-center">
          <Button className="bg-primary">
            <User className="md:btn-icon-l icon" />
            <span className="hidden md:block">ورود | ثبت نام</span>
          </Button>
          <Button variant={"ghost"} className="hidden relative mr-6 xl:block">
            بخش کارفرمایان
            <span className="bg-secondary-foreground w-[.5px] h-full -right-3 top-0 absolute"></span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
