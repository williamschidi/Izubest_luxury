import { NavLink } from "react-router-dom";
import Section from "./Section";
import { useGetAllCollectionsQuery } from "./apiSlice";
import { useEffect, useState } from "react";

// const collectionDetails = [
//   {
//     id: "01",
//     name: "senator01",
//     category: "native",
//     price: 150,
//     img: "wear-img/img1.jpg",
//   },
//   {
//     id: "02",
//     name: "senator02",
//     category: "native",
//     price: 100,
//     img: "wear-img/img2.jpg",
//   },
//   {
//     id: "03",
//     name: "plain",
//     category: "casual",
//     price: 140,
//     img: "wear-img/casual.webp",
//   },
//   {
//     id: "04",
//     name: "plain",
//     category: "casual",
//     price: 100,
//     img: "wear-img/casual1.webp",
//   },
//   {
//     id: "05",
//     name: "plain",
//     category: "casual",
//     price: 130,
//     img: "wear-img/casual2.webp",
//   },
//   {
//     id: "06",
//     name: "plain",
//     category: "casual",
//     price: 100,
//     img: "wear-img/casual3.webp",
//   },
//   {
//     id: "07",
//     name: "plain",
//     category: "casual",
//     price: 110,
//     img: "wear-img/casual4.png",
//   },
//   {
//     id: "08",
//     name: "plain",
//     category: "casual",
//     price: 90,
//     img: "wear-img/casual5.png",
//   },
//   {
//     id: "09",
//     name: "plain",
//     category: "casual",
//     price: 80,
//     img: "wear-img/casual6.jpg",
//   },
//   {
//     id: "10",
//     name: "suite",
//     category: "corperate",
//     price: 200,
//     img: "wear-img/suite.webp",
//   },
//   {
//     id: "11",
//     name: "suite",
//     category: "corperate",
//     price: 180,
//     img: "wear-img/suite1.webp",
//   },
//   {
//     id: "12",
//     name: "suite",
//     category: "corperate",
//     price: 100,
//     img: "wear-img/suite2.webp",
//   },
//   {
//     id: "13",
//     name: "suite",
//     category: "corperate",
//     price: 140,
//     img: "wear-img/suite3.webp",
//   },
//   {
//     id: "14",
//     name: "suite",
//     category: "corperate",
//     price: 140,
//     img: "wear-img/suite4.webp",
//   },

//   {
//     id: "16",
//     name: "plain1",
//     category: "casual",
//     price: 100,
//     img: "wear-img/img5.jpg",
//   },
//   {
//     id: "17",
//     name: "senator5",
//     category: "native",
//     price: 140,
//     img: "wear-img/img5.webp",
//   },
//   {
//     id: "18",
//     name: "senator6",
//     category: "native",
//     price: 160,
//     img: "wear-img/img8.jpg",
//   },
//   {
//     id: "19",
//     name: "senator7",
//     category: "native",
//     price: 170,
//     img: "wear-img/img10.jpg",
//   },
//   {
//     id: "20",
//     name: "senator8",
//     category: "native",
//     price: 120,
//     img: "wear-img/img11.jpg",
//   },
//   {
//     id: "21",
//     name: "shoe",
//     category: "foot-wear",
//     price: 140,
//     img: "wear-img/shoe1.webp",
//   },
//   {
//     id: "22",
//     name: "shoe",
//     category: "foot-wear",
//     price: 110,
//     img: "wear-img/shoe2.webp",
//   },
//   {
//     id: "23",
//     name: "shoe",
//     category: "foot-wear",
//     price: 150,
//     img: "wear-img/shoe3.webp",
//   },
//   {
//     id: "24",
//     name: "shoe",
//     category: "foot-wear",
//     price: 190,
//     img: "wear-img/shoe4.webp",
//   },
//   {
//     id: "25",
//     name: "sandals",
//     category: "foot-wear",
//     price: 190,
//     img: "wear-img/sandals.webp",
//   },
//   {
//     id: "26",
//     name: "sandals",
//     category: "foot-wear",
//     price: 190,
//     img: "wear-img/foot-wear-1.webp",
//   },
//   {
//     id: "27",
//     name: "nakelace",
//     category: "jeweries",
//     price: 100,
//     img: "wear-img/nakelace.webp",
//   },
//   {
//     id: "28",
//     name: "nakelace",
//     category: "jeweries",
//     price: 190,
//     img: "wear-img/nakelace1.webp",
//   },
//   {
//     id: "28",
//     name: "wrist-watch",
//     category: "jeweries",
//     price: 190,
//     img: "wear-img/wristwatch.webp",
//   },
//   {
//     id: "29",
//     name: "wrist-watch",
//     category: "jeweries",
//     price: 150,
//     img: "wear-img/watch.webp",
//   },
//   {
//     id: "29",
//     name: "wrist-watch",
//     category: "jeweries",
//     price: 100,
//     img: "wear-img/wristwatch1.webp",
//   },
//   {
//     id: "30",
//     name: "wrist-watch",
//     category: "jeweries",
//     price: 120,
//     img: "wear-img/wristwatch2.webp",
//   },
//   {
//     id: "31",
//     name: "wrist-watch",
//     category: "jeweries",
//     price: 200,
//     img: "wear-img/wristwatch3.webp",
//   },
// ];

function Collection() {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCollectionsQuery({ page: 1 });

  const baseUrl = `https://res.cloudinary.com/djldlfhm1/image/upload`;

  return (
    <Section>
      <section
        id="collections"
        className="text-center pt-[3.5rem] pb-[2rem]"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          The Collection
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
          The Collection
        </h2>
        <p className="text-gray-700 text-md sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:px-0 px-6">
          Browse our seasonal collections inspired by urban
          minimalism and natural textures. Each look is
          crafted to empower your style journey.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 mlg:grid-cols-4 lg:grid-cols-5 gap-1 max-w-[85%] mx-auto">
          {data?.collections.map((x) => (
            <NavLink
              to={`/product/${x._id}`}
              key={x._id}
              className="relative group"
            >
              <div
                id={x._id}
                className="relative group aspect-[3/4] cursor-pointer  shadow-lg rounded-lg  overflow-hidden"
              >
                <img
                  src={`${baseUrl}/w_200,h_300,c_fill,g_auto,f_auto,q_auto/${x?.design?.id}`}
                  alt="collection"
                  className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white font-semibold text-lg ">
                    VIEW DETAILS...
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        {page > 1 ? (
          <div className="w-full flex justify-center items-center py-8">
            <div className="space-x-4 rounded-full py-1 px-6 bg-gray-200">
              {Array.from({ length: page }, (_, i) => (
                <button
                  onClick={() => setPage(i + 1)}
                  key={i}
                  className={`${
                    page === i + 1
                      ? "bg-gradient-to-tr from-yellow-600 to-yellow-400 text-gray-100 rounded-full"
                      : "text-gray-600"
                  } px-2 bg-gradient-to-tr hover:from-yellow-600 hover:to-yellow-400 hover:text-gray-100 rounded-full`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </Section>
  );
}

export default Collection;
