"use client"

import React, { ReactNode, useCallback } from "react"
import { some } from "lodash"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/modules/ui/tabs"

export type TypePage = { id: string; name: string; content: ReactNode }

export type TabsPageProps = {
  pageItems: TypePage[]
}

const TabsPage: React.FC<TabsPageProps> = ({ pageItems }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const defPage = searchParams.get("page")
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <Tabs
      dir="rtl"
      key={defPage}
      defaultValue={
        defPage && some(pageItems, (item) => item.id === defPage) ? defPage : pageItems[0].id
      }
      className="h-full flex flex-col m-0 p-0"
    >
      <TabsList className="bg-transparent justify-start px-0">
        {pageItems.map((item) => (
          <TabsTrigger
            key={`${item.id}-trigger`}
            onClick={() => router.push(`${pathname}?${createQueryString("page", item.id)}`)}
            value={item.id}
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="bg-background h-full p-3">
        {pageItems.map((item) => (
          <TabsContent key={`${item.id}-content`} value={item.id}>
            {item.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

export default TabsPage
