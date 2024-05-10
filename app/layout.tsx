import type { Metadata } from "next"
import addInitalDataAction from "./action/addInitalDataToDb"
import { Toaster } from "@/components/modules/ui/toaster"

import "./globals.css"
import { Suspense } from "react"
import Loading from "@/components/modules/Loading"

export const metadata: Metadata = {
  title: "Clone Jobvison Website",
  description: "Made With Hearth 🧡 In Iran",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await addInitalDataAction()
  return (
    <html lang="en" dir="rtl">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  )
}
