import React, { Fragment, ReactNode } from "react"

import {
  GitPullRequestClosed,
  GitPullRequestArrow,
  FileSpreadsheet,
  GitPullRequest,
  AlarmClock,
  CheckCheck,
  Home,
} from "lucide-react"

import { Route, MultipleItem } from "./Item"
import { Accordion } from "@/components/modules/ui/accordion"
import { Button } from "@/components/modules/ui/button"
import { Card } from "@/components/modules/ui/card"
import Title from "@/components/modules/Title"
import Image from "next/image"
import Link from "next/link"
import { TypeSidebarItem } from "@/types/utils.type"

const sidebarItems: TypeSidebarItem[] = [
  { label: "خانه", icon: <Home className="icon" />, href: "dashboard" },
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

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between relative overflow-y-auto hidden-scrollbar">
      <Accordion type="single" collapsible>
        <Link href={"/"} className="sticky top-0">
          <Title size={"md"} className="bg-background text-primary pb-2 mb-4">
            <h2>جاب ویژن</h2>
          </Title>
        </Link>
        <ul className="flex flex-col gap-1.5">
          {sidebarItems.map((item) => (
            <Fragment key={item.href}>
              {item.children ? <MultipleItem {...item} /> : <Route {...item} />}
            </Fragment>
          ))}
        </ul>
      </Accordion>
      <Card className="center flex-col py-2 px-3">
        <Image
          width={150}
          height={150}
          priority
          className="w-36 h-36"
          src={"/images/report.webp"}
          alt="report-image"
        />
        <Title className="w-auto">
          <h4>گزارش سالانه</h4>
        </Title>
        <p className="text-xs my-2">همین الان از گزارش سالیانه مطلع شوید</p>
        <Button size={"sm"}>دانلود</Button>
      </Card>
    </div>
  )
}

export default Sidebar
