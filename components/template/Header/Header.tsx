import prisma from "@/lib/prisma"

import Navbar from "./Navbar"
import { Button } from "../../modules/ui/button"
import Sidebar from "./Sidebar"
import Title from "../../modules/Title"
import Link from "next/link"
import UserDropDown from "./UserDropDown"

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
  const category = await prisma.category.findMany({ include: { category_collections: true } })
  const province = await prisma.province.findMany({
    include: {
      cities: true,
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
          <Link href={"/"}>
            <Title size={"md"} className="text-primary">
              <h2>جاب ویژن</h2>
            </Title>
          </Link>
          <Navbar
            menuItem={menuItem}
            category={category}
            province={province}
            className="h-full hidden mr-6 xl:flex"
          />
        </div>
        <div className="h-full flex items-center">
          <UserDropDown />
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
