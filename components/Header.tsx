import { Menu, User } from "lucide-react"

import NavigationMenu from "./Navbar"
import { Button } from "./ui/button"
import Logo from "./Logo"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const Header = async () => {
  return (
    <header className="border-b border-solid border-2 border-muted w-full mb-4 z-50">
      <div className="h-20 flex items-center justify-between container">
        <div className="h-full flex">
          <Drawer>
            <DrawerTrigger>
              <Button variant={"fill"} className="ml-3 xl:hidden">
                <Menu className="icon" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Logo width={130} height={130} variants="PrimaryText" className="w-24" />
          <NavigationMenu className="hidden mr-6 xl:flex" />
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
