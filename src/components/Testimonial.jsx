// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation, Autoplay } from "swiper/modules";
import Section from "./Section";
import { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const testimonies = [
  {
    username: "william042",
    img: "",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat dicta provident animi distinctio, vel quo sunt deserunt temporibus quisquam",
    starRating: 4,
  },
  {
    username: "fellacy",
    img: "",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat dicta provident animi distinctio, vel quo sunt deserunt temporibus quisquam",
    starRating: 5,
  },
  {
    username: "Donzaly",
    img: "",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat dicta provident animi distinctio, vel quo sunt deserunt temporibus quisquam",
    starRating: 3,
  },
  {
    username: "william042",
    img: "",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum placeat dicta provident animi distinctio, vel quo sunt deserunt temporibus quisquam",
    starRating: 4,
  },
];

function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Section>
      <div
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
              <span className="text-xs ">
                (Williamchidi)
              </span>
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
              <span className="text-xs">
                (Williamchidi)
              </span>
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
              <span className="text-xs">
                (Williamchidi)
              </span>
            </div>
          </div>
        </div>
        {/* <h2 className=" font-bold text-3xl  bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent pb-6">
          Testimonials
        </h2> */}

        {/* <div className=" relative bg-gray-600/80 text-gray-100 overflow-visible">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                prevRef.current;
              swiper.params.navigation.nextEl =
                nextRef.current;
            }}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            speed={2000}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className=" px-4  w-[80%] border border-gray-400"
          >
            {testimonies.map((testimony, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-between items-center text-left gap-8 w-full">
                  <div className="space-y-3 w-[30%] h-full transform scale-y-110 py-2  flex flex-col justify-center items-center">
                    <img
                      src={testimony.img}
                      alt="img"
                      className="w-[5rem] h-[5rem] rounded-full bg-gray-200"
                    />
                    <span className="text-sm">
                      {testimony.username}
                    </span>
                  </div>

                  <p className="w-[70%] text-sm py-4">
                    {testimony.comment}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={prevRef}
            className=" absolute top-1/2 left-10 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={nextRef}
            className="absolute top-1/2 right-10 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div> */}
      </div>
    </Section>
  );
}

export default Testimonial;
