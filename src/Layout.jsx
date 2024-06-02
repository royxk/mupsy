import Header from "./components/Header";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { SECTIONS } from "./constants/MAINCONSTANTS";
import Section from "./components/Section";

const Layout = () => {
  return (
    <div className="p-10 flex flex-col gap-20">
      <Header />
      <main className="flex flex-col gap-10 tab:gap-0">
        {SECTIONS.map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
