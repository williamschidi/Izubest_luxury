import { NavLink } from "react-router-dom";

import {
  useGetAllCollectionsQuery,
  useGetSearchCollectionQuery,
} from "../feature/apiFeatures/apiSlice";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function Collection({ collection }) {
  const [page, setPage] = useState(1);
  const { data } = useGetAllCollectionsQuery(
    { page, limit: 15 },
    { refetchOnMountOrArgChange: true }
  );

  const { data: searchedCollection } =
    useGetSearchCollectionQuery(collection, {
      skip: !collection,
    });

  const baseUrl = `https://res.cloudinary.com/djldlfhm1/image/upload`;

  return (
    <section
      data-aos="fade-up"
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
        {(
          searchedCollection?.collections ??
          data?.collections
        )?.map((x) => (
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
      {data?.numPage > 1 && (
        <div className="w-full flex justify-center items-center py-8">
          <div className="flex items-center space-x-6 rounded-full py-2 px-2 ">
            <button
              onClick={() =>
                setPage((prev) => Math.max(prev - 1, 1))
              }
              disabled={page === 1}
              className={`flex justify-center items-center rounded-full w-[1.6rem] h-[1.6rem] border border-gray-500 shadow-xl ${
                page === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:text-yellow-600"
              }`}
            >
              <Icon
                icon="ic:round-less-than"
                width="24"
                height="24"
                className="w-[1.2rem] h-[1.2rem]"
              />
            </button>
            {Array.from(
              { length: data?.numPage },
              (_, i) => (
                <button
                  onClick={() => setPage(i + 1)}
                  key={i}
                  className={`shadow-xl ${
                    page === i + 1
                      ? "bg-gradient-to-tr from-yellow-600 to-yellow-400 text-gray-100 rounded-full"
                      : "text-gray-600"
                  } px-2 bg-gradient-to-tr hover:text-yellow-600 rounded-full`}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() =>
                setPage((prev) =>
                  Math.min(prev + 1, data?.numPage)
                )
              }
              disabled={page === data?.numPage}
              className={`flex justify-center items-center w-[1.6rem] h-[1.6rem] border border-gray-500  rounded-full shadow-xl ${
                page === data.numPage
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:text-yellow-600"
              }`}
            >
              <Icon
                icon="ic:round-greater-than"
                width="24"
                height="24"
                className="w-[1.2rem] h-[1.2rem]"
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Collection;
