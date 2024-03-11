import { LogIn } from "lucide-react"

import prisma from "@/lib/prisma"
import NavigationMenu from "./NavigationMenu"
import { Button } from "./ui/button"
import Logo from "./Logo"

const Header = async () => {
  const province = await prisma.province.findMany({
    include: {
      city: true,
    },
  })
  const category = await prisma.category.findMany({ include: { category_collection: true } })
  return (
    <header className="border-b border-solid border-2 border-muted w-full mb-4 z-50">
      <div className="h-20 flex items-center justify-between container">
        <div className="flex">
          <Logo width={130} height={130} variants="PrimaryText" />
          <NavigationMenu province={province} category={category} className="mr-6" />
        </div>
        <div className="h-full flex items-center">
          <Button className="bg-primary">
            <LogIn className="btn-icon-l icon" />
            ورود | ثبت نام
          </Button>
          <Button variant={"ghost"} className="relative mr-6">
            بخش کارفرمایان
            <span className="bg-secondary-foreground w-[.5px] h-full -right-3 top-0 absolute"></span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
