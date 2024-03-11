import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Clone Jobvison",
  description: "Made With Hearth 🧡 In Iran",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
