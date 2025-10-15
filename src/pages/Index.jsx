import { lazy, Suspense, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";

import Latest1 from "../components/Latest1";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Collection from "../components/Collection";
import { useOutletContext } from "react-router-dom";

const Location = lazy(() =>
  import("../components/Location")
);
function Index() {
  const { collections } = useOutletContext();

  return (
    <div className="">
      <Hero />
      <About />
      <Collection collection={collections} />
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
