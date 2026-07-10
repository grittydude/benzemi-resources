import { ABOUT_PAGE } from "../constants";
import RootLayout from "../layouts/RootLayout";
import PageHero from "../components/ui/PageHero";
import OurStory from "../components/sections/OurStory";
import WhyWeBuild from "../components/sections/WhyWeBuild";
import MissionVisionValues from "../components/sections/MissionVisionValues";
import TeamSection from "../components/sections/TeamSection";
import SiteFooter from "../components/sections/SiteFooter";
import imageSrc from "../assets/images/about_image.webp?url&width=1200&height=1000&format=webp&as=";

function About() {
  const { hero, story, whyWeBuild, mission, team } = ABOUT_PAGE;

  return (
    <RootLayout>
      <PageHero
        tags={hero.tags}
        heading={hero.heading}
        cta={hero.cta}
        imageSrc={imageSrc}
        thickBottom
      />
      <OurStory data={story} />
      <WhyWeBuild data={whyWeBuild} />
      <MissionVisionValues data={mission} />
      <TeamSection data={team} />
      <SiteFooter />
    </RootLayout>
  );
}

export default About;
