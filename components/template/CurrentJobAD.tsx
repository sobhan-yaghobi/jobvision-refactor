"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

import { useRouter, useSearchParams } from "next/navigation"
import useSize from "@/hook/useSize"

import { AD } from "@/types/utils.type"

import { ExternalLink, Heart, Inbox, Speech, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../modules/ui/tabs"
import { Drawer, DrawerContent } from "../modules/ui/drawer"
import { Separator } from "../modules/ui/separator"
import { Button } from "../modules/ui/button"
import Company from "./jobs/Company"
import Title from "../modules/Title"
import Info from "./jobs/Info"
import useSWR from "swr"
import CurrentSkeleton from "../modules/skeleton/Current.skeleton"
import SendCVButton from "../modules/SendCVButton"
import TimeGenerator from "../modules/TimeGenerator"

type InfoTypes = "INFO_JOB" | "ABOUT_COMPANY" | "RELATED_ADS" | "RESUME_RECRRDS"
export interface TypeItemBox {
  id: string
  title: string
  type: InfoTypes
  component: ReactNode
}

const CurrentJobAD: React.FC = () => {
  //! ---------- Hooks
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const { width } = useSize()
  //! ---------- State
  const id = searchParams.get("id")
  const [isShow, setIsShow] = useState(false)
  const { data: ad, isLoading } = useSWR(
    id ? `/ad/current?id=${id}` : null,
    async (): Promise<AD> => await fetch(`/api/ad?id=${id}`).then((res) => res.json())
  )
  const mainItemsBoxInfos: TypeItemBox[] = [
    {
      id: uuid(),
      title: "درباره شغل",
      type: "INFO_JOB",
      component: <Info ad={ad ?? ({} as AD)} />,
    },
    {
      id: uuid(),
      title: "درباره شرکت",
      type: "ABOUT_COMPANY",
      component: <Company ad={ad ?? ({} as AD)} />,
    },
    {
      id: uuid(),
      title: "سایر آگهی های این شرکت",
      type: "RELATED_ADS",
      component: (
        <div className="morabba title-sm">
          <span>آگهی یافت نشد</span>
        </div>
      ),
    },
  ]

  //! ---------- Action
  const closeAction = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("id")
    replace(`?${params.toString()}`)
    setIsShow(false)
  }

  //! ---------- Jsx Responsive View
  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return width >= 1024 ? (
      <>{children}</>
    ) : (
      <Drawer open={isShow} onClose={closeAction}>
        <DrawerContent className="h-current" touchClassName="bg-muted-foreground mb-3">
          {children}
        </DrawerContent>
      </Drawer>
    )
  }

  //! ---------- SideEffect
  useEffect(() => {
    if (ad) setIsShow(true)
    else {
      setIsShow(false)
    }
  }, [ad])

  return (
    <>
      {isLoading ? (
        <CurrentSkeleton />
      ) : ad ? (
        <Wrapper>
          <div className="bg-muted w-full h-full px-3 rounded-sm overflow-x-hidden overflow-y-auto">
            <div className="pt-3">
              <div
                style={{
                  backgroundImage: "url('/images/company-image.webp')",
                }}
                className="bg-[#11111165] bg-blend-multiply w-full h-36 rounded-sm bg-fixed bg-center bg-no-repeat bg-cover"
              ></div>
            </div>
            <div className="bg-muted w-full h-16 flex justify-between sticky top-0 py-3 z-20">
              <div className="w-9/12">
                <Title>
                  <h3 className="mb-3">{ad.name}</h3>
                </Title>
              </div>
              <div className="w-2/12 flex items-start justify-end">
                <SendCVButton ad={ad} />
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col text-sm">
                <p>{`${ad?.company?.location.city.name} , ${ad?.company?.location.address}`}</p>
                <div className="*:text-sm flex flex-wrap mb-2">
                  {ad.itern ? (
                    <div className="box-info-type border-background !mr-1">امکان جذب کارآموز</div>
                  ) : null}
                  {ad.telecommuting ? (
                    <div className="box-info-type border-background !mr-1">امکان دورکاری</div>
                  ) : null}
                </div>
                <div className="my-2 flex items-start justify-between">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-xs">
                        <TimeGenerator date={ad.created_at} />
                      </span>
                      <p className="inline-block mx-2">/</p>
                      <p className="inline-block">
                        {`${ad.price.min.toLocaleString("fa-ir")}${
                          ad.price.max ? ` - ${ad.price.max.toLocaleString("fa-ir")}` : ""
                        } `}
                        تومان
                      </p>
                    </div>
                    <Button variant={"outline"}>مشاهده حقوق دریافتی افراد در مشاغل مشابه</Button>
                  </div>
                  <div className="text-jv-primary text-2xl flex">
                    <ExternalLink className="btn-icon-l icon-stroke-light icon" />
                    <Heart className="icon-stroke-light icon" />
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="w-full text-sm flex items-center justify-start">
              <div className="fill-jv-lightGray2x w-4/12 flex items-center">
                <Users className="icon-stroke-light" />
                <p className="mr-3 truncate">{ad?.company?.organization_employ} نفر</p>
              </div>
              <div className="w-8/12 flex items-center">
                <Speech className="icon-stroke-light" />
                <p className="min-w-10/12 mr-3 truncate">{ad?.company?.slogan}</p>
              </div>
            </div>
            <Tabs
              dir="rtl"
              defaultValue={mainItemsBoxInfos.at(0)?.type}
              className="h-full flex flex-col my-3 p-0"
            >
              <TabsList variant={"secondary"} className="w-full h-10 sticky top-16 z-20">
                <div className="w-full h-full flex overflow-x-auto hidden-scrollbar">
                  {mainItemsBoxInfos.map((item) => (
                    <TabsTrigger
                      key={`trigger-${item.type}`}
                      variant={"secondary"}
                      value={item.type}
                    >
                      {item.title}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
              <div className="bg-background p-3">
                {mainItemsBoxInfos.map((item) => (
                  <TabsContent
                    className="h-full mb-3"
                    key={`content-${item.type}`}
                    value={item.type}
                  >
                    {item.component}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </Wrapper>
      ) : (
        <div className="bg-muted h-full w-full center flex-col p-3 rounded-sm">
          <Inbox className="stroke-muted-foreground w-52 h-52 stroke-1" />
          <Title className="text-muted-foreground w-2/4 text-center select-none">
            <h3>جهت مشاهده اطلاعات آگهی شغلی یکی از موارد را از سمت راست انتخاب کنید</h3>
          </Title>
        </div>
      )}
    </>
  )
}

export default CurrentJobAD
