import { SECTIONS } from "../constants/MAINCONSTANTS";
import Section from "../components/Section";
import { Carousel } from "../hooks/Carousel";

const HomeMain = () => {
  return (
    <main className="flex flex-col tab:gap-0">
      <Carousel />
      {SECTIONS.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </main>
  );
};

export default HomeMain;
