"use client"

import React, { useEffect, useState } from "react"
import { fetchProvinceAndCategory } from "@/utils/utils.fetch"
import { cn } from "@/utils/utils.function"
import { filterSaerchForm } from "@/types/utils.variable"

import { useRouter, useSearchParams } from "next/navigation"
import useSWR from "swr"

import { category_collection, city, province } from "@prisma/client"

import { Briefcase, CheckIcon, MapPin, Search, X } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import SingleSelect from "./SingleSelect"
import { Button } from "@/components/modules/ui/button"
import { Input } from "./ui/input"

export type SearchFormProps = {
  redirectAsap?: boolean
  path?: string
}

type StateProvinceOrCity = { mode: "Province"; province: province } | { mode: "City"; city: city }

const SearchForm: React.FC<React.PropsWithChildren<SearchFormProps>> = ({
  children,
  redirectAsap,
  path,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isprovinceOpen, setIsProvinceOpen] = useState(false)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [collection, setCollection] = useState<category_collection>({} as category_collection)
  const [cityOrProvince, setCityOrProvince] = useState<StateProvinceOrCity>(
    {} as StateProvinceOrCity
  )
  const { data, isLoading } = useSWR("/api/fetchProvinceAndCategory", fetchProvinceAndCategory)
  const handelSearch = (value: string, path: string, deletePath?: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) params.set(path, value)
    else params.delete(path)

    deletePath && params.delete(deletePath)
    redirectAsap
      ? replace(`${typeof path !== "undefined" && path}?${params.toString()}`)
      : replace(`?${params.toString()}`)
  }

  useEffect(() => {
    const categoryFetchAction = async () => {
      const queryCollection = searchParams.get(filterSaerchForm.collection)
      if (queryCollection) {
        data?.categories.find((category) =>
          category.category_collections.find(
            (collection) => collection.id === queryCollection && setCollection(collection)
          )
        )
      }
      return
    }
    const provinceFetchAction = async () => {
      const queryCity = searchParams.get(filterSaerchForm.city)
      const queryProvince = searchParams.get(filterSaerchForm.province)

      if (queryCity) {
        data?.provinces.find((province) =>
          province.cities.find(
            (city) => city.id === queryCity && setCityOrProvince({ mode: "City", city })
          )
        )
        return
      }

      if (queryProvince) {
        data?.provinces.find(
          (province) =>
            province.id === queryProvince && setCityOrProvince({ mode: "Province", province })
        )
        return
      }
      return
    }

    if (searchParams.get(filterSaerchForm.collection)?.length) categoryFetchAction()
    if (
      searchParams.get(filterSaerchForm.province)?.length ||
      searchParams.get(filterSaerchForm.city)?.length
    )
      provinceFetchAction()
  }, [data, searchParams])

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-between lg:flex-row">
      <Input
        defaultValue={searchParams.get(filterSaerchForm.search?.toString()) || ""}
        wrapperClassName="w-full"
        icon={<Search className="icon" />}
        placeholder="عنوان شغلی یا شرکت..."
        onChange={(e) => handelSearch(e.target.value.trim(), filterSaerchForm.search)}
      />

      {isLoading ? (
        <>
          <div className="bg-muted h-11 w-full animate-pulse"></div>
          <div className="bg-muted h-11 w-full animate-pulse"></div>
        </>
      ) : (
        <>
          <SingleSelect
            className="w-full"
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
            trigger={
              <div
                className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
              >
                <div className="center absolute right-3">
                  <Briefcase className="icon" />
                </div>
                {collection.id ? (
                  <>
                    <span className="text-sm">{collection.name}</span>
                    <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                      <X
                        onClick={(e) => {
                          e.preventDefault()
                          setCollection({} as category_collection)
                          handelSearch("", filterSaerchForm.collection)
                        }}
                        className="icon"
                      />
                    </button>
                  </>
                ) : (
                  <p className="text-muted-foreground text-sm">گروه شغلی</p>
                )}
              </div>
            }
          >
            <Accordion type="single" collapsible className="w-full">
              {data?.categories.map((cateogry) => (
                <AccordionItem
                  key={`accordion-cateogry-item-${cateogry.id}`}
                  value={`accordion-cateogry-item-${cateogry.id}`}
                >
                  <AccordionTrigger className="py-2 hover:no-underline">
                    {cateogry.name}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {cateogry.category_collections.length ? (
                      cateogry.category_collections.map((collect) => (
                        <div
                          key={`accordion-collection-item-${collect.id}`}
                          className="flex my-1 py-2 rounded-md cursor-pointer hover:bg-muted"
                          onClick={() => {
                            setCollection(collect)
                            handelSearch(collect.id, filterSaerchForm.collection)
                            setIsCategoryOpen(false)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "icon btn-icon btn-icon-l",
                              collection.id === collect.id ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {collect.name}
                        </div>
                      ))
                    ) : (
                      <p className="text-destructive my-1 p-2 rounded-sm hover:bg-destructive-foreground">
                        شغلی برای {cateogry.name} یافت نشد
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SingleSelect>

          <SingleSelect
            className="w-full"
            isOpen={isprovinceOpen}
            setIsOpen={setIsProvinceOpen}
            trigger={
              <div
                className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
              >
                <div className="center absolute right-3">
                  <MapPin className="icon" />
                </div>
                {cityOrProvince.mode ? (
                  <>
                    <span className="text-sm">
                      {cityOrProvince.mode === "City"
                        ? cityOrProvince.city.name
                        : cityOrProvince.province.name}
                    </span>
                    <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                      <X
                        onClick={(e) => {
                          e.preventDefault()
                          setCityOrProvince({} as StateProvinceOrCity)
                          cityOrProvince.mode === "City"
                            ? handelSearch("", filterSaerchForm.city)
                            : handelSearch("", filterSaerchForm.province)
                        }}
                        className="icon"
                      />
                    </button>
                  </>
                ) : (
                  <p className="text-muted-foreground text-sm">شهر</p>
                )}
              </div>
            }
          >
            <Accordion type="single" collapsible className="w-full">
              {data?.provinces.map((province) => (
                <AccordionItem
                  key={`accordion-province-item-${province.id}`}
                  value={`accordion-province-item-${province.id}`}
                >
                  <AccordionTrigger className="py-2 hover:no-underline">
                    {province.name}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    <div
                      className="flex my-1 py-2 rounded-md cursor-pointer hover:bg-muted"
                      onClick={() => {
                        setCityOrProvince({ mode: "Province", province })
                        handelSearch(province.id, filterSaerchForm.province, filterSaerchForm.city)
                        setIsProvinceOpen(false)
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "icon btn-icon btn-icon-l",
                          cityOrProvince.mode === "Province" &&
                            cityOrProvince.province.id === province.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      تمامی شهر های {province.name}
                    </div>
                    {province.cities
                      ? province.cities.map((city) => (
                          <div
                            key={`accordion-city-item-${city.id}`}
                            className="flex my-1 py-2 rounded-md cursor-pointer hover:bg-muted"
                            onClick={() => {
                              setCityOrProvince({ mode: "City", city })
                              handelSearch(city.id, "city", "province")
                              setIsProvinceOpen(false)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "icon btn-icon btn-icon-l",
                                cityOrProvince.mode === "City" && cityOrProvince.city.id === city.id
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {city.name}
                          </div>
                        ))
                      : null}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SingleSelect>
        </>
      )}

      <Button
        asChild
        onClick={() => {
          const params = new URLSearchParams(searchParams)
          replace(`${path}?${params.toString()}`)
        }}
      >
        {children}
      </Button>
    </div>
  )
}

export default SearchForm
