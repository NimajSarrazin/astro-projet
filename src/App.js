import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero";
import SectionFeature from "./components/SectionFeature";
import SectionInsideTemplate from "./components/SectionInsideTemplate";
import SectionComponents from "./components/SectionComponents";
import SectionFaqs from "./components/SectionFaqs";
import SectionDream from "./components/cards/SectionDream";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <main>
          <SectionFeature />
          <SectionInsideTemplate />
          <SectionDream />
          <SectionComponents />
          <SectionFaqs />
      </main>
    </>
  );
}

export default App;
