import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/modules/Header/Header"
import Footer from "@/components/modules/Footer"
import addInitalDataAction from "./action/addInitalDataToDb"
import getMe from "@/app/action/getMe"

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
  const user = await getMe()

  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
