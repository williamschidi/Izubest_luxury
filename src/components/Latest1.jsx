import { Icon } from "@iconify/react";

import Section from "./Section";

function Latest1() {
  return (
    <Section>
      <section
        id="latest"
        className="text-center pt-[2.4rem] bg-gray-100  px-2 pb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-gray-800">
          LATEST
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          In Motion: Our Latest Masterpieces
        </h2>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start w-[90%] sm:max-w-[70rem] mx-auto gap-8  border border-gray-300">
          <div className="relative w-full sm:flex-[60%] bg-gray-200 h-[22rem]">
            <video className="w-full h-full">
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                icon="gg:play-button-o"
                width="48"
                height="48"
                className="text-white"
              />
            </div>
          </div>
          <div className="flex-[40%] flex flex-col justify-start gap-6 text-left  min-h-[22rem] py-4 px-4">
            <h2 className="font-bold text-2xl text-gray-600 tracking-tight">
              Classic Tencel
            </h2>
            <p className="text-sm">
              Tencel is the fabric that feels like luxury
              and breathes like nature. Made from
              sustainably sourced wood pulp, it's silky
              soft, gentle on the skin, and eco-friendly.
              With its natural ability to keep you cool,
              fresh, and comfortable, Tencel combines
              elegance with sustainability—making every
              outfit not just stylish, but smart. Perfect
              for those who want fashion that cares for both
              you and the planet.
            </p>
            <div className="mt-auto flex justify-between items-center  px-2 text-xs font-semibold ">
              <span>{new Date().toLocaleDateString()}</span>
              <span>comments</span>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Latest1;
