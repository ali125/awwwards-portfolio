import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSummary from "./components/ServiceSummary";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <section className="min-h-screen" />
    </div>
  );
};

export default App;
