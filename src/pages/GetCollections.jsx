import { Icon } from "@iconify/react/dist/iconify.js";
import {
  useDeleteCollectionMutation,
  useGetAllCollectionsQuery,
  useLazyGetSearchCollectionQuery,
} from "../components/apiSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function GetCollections() {
  const [page, setPage] = useState(1);
  const [curIndex, setCurIndex] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const limit = 5;
  const data = useGetAllCollectionsQuery({
    page,
    limit,
  });
  const [deleteCollection] = useDeleteCollectionMutation();
  const [triggerSearch, { data: searchData }] =
    useLazyGetSearchCollectionQuery();

  let collections = data?.currentData?.collections;
  const numPage = data?.currentData?.numPage;

  function handleSubmit(e) {
    if (e.key === "Enter" && search.trim() !== "") {
      triggerSearch(search);
    }
  }

  function handleEdit(id) {
    navigate(`/admin/dashboard/edit-collection/${id}`);
  }
  async function handleDelete(id) {
    try {
      await deleteCollection(id).unwrap();
      toast.success("Collection successfully deleted", {
        className: "w-[500px] text-green-600",
      });
    } catch (err) {
      toast.error(err.message, {
        className: "w-[500px] text-green-600",
      });
    }
  }

  function handleNext() {
    if (curIndex === numPage) {
      return;
    } else {
      setCurIndex((curInd) => curInd + 1);
      setPage((curPage) => curPage + 1);
    }
  }
  function handlePrev() {
    if (curIndex === 1) {
      return;
    } else {
      setCurIndex((curIndex) => curIndex - 1);
      setPage((curPage) => curPage - 1);
    }
  }
  function handlePage(num) {
    setPage(num);
    setCurIndex(num);
  }

  // if (search) {
  //   console.log(
  //     "matched result",
  //     searchData?.collections[0]
  //   );
  // } else {
  //   console.log(collections);
  // }

  return (
    <div className="w-[80%] mx-auto pt-4 space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-sm md:text-base text-center tracking-[.2em] bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          EDIT COLLECTION
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="search by category or name "
            name="collection"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSubmit}
            className="w-[12rem] md:w-[16rem] mlg:w-[20rem] rounded-full border border-yellow-600 pl-10 pr-3 text-[.65rem] md:text-xs py-[3px] md:py-1 focus:outline-transparent focus:ring focus:ring-yellow-700"
          />
          <button className="absolute inset-y-0 left-2">
            <Icon
              icon="mynaui:search"
              width="24"
              height="24"
              className="w-[.9rem] h-[.9rem] md:w-[1rem] md:h-[1rem] text-yellow-800"
            />
          </button>
        </div>
      </div>
      <div className="space-y-3 pb-4">
        {search && searchData
          ? searchData?.collections.map(
              (collection, ind) => (
                <div
                  className="flex justify-between items-center w-[95%]  rounded-l-md rounded-r-md  text-sm border-l-4 border-l-yellow-800/80 py-1 bg-gradient-to-tr from-stone-50 to-stone-100 shadow-lg"
                  key={ind}
                >
                  <div className="flex justify-between items-center px-4 py-1 ">
                    <span className="w-[6rem]">
                      <img
                        src={collection.design.url}
                        alt="img-collection"
                        className="w-[2rem] h-[2rem] rounded-full"
                      />
                    </span>

                    <span className="bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent  font-semibold capitalize w-[8rem]">
                      {collection.category}
                    </span>
                    <span className="bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent  font-semibold capitalize w-[9rem]">
                      {collection.name}
                    </span>
                  </div>

                  <div className="space-x-8 bg-stone-50 pl-4 pr-3">
                    <button
                      className="px-2  py-1 rounded-full hover:scale-105 transition-all active:scale-95 "
                      onClick={() =>
                        handleEdit(collection._id)
                      }
                    >
                      <Icon
                        icon="iconamoon:edit-fill"
                        width="24"
                        height="24"
                      />
                    </button>
                    <button
                      className=" px-2 py-1 rounded-full hover:scale-105 transition-all active:scale-95"
                      onClick={() =>
                        handleDelete(collection._id)
                      }
                    >
                      <Icon
                        icon="bx:trash"
                        width="24"
                        height="24"
                      />
                    </button>
                  </div>
                </div>
              )
            )
          : collections?.map((collection, ind) => (
              <div
                className="flex justify-between items-center w-[100%] md:w-[95%] mlg:w-[90%]  rounded-l-md rounded-r-md text-[.65rem] md:text-sm border-l-4 border-l-yellow-800/80 py-1 bg-gradient-to-tr from-stone-50 to-stone-100 shadow-lg"
                key={ind}
              >
                <div className="flex justify-between items-center px-3 md:px-4 py-1 ">
                  <span className="w-[4rem] mlg:w-[6rem]">
                    <img
                      src={collection.design.url}
                      alt="img-collection"
                      className="w-[2rem] h-[2rem] md:w-[2.4rem] md:h-[2.4rem] rounded-full"
                    />
                  </span>

                  <span className="bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent font-semibold capitalize w-[6rem] mlg:w-[8rem]">
                    {collection.category}
                  </span>
                  <span className="bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent  font-semibold capitalize w-[6rem] mlg:w-[9rem]">
                    {collection.name}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-6 bg-stone-50 px-2">
                  <button
                    className="px-2 py-1 rounded-full hover:scale-105 transition-all active:scale-95 "
                    onClick={() =>
                      handleEdit(collection._id)
                    }
                  >
                    <Icon
                      icon="iconamoon:edit-fill"
                      width="24"
                      height="24"
                      className="w-[1rem] md:w-[1.2rem] mlg:w-[1.4rem]"
                    />
                  </button>
                  <button
                    className=" px-2 py-1 rounded-full hover:scale-105 transition-all active:scale-95"
                    onClick={() =>
                      handleDelete(collection._id)
                    }
                  >
                    <Icon
                      icon="bx:trash"
                      width="24"
                      height="24"
                      className="w-[1rem] md:w-[1.2rem] mlg:w-[1.4rem]"
                    />
                  </button>
                </div>
              </div>
            ))}

        {!searchData && numPage > 1 && (
          <div className="flex items-center justify-end pt-10 w-[90%] gap-4">
            <button
              onClick={handlePrev}
              disabled={curIndex === 1}
            >
              <Icon
                icon="mdi:code-less-than"
                width="24"
                height="24"
                className={`w-[2.4rem] h-[2.4rem] hover:text-yellow-800/60 ${
                  curIndex === 1 ? "text-gray-300" : ""
                }`}
              />
            </button>
            <div className="space-x-4">
              {Array.from({ length: numPage }, (_, ind) => (
                <button
                  key={ind}
                  onClick={() => {
                    handlePage(ind + 1);
                  }}
                  className={`text-gray-800 px-2 ${
                    page === ind + 1
                      ? "bg-gradient-to-tr from-yellow-600/60 to-yellow-800/60 text-white rounded-full"
                      : ""
                  }`}
                >
                  {ind + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={curIndex === numPage}
            >
              <Icon
                icon="mdi:code-greater-than"
                width="24"
                height="24"
                className={`w-[2.4rem] h-[2.4rem] hover:text-yellow-800/60 ${
                  curIndex === numPage
                    ? "text-gray-300"
                    : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetCollections;
