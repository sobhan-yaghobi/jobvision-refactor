"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { Menu, Rocket } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/modules/ui/sheet"
import QuickAccess from "./QuickAccess"
import Sidebar from "./Sidebar/Sidebar"
import { Button } from "@/components/modules/ui/button"
import Title from "@/components/modules/Title"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false)
  const [isQuick, setIsQuick] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    closeSheet()

    return () => {
      closeSheet()
    }
  }, [pathname])

  const closeSheet = () => {
    setIsMenu(false)
    setIsQuick(false)
  }
  return (
    <div className="flex items-center justify-between relative p-3 shadow-lg z-20">
      <Sheet open={isMenu} onOpenChange={setIsMenu}>
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
      <Sheet open={isQuick} onOpenChange={setIsQuick}>
        <SheetTrigger asChild>
          <Button title="دسترسی سریع" size={"sm"} variant={"fill"}>
            <Rocket className="icon" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <QuickAccess />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar
