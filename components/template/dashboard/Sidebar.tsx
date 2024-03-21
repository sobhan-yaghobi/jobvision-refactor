import React, { Fragment, ReactNode } from "react"

import {
  AlarmClock,
  CheckCheck,
  FileSpreadsheet,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestClosed,
  Home,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/modules/ui/accordion"
import Title from "@/components/modules/Title"

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
        icon: <CheckCheck className="icon" />,
        href: "request_accept",
        parent_href: "requests",
      },
      {
        label: "رد شده ها",
        icon: <GitPullRequestClosed className="icon" />,
        href: "request_reject",
        parent_href: "requests",
      },
      {
        label: "در حال انتظار",
        icon: <AlarmClock className="icon" />,
        href: "request_waiting",
        parent_href: "requests",
      },
      {
        label: "تمامی درخواست ها",
        icon: <GitPullRequest className="icon" />,
        href: "request_all",
        parent_href: "requests",
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div>
      <Title size={"md"} className="text-primary mb-6">
        <h2>جاب ویژن</h2>
      </Title>
      <Accordion type="single" collapsible>
        <ul className="flex flex-col gap-3">
          {sidebarItems.map((item) => (
            <Fragment key={item.href}>
              {item.children ? (
                <AccordionItem className="border-none" value={item.href}>
                  <AccordionTrigger className="!no-underline py-0 w-full">
                    <SidebarTitle icon={item.icon} label={item.label} />
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 mt-3 mr-6">
                    {item.children.map((subItem) => (
                      <SidebarTitle icon={subItem.icon} label={subItem.label} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div className="flex">
                  <SidebarTitle icon={item.icon} label={item.label} />
                </div>
              )}
            </Fragment>
          ))}
        </ul>
      </Accordion>
    </div>
  )
}

type SidebarTitleProps = {
  icon: TypeSidebarItem["icon"]
  label: TypeSidebarItem["label"]
}
const SidebarTitle: React.FC<SidebarTitleProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center">
      {icon}
      <p className="mr-3">{label}</p>
    </div>
  )
}

export default Sidebar
