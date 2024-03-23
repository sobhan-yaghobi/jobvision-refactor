"use client"
import React, { ReactNode, useCallback } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/modules/ui/tabs"
import { some } from "lodash"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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
      defaultValue={
        defPage && some(pageItems, (item) => item.id === defPage) ? defPage : pageItems[0].id
      }
      className="h-full m-0 p-0 flex flex-col"
    >
      <TabsList className="bg-transparent justify-start px-0">
        {pageItems.map((item) => (
          <TabsTrigger
            key={`${item}-trigger`}
            onClick={() => router.push(`${pathname}?${createQueryString("page", item.id)}`)}
            value={item.id}
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="bg-background h-full p-3">
        {pageItems.map((item) => (
          <TabsContent key={`${item}-content`} value={item.id}>
            {item.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

export default TabsPage
