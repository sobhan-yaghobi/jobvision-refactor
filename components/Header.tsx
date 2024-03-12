import { LogIn } from "lucide-react"

import NavigationMenu from "./Navbar"
import { Button } from "./ui/button"
import Logo from "./Logo"

const Header = async () => {
  return (
    <header className="border-b border-solid border-2 border-muted w-full mb-4 z-50">
      <div className="h-20 flex items-center justify-between container">
        <div className="h-full flex">
          <Logo width={130} height={130} variants="PrimaryText" />
          <NavigationMenu className="mr-6" />
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
