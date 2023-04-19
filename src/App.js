import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero";
import SectonFeature from "./components/SectonFeature";

function App() {
  return (
    <><div className="">
      <Navbar />
      <Hero />
    </div>
    <main>
        <SectonFeature title='What you get with AstroWind'/>
      </main></>
  );
}

export default App;
