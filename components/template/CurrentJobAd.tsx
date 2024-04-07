"use client"

import React, { Fragment, ReactNode, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import useSize from "@/hook/useSize"

import TimeGenerator from "../modules/TimeGenerator"
import { v4 as uuid } from "uuid"
import { getTime } from "@/lib/utils"

import { ad } from "@/types/utils.type"

import { ExternalLink, Heart, Inbox, Speech, Users, X } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../modules/ui/tabs"
import { Drawer, DrawerContent } from "../modules/ui/drawer"
import { Separator } from "../modules/ui/separator"
import { Button } from "../modules/ui/button"
import Company from "./jobs/Company"
import Title from "../modules/Title"
import Info from "./jobs/Info"

type InfoTypes = "INFO_JOB" | "ABOUT_COMPANY" | "RELATED_ADS" | "RESUME_RECRRDS"
export interface TypeItemBox {
  id: string
  title: string
  type: InfoTypes
  component: ReactNode
}

const CurrentJobAd: React.FC = () => {
  const { replace } = useRouter()
  const { width } = useSize()
  const [current, setCurrent] = useState<ad>()
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const fetchAction = async () => {
      const res = await fetch(`/api/ad?id=${id}`)
      const data = await res.json()
      setCurrent(data)
      setIsShow(true)
    }

    if (id?.length) fetchAction()
    else {
      setCurrent(undefined)
      setIsShow(false)
    }
  }, [id])

  const mainItemsBoxInfos: TypeItemBox[] = [
    {
      id: uuid(),
      title: "درباره شغل",
      type: "INFO_JOB",
      component: <Info ad={current ?? ({} as ad)} />,
    },
    {
      id: uuid(),
      title: "درباره شرکت",
      type: "ABOUT_COMPANY",
      component: <Company ad={current ?? ({} as ad)} />,
    },
    {
      id: uuid(),
      title: "سایر آگهی های این شرکت",
      type: "RELATED_ADS",
      component: <div className="morabba">آگهی یافت نشد</div>,
    },
  ]

  const closeAction = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("id")
    replace(`?${params.toString()}`)
    setCurrent(undefined)
    setIsShow(false)
  }

  const Wrapper = width >= 1024 ? Fragment : DrawerContent

  return (
    <>
      {current ? (
        <Drawer open={isShow} onClose={closeAction}>
          <Wrapper className="h-current" touchClassName="bg-muted-foreground mb-3">
            <div className="w-full h-full overflow-y-auto bg-muted px-3 rounded-sm">
              <div>
                <div
                  style={{
                    backgroundImage: "url('/images/company-image.webp')",
                  }}
                  className="bg-[#11111165] bg-blend-multiply w-full h-36 rounded-sm bg-fixed bg-center bg-no-repeat bg-cover"
                ></div>
              </div>
              <div className="bg-muted w-full h-28 flex justify-between sticky top-0 py-3 z-20">
                <div className="w-9/12">
                  <Title>
                    <h3 className="mb-3">{current.name}</h3>
                  </Title>
                </div>
                <div className="w-2/12 flex items-start justify-end">
                  <Button>ارسال رزومه</Button>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col text-sm">
                  <p>{`${current.company.location.city.name} , ${current.company.location.address}`}</p>
                  <div className="mb-2 flex flex-wrap *:text-sm">
                    {current.itern ? (
                      <div className="box-info-type !mr-1 !p-0">امکان جذب کارآموز</div>
                    ) : null}
                    {current.telecommuting ? (
                      <div className="box-info-type !mr-1 !p-0">امکان دورکاری</div>
                    ) : null}
                  </div>
                  <div className="my-2 flex items-start justify-between">
                    <div className="flex flex-col gap-3">
                      <p>
                        {`${current.price.min.toLocaleString("fa-ir")}${
                          current.price.max ? ` - ${current.price.max.toLocaleString("fa-ir")}` : ""
                        } `}
                        تومان
                      </p>
                      <TimeGenerator dateInfo={getTime(current.created_at)} />
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
              <div className="w-full flex items-center justify-start text-sm">
                <div className="w-4/12 flex items-center fill-jv-lightGray2x">
                  <Users className="icon-stroke-light" />
                  <p className="mr-3 truncate">{current.company.organization_employ} نفر</p>
                </div>
                <div className="w-8/12 flex items-center">
                  <Speech className="icon-stroke-light" />
                  <p className="w-10/12 mr-3 truncate">{current.company.slogan}</p>
                </div>
              </div>
              <Tabs
                dir="rtl"
                defaultValue={mainItemsBoxInfos.at(0)?.type}
                className="h-full my-3 p-0 flex flex-col"
              >
                <TabsList variant={"secondary"} className="w-full sticky top-28 z-20">
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
            </div>
          </Wrapper>
        </Drawer>
      ) : (
        <div className="bg-muted h-full w-full center flex-col p-3 rounded-sm">
          <Inbox className="w-52 h-52 stroke-muted-foreground stroke-1" />
          <Title className="w-2/4 text-center text-muted-foreground select-none">
            <h3>جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید</h3>
          </Title>
        </div>
      )}
    </>
  )
}

export default CurrentJobAd
