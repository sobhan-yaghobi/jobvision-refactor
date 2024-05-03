"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import useSize from "@/hook/useSize"

import TimeGenerator from "../modules/TimeGenerator"
import { v4 as uuid } from "uuid"
import { getTime } from "@/utils/utils.function"

import { ad } from "@/types/utils.type"

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
import SendCvButton from "../modules/SendCvButton"

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
  const searchParams = useSearchParams()
  const [isShow, setIsShow] = useState(false)

  const id = searchParams.get("id")
  const { data: ad, isLoading } = useSWR(
    id ? `/ad/current?id=${id}` : null,
    async (): Promise<ad> => await fetch(`/api/ad?id=${id}`).then((res) => res.json())
  )

  useEffect(() => {
    if (ad) setIsShow(true)
    else {
      setIsShow(false)
    }
  }, [ad])

  const mainItemsBoxInfos: TypeItemBox[] = [
    {
      id: uuid(),
      title: "درباره شغل",
      type: "INFO_JOB",
      component: <Info ad={ad ?? ({} as ad)} />,
    },
    {
      id: uuid(),
      title: "درباره شرکت",
      type: "ABOUT_COMPANY",
      component: <Company ad={ad ?? ({} as ad)} />,
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

  const closeAction = () => {
    const params = new URLSearchParams(searchParams)
    params.delete("id")
    replace(`?${params.toString()}`)
    setIsShow(false)
  }

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

  return (
    <>
      {isLoading ? (
        <CurrentSkeleton />
      ) : ad ? (
        <Wrapper>
          <div className="w-full h-full overflow-y-auto bg-muted px-3 rounded-sm">
            <div className="pt-3">
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
                  <h3 className="mb-3">{ad.name}</h3>
                </Title>
              </div>
              <div className="w-2/12 flex items-start justify-end">
                <SendCvButton ad={ad} />
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col text-sm">
                <p>{`${ad.company.location.city.name} , ${ad.company.location.address}`}</p>
                <div className="mb-2 flex flex-wrap *:text-sm">
                  {ad.itern ? (
                    <div className="box-info-type !mr-1 !p-0">امکان جذب کارآموز</div>
                  ) : null}
                  {ad.telecommuting ? (
                    <div className="box-info-type !mr-1 !p-0">امکان دورکاری</div>
                  ) : null}
                </div>
                <div className="my-2 flex items-start justify-between">
                  <div className="flex flex-col gap-3">
                    <p>
                      {`${ad.price.min.toLocaleString("fa-ir")}${
                        ad.price.max ? ` - ${ad.price.max.toLocaleString("fa-ir")}` : ""
                      } `}
                      تومان
                    </p>
                    <TimeGenerator dateInfo={getTime(ad.created_at)} />
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
                <p className="mr-3 truncate">{ad.company.organization_employ} نفر</p>
              </div>
              <div className="w-8/12 flex items-center">
                <Speech className="icon-stroke-light" />
                <p className="w-10/12 mr-3 truncate">{ad.company.slogan}</p>
              </div>
            </div>
            <Tabs
              dir="rtl"
              defaultValue={mainItemsBoxInfos.at(0)?.type}
              className="h-full my-3 p-0 flex flex-col"
            >
              <TabsList variant={"secondary"} className="w-full sticky top-24 z-20">
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
