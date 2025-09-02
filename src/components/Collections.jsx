import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Section from "./Section";

// import Section from "./Section";

const collectionDetails = [
  {
    id: "01",
    name: "senator01",
    category: "native",
    price: 150,
    img: "wear-img/img1.jpg",
  },
  {
    id: "02",
    name: "senator02",
    category: "native",
    price: 100,
    img: "wear-img/img2.jpg",
  },
  {
    id: "03",
    name: "plain",
    category: "casual",
    price: 140,
    img: "wear-img/casual.webp",
  },
  {
    id: "04",
    name: "plain",
    category: "casual",
    price: 100,
    img: "wear-img/casual1.webp",
  },
  {
    id: "05",
    name: "plain",
    category: "casual",
    price: 130,
    img: "wear-img/casual2.webp",
  },
  {
    id: "06",
    name: "plain",
    category: "casual",
    price: 100,
    img: "wear-img/casual3.webp",
  },
  {
    id: "07",
    name: "plain",
    category: "casual",
    price: 110,
    img: "wear-img/casual4.png",
  },
  {
    id: "08",
    name: "plain",
    category: "casual",
    price: 90,
    img: "wear-img/casual5.png",
  },
  {
    id: "09",
    name: "plain",
    category: "casual",
    price: 80,
    img: "wear-img/casual6.jpg",
  },
  {
    id: "10",
    name: "suite",
    category: "corperate",
    price: 200,
    img: "wear-img/suite.webp",
  },
  {
    id: "11",
    name: "suite",
    category: "corperate",
    price: 180,
    img: "wear-img/suite1.webp",
  },
  {
    id: "12",
    name: "suite",
    category: "corperate",
    price: 100,
    img: "wear-img/suite2.webp",
  },
  {
    id: "13",
    name: "suite",
    category: "corperate",
    price: 140,
    img: "wear-img/suite3.webp",
  },
  {
    id: "14",
    name: "suite",
    category: "corperate",
    price: 140,
    img: "wear-img/suite4.webp",
  },
  {
    id: "15",
    name: "suite",
    category: "corperate",
    price: 140,
    img: "wear-img/suite5.webp",
  },
  {
    id: "16",
    name: "plain1",
    category: "casual",
    price: 100,
    img: "wear-img/img5.jpg",
  },
  {
    id: "17",
    name: "senator5",
    category: "native",
    price: 140,
    img: "wear-img/img5.jpg",
  },
  {
    id: "18",
    name: "senator6",
    category: "native",
    price: 160,
    img: "wear-img/img8.jpg",
  },
  {
    id: "19",
    name: "senator7",
    category: "native",
    price: 170,
    img: "wear-img/img10.jpg",
  },
  {
    id: "20",
    name: "senator8",
    category: "native",
    price: 120,
    img: "wear-img/img11.jpg",
  },
  {
    id: "21",
    name: "shoe",
    category: "foot-wear",
    price: 140,
    img: "wear-img/shoe1.webp",
  },
  {
    id: "22",
    name: "shoe",
    category: "foot-wear",
    price: 110,
    img: "wear-img/shoe2.webp",
  },
  {
    id: "23",
    name: "shoe",
    category: "foot-wear",
    price: 150,
    img: "wear-img/shoe3.webp",
  },
  {
    id: "24",
    name: "shoe",
    category: "foot-wear",
    price: 190,
    img: "wear-img/shoe4.webp",
  },
  {
    id: "25",
    name: "sandals",
    category: "foot-wear",
    price: 190,
    img: "wear-img/sandals.webp",
  },
  {
    id: "26",
    name: "sandals",
    category: "foot-wear",
    price: 190,
    img: "wear-img/foot-wear-1.webp",
  },
  {
    id: "27",
    name: "nakelace",
    category: "jeweries",
    price: 100,
    img: "wear-img/nakelace.webp",
  },
  {
    id: "28",
    name: "nakelace",
    category: "jeweries",
    price: 190,
    img: "wear-img/nakelace1.webp",
  },
  {
    id: "28",
    name: "wrist-watch",
    category: "jeweries",
    price: 190,
    img: "wear-img/wristwatch.webp",
  },
  {
    id: "29",
    name: "wrist-watch",
    category: "jeweries",
    price: 150,
    img: "wear-img/watch.webp",
  },
  {
    id: "29",
    name: "wrist-watch",
    category: "jeweries",
    price: 100,
    img: "wear-img/wristwatch1.webp",
  },
  {
    id: "30",
    name: "wrist-watch",
    category: "jeweries",
    price: 120,
    img: "wear-img/wristwatch2.webp",
  },
  {
    id: "31",
    name: "wrist-watch",
    category: "jeweries",
    price: 200,
    img: "wear-img/wristwatch3.webp",
  },
];

