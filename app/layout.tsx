import type { Metadata } from "next"
import addInitalDataAction from "./action/addInitalDataToDb"
import { Toaster } from "@/components/modules/ui/toaster"

import "./globals.css"

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
        {children}
        <Toaster />
      </body>
    </html>
  )
}
