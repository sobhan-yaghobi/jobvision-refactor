"use client"
import React from "react"

import SingleSelect, { SingleSelectProps } from "./SingleSelect"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"

const ResponsiveSingleSelect: React.FC<React.PropsWithChildren<SingleSelectProps>> = (props) => {
  return (
    <>
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>{props.trigger}</DrawerTrigger>
          <DrawerContent className="px-3 py-2">{props.children}</DrawerContent>
        </Drawer>
      </div>
      <div className="hidden lg:block">
        <SingleSelect {...props} />
      </div>
    </>
  )
}

export default ResponsiveSingleSelect
