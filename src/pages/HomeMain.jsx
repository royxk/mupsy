import Header from "../components/Header";
import Footer from "../components/Footer";
import { SECTIONS } from "../constants/MAINCONSTANTS";
import Section from "../components/Section";

const HomeMain = () => {
  return (
    <main className="flex flex-col gap-10 tab:gap-0">
      {SECTIONS.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </main>
  );
};

export default HomeMain;
