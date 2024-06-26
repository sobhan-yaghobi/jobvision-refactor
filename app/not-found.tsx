import React from "react"

import { Button } from "@/components/modules/ui/button"
import Title from "@/components/modules/Title"
import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="text-secondary w-full h-full center relative">
      <div className="w-full h-full center absolute blur-sm">
        <Image
          className="w-full md:w-auto"
          width={700}
          height={300}
          src={"/images/404.svg"}
          alt="404 Error"
        />
      </div>
      <div className="bg-white/40 backdrop-blur-lg center flex-col p-3 rounded-sm">
        <Title className="w-auto">
          <h1>دنبال چیزی میگردی ؟</h1>
        </Title>
        <p className="my-3">ما نتونستیم اون صفحه ای که دنبالش هستی رو پیدا کنیم :(</p>
        <Link href={"/"}>
          <Button>برو به صفحه اصلی</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
