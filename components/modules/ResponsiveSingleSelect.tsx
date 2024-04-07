"use client"

import SingleSelect, { SingleSelectProps } from "./SingleSelect"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import useSize from "@/hook/useSize"

const ResponsiveSingleSelect: React.FC<React.PropsWithChildren<SingleSelectProps>> = (props) => {
  const { width } = useSize()

  return (
    <>
      {width >= 1024 ? (
        <SingleSelect {...props} />
      ) : (
        <Drawer>
          <DrawerTrigger asChild>{props.trigger}</DrawerTrigger>
          <DrawerContent className="px-3 py-2">{props.children}</DrawerContent>
        </Drawer>
      )}
    </>
  )
}

export default ResponsiveSingleSelect
