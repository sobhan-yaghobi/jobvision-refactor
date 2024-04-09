"use client"

import React from "react"
import { cn } from "@/utils/utils.function"
import { lastIndexOf } from "lodash"

import { TypeSidebarItem } from "./Sidebar"

import { usePathname } from "next/navigation"

import Link from "next/link"
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/modules/ui/accordion"

type RouteProps = Omit<TypeSidebarItem, "children">
const Route: React.FC<RouteProps> = ({ href, icon, label }) => {
  const pathName = usePathname()
  const mainRoute = pathName.substring(lastIndexOf(pathName, "/") + 1, pathName.length)
  const route = href === "dashboard" ? `/${href}` : `/dashboard/${href}`

  return (
    <Link
      href={route}
      className={cn(
        `flex items-center py-2 px-1 rounded-sm hover:bg-primary/10 ${
          href === mainRoute ? "bg-primary/10 text-primary" : null
        }`
      )}
    >
      {icon}
      <span className="mr-3">{label}</span>
    </Link>
  )
}

const MultipleItem: React.FC<TypeSidebarItem> = ({ href, icon, label, children }) => {
  return (
    <AccordionItem className="border-none" value={href}>
      <AccordionTrigger className="!no-underline">
        <div className="flex">
          {icon}
          <span className="mr-3">{label}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-1.5 mr-6">
        {children?.map((subitem) => (
          <Route key={subitem.href} {...subitem} />
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

export { Route, MultipleItem }
