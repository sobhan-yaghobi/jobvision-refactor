"use client"

import React, { Fragment, ReactNode } from "react"
import { cn } from "@/lib/utils"

import {
  GitPullRequestClosed,
  GitPullRequestArrow,
  FileSpreadsheet,
  GitPullRequest,
  AlarmClock,
  CheckCheck,
  Home,
} from "lucide-react"

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import { Button } from "@/components/modules/ui/button"
import { Card } from "@/components/modules/ui/card"
import Title from "@/components/modules/Title"
import Image from "next/image"

type TypeSidebarItem = {
  label: string
  icon: ReactNode
  href: string
  children?: (TypeSidebarItem & {
    parent_href: TypeSidebarItem["href"]
  })[]
}
const sidebarItems: TypeSidebarItem[] = [
  { label: "خانه", icon: <Home className="icon" />, href: "" },
  { label: "آگهی ها", icon: <FileSpreadsheet className="icon" />, href: "ads" },
  {
    label: "درخواست ها",
    icon: <GitPullRequestArrow className="icon" />,
    href: "requests",
    children: [
      {
        label: "قبول شده ها",
        icon: <CheckCheck className="icon stroke-green-600/90" />,
        href: "request_accept",
        parent_href: "requests",
      },
      {
        label: "رد شده ها",
        icon: <GitPullRequestClosed className="icon stroke-destructive" />,
        href: "request_reject",
        parent_href: "requests",
      },
      {
        label: "در حال انتظار",
        icon: <AlarmClock className="icon stroke-yellow-400/90" />,
        href: "request_waiting",
        parent_href: "requests",
      },
      {
        label: "تمامی درخواست ها",
        icon: <GitPullRequest className="icon stroke-sec" />,
        href: "request_all",
        parent_href: "requests",
      },
    ],
  },
]

const className = {
  item: "flex w-full py-2 px-1 rounded-sm hover:bg-primary/20 cursor-pointer",
  itemActive: "bg-primary/20",
}

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Accordion type="single" collapsible>
        <Title size={"md"} className="text-primary mb-6">
          <h2>جاب ویژن</h2>
        </Title>
        <ul className="flex flex-col gap-3">
          {sidebarItems.map((item) => (
            <Fragment key={item.href}>
              {item.children ? (
                <AccordionItem className="border-none" value={item.href}>
                  <AccordionTrigger className={cn("!no-underline", className.item)}>
                    <div className="flex">
                      <SidebarTitle icon={item.icon} label={item.label} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 mt-3 mr-6">
                    {item.children.map((subItem) => (
                      <div className={className.item}>
                        <SidebarTitle icon={subItem.icon} label={subItem.label} />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div className={className.item}>
                  <SidebarTitle icon={item.icon} label={item.label} />
                </div>
              )}
            </Fragment>
          ))}
        </ul>
      </Accordion>
      <Card className="center flex-col py-2 px-3">
        <Image width={150} height={150} src={"/images/report.webp"} alt="report-image" />
        <Title className="w-auto">
          <h4>گزارش سالانه</h4>
        </Title>
        <p className="text-xs my-2">همین الان از گزارش سالیانه مطلع شوید</p>
        <Button size={"sm"}>دانلود</Button>
      </Card>
    </div>
  )
}

type SidebarTitleProps = {
  icon: TypeSidebarItem["icon"]
  label: TypeSidebarItem["label"]
}
const SidebarTitle: React.FC<SidebarTitleProps> = ({ icon, label }) => {
  return (
    <>
      {icon}
      <p className="mr-3">{label}</p>
    </>
  )
}

export default Sidebar
