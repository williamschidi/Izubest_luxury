import { lazy, Suspense, useState } from "react";

// import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import Latest1 from "../components/Latest1";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Collection from "../components/Collection";

const Location = lazy(() =>
  import("../components/Location")
);
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
      {/* <Header data={data} /> */}
      <Hero />
      <About />
      {/* <Collections /> */}
      <Collection />
      <Latest1 />
      <Testimonial />
      <Suspense
        fallback={
          <div>
            Loading Store Location along with Map .....
          </div>
        }
      >
        <Location />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Index;
