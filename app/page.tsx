import CompnaySlider from "@/components/template/CompnaySlider"
import Landing from "@/components/template/Landing"
import LastAds from "@/components/template/LastAds"

export default async function Home() {
  return (
    <>
      <Landing />
      <div className="w-full mb-20 overflow-hidden">
        <CompnaySlider />
      </div>
      <div className="mb-20">
        <LastAds />
      </div>
    </>
  )
}
