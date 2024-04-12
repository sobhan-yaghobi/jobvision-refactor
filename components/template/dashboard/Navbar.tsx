import Title from "@/components/modules/Title"
import { Button } from "@/components/modules/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/modules/ui/drawer"
import { Menu, Rocket } from "lucide-react"
import Link from "next/link"
import React from "react"
import QuickAccess from "./QuickAccess"
import { companyWithLocation } from "@/types/utils.type"
import { Sheet, SheetContent, SheetTrigger } from "@/components/modules/ui/sheet"
import Sidebar from "./Sidebar/Sidebar"

type NavbarProps = {
  company: companyWithLocation | null
}

const Navbar: React.FC<NavbarProps> = ({ company }) => {
  return (
    <div className="flex items-center justify-between p-3 shadow-lg relative z-20">
      <Sheet>
        <SheetTrigger asChild>
          <Button title="منو" size={"sm"} variant={"fill"}>
            <Menu className="icon" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <Sidebar />
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <Title size={"md"} className="text-primary w-auto">
          <h2>جاب ویژن</h2>
        </Title>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button title="دسترسی سریع" size={"sm"} variant={"fill"}>
            <Rocket className="icon" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <QuickAccess company={company} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar
