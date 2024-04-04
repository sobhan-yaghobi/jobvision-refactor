"use client"
import { v4 as uuid } from "uuid"
import { ad } from "@/types/utils.type"
import { useSearchParams } from "next/navigation"
import React, { ReactNode, useEffect, useState } from "react"
import Title from "../modules/Title"
import { ExternalLink, Heart, Inbox, Speech, Users } from "lucide-react"
import { Button } from "../modules/ui/button"
import Link from "next/link"
import { Separator } from "../modules/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../modules/ui/tabs"
import Info from "./jobs/Info"

type InfoTypes = "INFO_JOB" | "ABOUT_COMPANY" | "RELATED_ADS" | "RESUME_RECRRDS"
export interface TypeItemBox {
  id: string
  title: string
  type: InfoTypes
  component: ReactNode
}

const CurrentJobAd: React.FC = () => {
  const [current, setCurrent] = useState<ad>()
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch(`/api/ad?id=${id}`)
      const data = await res.json()
      setCurrent(data)
    }

    fetchAction()
  }, [id])

  const mainItemsBoxInfos: TypeItemBox[] = [
    {
      id: uuid(),
      title: "درباره شغل",
      type: "INFO_JOB",
      component: <Info ad={current ?? ({} as ad)} />,
    },
    { id: uuid(), title: "درباره شرکت", type: "ABOUT_COMPANY", component: <>درباره شرکت</> },
    {
      id: uuid(),
      title: "سایر آگهی های این شرکت",
      type: "RELATED_ADS",
      component: <></>,
    },
  ]

  return (
    <div className="w-full bg-muted p-3 rounded-sm">
      {current ? (
        <>
          <div>
            <div
              style={{
                backgroundImage: "url('/images/company-image.webp')",
              }}
              className="bg-[#11111165] bg-blend-multiply w-full h-36 rounded-sm bg-fixed bg-center bg-no-repeat bg-cover"
            ></div>
          </div>
          <div className="bg-muted w-full h-28 flex justify-between sticky top-0 py-3 z-40">
            <div className="w-9/12">
              <Title>
                <h3 className="mb-3">{current.name}</h3>
              </Title>
              <Link className="text-jv-primary truncate" href="/">
                {/* {current.name} */}
              </Link>
            </div>
            <div className="w-2/12 flex items-start justify-end">
              <Button>ارسال رزومه</Button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col w-full">
              <p className="text-sm">{}</p>
              <div className="mb-2 flex flex-wrap">
                <div className="box-info-type !mr-1 !p-0">امکان جذب کارآموز</div>
                <div className="box-info-type !mr-1 !p-0">امکان دورکاری</div>
              </div>
              <div className="my-2 flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-jv-lightGray2x">57 روز پیش / 8 - 6 میلیون تومان</p>
                  <Button variant={"outline"}>مشاهده حقوق دریافتی افراد در مشاغل مشابه</Button>
                </div>
                <div className="flex text-2xl text-jv-primary">
                  <ExternalLink className="icon-stroke-light btn-icon-l" />
                  <Heart className="icon-stroke-light" />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-3" />
          <div className="w-full flex items-center justify-start">
            <div className="w-4/12 flex items-center text-jv-lightGray fill-jv-lightGray2x">
              <Users className="icon-stroke-light" />
              <p className="mr-3 truncate">{} نفر</p>
            </div>
            <div className="w-8/12 flex items-center text-jv-lightGray">
              <Speech className="icon-stroke-light" />
              <p className="mr-3 truncate w-10/12">{}</p>
            </div>
          </div>
          <Tabs
            dir="rtl"
            defaultValue={mainItemsBoxInfos.at(0)?.type}
            className="h-full my-3 p-0 flex flex-col"
          >
            <TabsList variant={"secondary"} className="w-full sticky top-28 z-40">
              {mainItemsBoxInfos.map((item) => (
                <TabsTrigger
                  className="p-5"
                  key={`trigger-${item.type}`}
                  variant={"secondary"}
                  value={item.type}
                >
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="bg-background p-3">
              {mainItemsBoxInfos.map((item) => (
                <TabsContent className="h-full" key={`content-${item.type}`} value={item.type}>
                  {item.component}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </>
      ) : (
        <div className="h-full center flex-col">
          <Inbox className="w-52 h-52 stroke-muted-foreground stroke-1" />
          <Title className="w-2/4 text-center text-muted-foreground select-none">
            <h3>جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید</h3>
          </Title>
        </div>
      )}
    </div>
  )
}

export default CurrentJobAd
