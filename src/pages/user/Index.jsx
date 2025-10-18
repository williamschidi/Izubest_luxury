import { lazy, Suspense, useEffect } from "react";
import Hero from "../../components/userComponents/Hero";
import About from "../../components/userComponents/About";

import Latest1 from "../../components/userComponents/Latest1";
import Testimonial from "../../components/userComponents/Testimonial";
import Footer from "../../components/userComponents/Footer";
import Collection from "../../components/userComponents/Collection";
import { useOutletContext } from "react-router-dom";

const Location = lazy(() =>
  import("../../components/userComponents/Location")
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
