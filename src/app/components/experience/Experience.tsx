import Divider from "../divider/Divider"
import LogoBanner from "../logo-banner/LogoBanner"
import ExperienceCategories from "../experience-categories/ExperienceCategories"
export default function Experience() {
  return (
    <section className="flex flex-col items-center w-full lg:px-10 px-4 h-100">
      <Divider text="Experience" id="experience"/>
      <LogoBanner />
      <ExperienceCategories/>
    </section>
  )
}
