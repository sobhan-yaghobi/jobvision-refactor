import CompnaySlider from "@/components/template/CompnaySlider"
import Landing from "@/components/template/Landing"

export default async function Home() {
  return (
    <>
      <Landing />
      <div className="w-full mb-20 overflow-hidden">
        <CompnaySlider />
      </div>
    </>
  )
}
