import Divider from "../divider/Divider"
import LogoBanner from "../logo-banner/LogoBanner"
import ExperienceCategories from "../experience-categoried/ExperienceCategories"
export default function Experience() {
  return (
    <section className="w-full h-100">
      <Divider text="Experience" id="experience"/>
      <LogoBanner/>
      <ExperienceCategories/>
    </section>
  )
}
