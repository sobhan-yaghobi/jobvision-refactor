import React, { ReactNode, useEffect, useRef, useState } from "react"

import { provinceWithCity } from "@/types/utils.type"
import { cities } from "@prisma/client"

import { cn } from "@/lib/utils"

import { CheckIcon, MapPin, X } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"

export type StateProvinceOrCity =
  | { mode: "Province"; province: provinceWithCity }
  | { mode: "City"; city: cities }

type ProvinceInputProps = {
  provinces: provinceWithCity[]
  placeholder: ReactNode | string
  icon?: ReactNode
  width?: string
  message?: string
  defValueId?: string
} & (
  | {
      state: StateProvinceOrCity
      isAllCity: true
      setState: React.Dispatch<React.SetStateAction<StateProvinceOrCity>>
    }
  | {
      state: cities
      setState: React.Dispatch<React.SetStateAction<cities>>
      isAllCity?: false
    }
)

const ProvinceInput: React.FC<ProvinceInputProps> = ({
  provinces,
  placeholder,
  icon,
  width,
  message,
  defValueId,
  ...props
}) => {
  const myDivRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchAction = async () => {
      if (props.isAllCity) {
      } else {
        const res = await fetch(`/api/city?id=${defValueId}`)
        const dataCity: cities = await res.json()

        props.setState(dataCity)
      }
    }

    fetchAction()
  }, [defValueId])

  return (
    <div>
      <div ref={myDivRef} className={`${width ?? "w-[300px]"}`}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div
              role="combobox"
              aria-expanded={open}
              className={`min-h-10 relative flex items-center flex-wrap gap-1 p-1 pr-12 border-2 border-muted rounded-sm cursor-pointer`}
            >
              <div className="absolute right-3 center">
                {icon ? icon : <MapPin className="icon" />}
              </div>
              {(!props.isAllCity && props.state.id) ||
              (props.isAllCity &&
                ((props.state.mode === "City" && props.state.city.id) ||
                  (props.state.mode === "Province" && props.state.province.id))) ? (
                <>
                  <span className="text-sm">
                    {props.isAllCity && props.state.mode === "City"
                      ? props.state.city.name
                      : props.isAllCity && props.state.mode === "Province"
                      ? props.state.province.name
                      : !props.isAllCity && props.state.name}
                  </span>
                  <button className="mr-auto p-1 rounded-sm hover:*:stroke-destructive hover:bg-destructive-foreground">
                    <X
                      onClick={(e) => {
                        e.preventDefault()
                        props.isAllCity &&
                        (props.state.mode === "Province" || props.state.mode === "City")
                          ? props.setState({} as StateProvinceOrCity)
                          : !props.isAllCity && props.setState({} as cities)
                      }}
                      className="icon"
                    />
                  </button>
                </>
              ) : (
                placeholder
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent
            style={{ width: `${myDivRef.current?.clientWidth}px` }}
            className="px-3 py-2"
          >
            <Accordion type="single" collapsible className="w-full">
              {provinces.map((province) => (
                <AccordionItem
                  key={`accordion-province-item-${province.id}`}
                  value={`accordion-province-item-${province.id}`}
                >
                  <AccordionTrigger className="py-2 hover:no-underline">
                    {province.name}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {props.isAllCity ? (
                      <div
                        className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                        onClick={() => {
                          props.setState({ mode: "Province", province })
                          setOpen(false)
                        }}
                      >
                        <CheckIcon
                          className={cn(
                            "icon btn-icon btn-icon-l",
                            props.state.mode === "Province" &&
                              props.state.province.id === province.id
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        تمامی شهر های {province.name}
                      </div>
                    ) : null}
                    {province.cities
                      ? province.cities.map((city) => (
                          <div
                            key={`accordion-city-item-${city.id}`}
                            className="flex my-1 py-2 cursor-pointer rounded-md hover:bg-muted"
                            onClick={() => {
                              props.isAllCity
                                ? props.setState({ mode: "City", city })
                                : props.setState(city)
                              setOpen(false)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "icon btn-icon btn-icon-l",
                                !props.isAllCity && props.state.id === city.id
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
          </PopoverContent>
        </Popover>
      </div>
      {message && typeof message === "string" ? (
        <p className="text-destructive text-xs">{message}</p>
      ) : (
        message
      )}
    </div>
  )
}

export default ProvinceInput
