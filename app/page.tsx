import CompnaySlider from "@/components/template/CompnaySlider"
import Landing from "@/components/template/Landing"

export default async function Home() {
  return (
    <>
      <Landing />
      <div className="w-full overflow-hidden">
        <CompnaySlider />
      </div>
    </>
  )
}
