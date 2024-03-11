"use client"

import * as React from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type NavigationMenuProps = {
  className?: string
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => (
  <>
    <ul className={cn("flex", className)}>
      <li>
        <Button variant={"ghost"}>فرصت های شغلی</Button>
      </li>
      <li>
        <Button variant={"ghost"}>محصولات</Button>
      </li>
      <li>
        <Link href={"/"}>
          <Button variant={"ghost"}>رده بندی شرکت ها</Button>
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <Button variant={"ghost"}>رزومه ساز</Button>
        </Link>
      </li>
    </ul>
    <div className="h-view w-full center fixed top-20 left-0 bg-black/50">
      <div className="w-10/12 h-5/6 bg-background absolute top-0 rounded-b-lg overflow-hidden">
        <Tabs dir="rtl" defaultValue="mostVisitedJobs" className="h-full m-0 p-0">
          <TabsList className="w-full h-10 justify-start p-0 pt-2 rounded-none">
            <TabsTrigger className="h-full !shadow-none rounded-none" value="mostVisitedJobs">
              پربازدید ترین شغل ها
            </TabsTrigger>
            <TabsTrigger className="h-full !shadow-none rounded-none" value="cities">
              شهر و استان
            </TabsTrigger>
            <TabsTrigger className="h-full !shadow-none rounded-none" value="cooperation">
              نوع هکاری
            </TabsTrigger>
          </TabsList>
          <div>
            <TabsContent
              value="mostVisitedJobs"
              className="w-full h-full p-1 text-sm bg-white columns-4 absolute top-12 bottom-0 left-0 right-0 cursor-default list-none"
            >
              <li className="overflow-hidden max-w-max h-max max-h-max m-1">
                <div className="text-jv-lightGray dana-bold w-full h-full flex flex-col px-3 py-1 hover:text-jv-primary ">
                  <span className="relative mb-1 after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-jv-primary after:rounded-sm">
                    برنامه نویسی و توسعه نرم افزار
                  </span>
                  <ul className="w-full px-3 cursor-default hiiden">
                    <li className="w-full flex items-center mt-2 first:mt-0">
                      <span className="text-jv-gray w-full inline-block hover:text-jv-primary">
                        برنامه نویس فرانت اند
                      </span>
                    </li>
                    <li className="w-full flex items-center mt-2 first:mt-0">
                      <span className="text-jv-gray w-full inline-block hover:text-jv-primary">
                        برنامه نویس بک اند
                      </span>
                    </li>
                    <li className="w-full flex items-center mt-2 first:mt-0">
                      <span className="text-jv-gray w-full inline-block hover:text-jv-primary">
                        برنامه نویس موبایل
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </TabsContent>
            <TabsContent value="cities" className="h-full m-0">
              شهر ها
            </TabsContent>
            <TabsContent value="cooperation" className="h-full m-0">
              نوع همکاری
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  </>
)

export default NavigationMenu
