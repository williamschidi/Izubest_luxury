import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
// import Latest from "../components/Latest";
import Collections from "../components/Collections";
import Latest1 from "../components/Latest1";
import Testimonial from "../components/Testimonial";
import Location from "../components/Location";
import Footer from "../components/Footer";

function Index() {
  const [collections, setCollections] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const data = {
    setCollections,
    collections,
    isSticky,
    setIsSticky,
  };
  return (
    <div className="">
      <Header data={data} />
      <Hero />
      <About />
      <Collections />
      <Latest1 />
      <Testimonial />
      <Location />
      <Footer />
    </div>
  );
}

export default Index;
