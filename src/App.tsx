import ReactLenis from "lenis/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ServiceSummary from "./components/ServiceSummary";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <section className="min-h-screen" />
    </ReactLenis>
  );
};

export default App;