function Collections() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const corperatePrevRef = useRef(null);
  const corperateNextRef = useRef(null);
  const casualPrevRef = useRef(null);
  const casualNextRef = useRef(null);
  const jeweriesPrevRef = useRef(null);
  const jeweriesNextRef = useRef(null);
  const footWearPrevRef = useRef(null);
  const footWearNextRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);
  useEffect(() => {
    setSwiperReady(true);
  }, []);
  return (
    <Section>
      <section
        id="collections"
        className="text-center pt-[4rem] pb-2"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          The Collection
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          The Collection
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:px-0` px-6">
          Browse our seasonal collections inspired by urban
          minimalism and natural textures. Each look is
          crafted to empower your style journey.
        </p>

        <div
          id="native-wears "
          className="relative max-w-[70rem] h-[25rem] mx-auto py-4   "
        >
          {swiperReady && (
            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl =
                  prevRef.current;
                swiper.params.navigation.nextEl =
                  nextRef.current;
              }}
              spaceBetween={10}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              // autoplay={{ delay: 5000 }}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className=" px-4 py-4 w-full "
            >
              {collectionDetails
                .filter(
                  (item) => item.category === "native"
                )
                .map((x, i) => (
                  <SwiperSlide key={i}>
                    <div
                      id={x.id}
                      className="group w-full h-[20rem] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl rounded-lg pb-4"
                    >
                      <img
                        src={x.img}
                        alt="collection"
                        className="w-full h-[80%] object-cover rounded-t-lg "
                      />
                      <p className="text-xs font-bold py-2 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                        price : ${x.price}
                      </p>
                      <p className="pt-2 border-t border-gray-200 text-[0.6rem] font-semibold text-gray-500 invisible group-hover:visible">
                        ADD TO CART
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          <div
            ref={prevRef}
            className=" absolute top-1/2 left-6 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={nextRef}
            className="absolute top-1/2 right-6 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div>
        <div
          id="corperate-wears"
          className="relative max-w-[70rem] h-[25rem] mx-auto py-2   "
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                corperatePrevRef.current;
              swiper.params.navigation.nextEl =
                corperateNextRef.current;
            }}
            spaceBetween={10}
            loop={true}
            navigation={{
              prevEl: corperatePrevRef.current,
              nextEl: corperateNextRef.current,
            }}
            // autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=" px-4 py-2 w-full"
          >
            {collectionDetails
              .filter(
                (item) => item.category === "corperate"
              )
              .map((x, i) => (
                <SwiperSlide key={i}>
                  <div
                    id={x.id}
                    className="group w-full h-[20rem] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl rounded-lg pb-4"
                  >
                    <img
                      src={x.img}
                      alt="collection"
                      className="w-full h-[80%] object-cover rounded-t-lg "
                    />
                    <p className="text-xs font-bold py-2 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                      price : ${x.price}
                    </p>
                    <p className="pt-2 border-t border-gray-200 text-[0.6rem] font-semibold text-gray-500 invisible group-hover:visible">
                      ADD TO CART
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div
            ref={corperatePrevRef}
            className=" absolute top-1/2 left-6 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={corperateNextRef}
            className="absolute top-1/2 right-6 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div>
        <div
          id="casual-wears"
          className="relative max-w-[70rem] h-[25rem] mx-auto py-2"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                casualPrevRef.current;
              swiper.params.navigation.nextEl =
                casualNextRef.current;
            }}
            spaceBetween={10}
            loop={true}
            navigation={{
              prevEl: casualPrevRef.current,
              nextEl: casualNextRef.current,
            }}
            // autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=" px-4 py-2 w-full"
          >
            {collectionDetails
              .filter((item) => item.category === "casual")
              .map((x, i) => (
                <SwiperSlide key={i}>
                  <div
                    id={x.id}
                    className="group w-full h-[20rem] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl rounded-lg pb-4"
                  >
                    <img
                      src={x.img}
                      alt="collection"
                      className="w-full h-[80%] object-cover rounded-t-lg "
                    />
                    <p className="text-xs font-bold py-2 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                      price : ${x.price}
                    </p>
                    <p className="pt-2 border-t border-gray-200 text-[0.6rem] font-semibold text-gray-500 invisible group-hover:visible">
                      ADD TO CART
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div
            ref={casualPrevRef}
            className=" absolute top-1/2 left-6 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={casualNextRef}
            className="absolute top-1/2 right-6 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div>

        <div
          id="foot-wears"
          className="relative max-w-[70rem] h-[25rem] mx-auto py-2   "
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                footWearPrevRef.current;
              swiper.params.navigation.nextEl =
                footWearNextRef.current;
            }}
            spaceBetween={10}
            loop={true}
            navigation={{
              prevEl: footWearPrevRef.current,
              nextEl: footWearNextRef.current,
            }}
            // autoplay={{ delay: 4000 }}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=" px-4 py-2 w-full"
          >
            {collectionDetails
              .filter(
                (item) => item.category === "foot-wear"
              )
              .map((x, i) => (
                <SwiperSlide key={i}>
                  <div
                    id={x.id}
                    className="group w-full h-[20rem] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl rounded-lg pb-4"
                  >
                    <img
                      src={x.img}
                      alt="collection"
                      className="w-full h-[80%] object-cover rounded-t-lg "
                    />
                    <p className="text-xs font-bold py-2 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                      price : ${x.price}
                    </p>
                    <p className="pt-2 border-t border-gray-200 text-[0.6rem] font-semibold text-gray-500 invisible group-hover:visible">
                      ADD TO CART
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div
            ref={footWearPrevRef}
            className=" absolute top-1/2 left-6 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={footWearNextRef}
            className="absolute top-1/2 right-6 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div>
        <div
          id="foot-wears"
          className="relative max-w-[70rem] h-[25rem] mx-auto py-2"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                jeweriesPrevRef.current;
              swiper.params.navigation.nextEl =
                jeweriesNextRef.current;
            }}
            spaceBetween={10}
            loop={true}
            navigation={{
              prevEl: jeweriesPrevRef.current,
              nextEl: jeweriesNextRef.current,
            }}
            // autoplay={false}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=" px-4 py-2 w-full"
          >
            {collectionDetails
              .filter(
                (item) => item.category === "jeweries"
              )
              .map((x, i) => (
                <SwiperSlide key={i}>
                  <div
                    id={x.id}
                    className="group w-full h-[20rem] cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl rounded-lg pb-4"
                  >
                    <img
                      src={x.img}
                      alt="collection"
                      className="w-full h-[80%] object-cover rounded-t-lg "
                    />
                    <p className="text-xs font-bold py-2 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
                      price : ${x.price}
                    </p>
                    <p className="pt-2 border-t border-gray-200 text-[0.6rem] font-semibold text-gray-500 invisible group-hover:visible">
                      ADD TO CART
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div
            ref={jeweriesPrevRef}
            className=" absolute top-1/2 left-6 translate-y-1/2 z-10 swiper-button-prev text-gray-100 bg-gray-300 rounded-full w-8 h-8 "
          >
            <Icon
              icon="mdi:arrow-left-bold"
              width="24"
              height="24"
            />
          </div>
          <div
            ref={jeweriesNextRef}
            className="absolute top-1/2 right-6 translate-y-1/2 z-10  swiper-button-next  bg-gray-300 text-gray-100 rounded-full w-8 h-8"
          >
            <Icon
              icon="mdi:arrow-right-bold"
              width="24"
              height="24"
            />
          </div>
        </div>
      </section>
    </Section>
  );
}

export default Collections;
