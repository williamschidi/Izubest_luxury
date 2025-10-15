import { Icon } from "@iconify/react/dist/iconify.js";

function Testimonial() {
  return (
    <div
      data-aos="flip-left"
      id="testimony"
      className="py-10 bg-gradient-to-r from-yellow-400/60 to-yellow-800/60 space-y-8"
    >
      <p className="text-2xl font-semibold text-gray-700 tracking-[0.2em] uppercase text-center">
        TESTIMONIALS
      </p>
      <div className="max-w-[70rem] mx-auto  text-center flex flex-col sm:flex-row justify-between items-start gap-10 text-gray-700 font-calligraphy px-8">
        <div className="space-y-3 ">
          <Icon
            icon="codicon:quote"
            width="16"
            height="16"
          />
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere laboriosam molestias
            error vero beatae sequi qui commodi.
          </p>
          <div className="flex justify-start items-center gap-2 py-2 px-4">
            <img
              src="wear-img/chidi.jpg"
              alt="image"
              className="w-[2.4rem] h-[2.4rem] rounded-full"
            />
            <span className="text-xs ">(Williamchidi)</span>
          </div>
        </div>
        <div className="space-y-4">
          <Icon
            icon="codicon:quote"
            width="16"
            height="16"
          />
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere laboriosam molestias
            error vero beatae sequi qui commodi.
          </p>
          <div className="flex justify-start items-center gap-2 px-4">
            <img
              src="wear-img/chidi.jpg"
              alt="image"
              className="w-[2.4rem] h-[2.rem] rounded-full"
            />
            <span className="text-xs">(Williamchidi)</span>
          </div>
        </div>
        <div className="space-y-4">
          <Icon
            icon="codicon:quote"
            width="16"
            height="16"
          />
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere laboriosam molestias
            error vero beatae sequi qui commodi.
          </p>
          <div className="flex justify-start items-center gap-2">
            <img
              src="wear-img/chidi.jpg"
              alt="image"
              className="w-[2.4rem] h-[2.rem] rounded-full"
            />
            <span className="text-xs">(Williamchidi)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
