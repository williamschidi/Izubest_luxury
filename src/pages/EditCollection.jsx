import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useGetCollectionQuery,
  useUpdateCollectionMutation,
} from "../components/apiSlice";
import Button from "../components/Button";

function EditCollection() {
  const { id } = useParams();

  const data = useGetCollectionQuery(id);
  const [updateCollection] = useUpdateCollectionMutation();
  const [postData, setPostData] = useState({
    category: "",
    name: "",
    comment: "",
    price: "",
    colors: [],
    design: null,
  });

  useEffect(() => {
    if (data) {
      let fetchData = data?.data?.getCollection;
      setPostData({
        category: fetchData?.category || "",
        name: fetchData?.name || "",
        price: fetchData?.price || "",
        colors: fetchData?.colors || [],
        comment: fetchData?.comment || "",
      });
    }
  }, []);

  function handleFilesOnChange(e) {
    const file = e.target.files[0];
    console.log(file);
    setPostData((prev) => ({ ...prev, design: file }));
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    if (name === "colors") {
      setPostData((prev) => ({
        ...prev,
        [name]: value.split(",").map((c) => c.trim()),
      }));
    } else {
      setPostData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("price", postData.price);

      formData.append("category", postData.category.trim());
      formData.append("name", postData.name.trim());
      formData.append("comment", postData.comment.trim());
      formData.append("design", postData.design);
      postData.colors.forEach((color) =>
        formData.append("colors", color)
      );

      formData.forEach((key, value) =>
        console.log(value, key)
      );
      await updateCollection({
        id,
        formData,
      }).unwrap();
      toast.success("Post successful updated", {
        className: "w-[500px] text-green-600",
      });
    } catch (err) {
      if (err) {
        toast.error(err.data.message, {
          className: "w-[500px] text-red-500",
        });
      } else {
        toast.error("Failed to update collection", {
          className: "w-[500px] text-red-500",
        });
      }
    }
  }

  return (
    <form
      className=" m-auto mt-[2rem] space-y-6 w-[100%] px-2 xs:px-4 lg:px-0 lg:w-[80%] pt-2 pb-6"
      onSubmit={handleSubmit}
    >
      <legend className="font-bold text-sm md:text-base text-center tracking-[.2em] pb-[2rem] bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
        EDIT COLLECTION POST
      </legend>
      <div className="flex flex-col md:flex-row items-start justify-start md:justify-between md:items-center gap-5">
        <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center w-[100%] gap-2">
          <label
            htmlFor="category"
            className="flex-[1.5] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Category :
          </label>
          <select
            required
            id="category"
            name="category"
            className="w-[100%] sm:flex-[6] rounded-md border border-yellow-600 text-xs py-1 font-bold text-yellow-800"
            value={postData.category}
            onChange={handleOnChange}
          >
            <option value=""></option>
            <option value="native">Native</option>
            <option value="corperate">Corperate</option>
            <option value="casual">Casual</option>
            <option value="foot wear">Foot Wear</option>
            <option value="jeweries">Jeweries</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:items-center gap-2 w-[100%]">
          <label
            htmlFor="heading"
            className="flex-1 text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            name :
          </label>
          <input
            type="text"
            placeholder="title"
            name="name"
            value={postData.name}
            id="heading"
            required
            onChange={handleOnChange}
            className="text-yellow-700 w-[100%] sm:flex-[4] md:w-[85%] text-xs font-semibold py-1 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
          />
        </div>
      </div>
      <div className="flex  flex-col md:flex-row items-start justify-start md:justify-between md:items-center gap-5 ">
        <div className="inline-flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:items-center gap-2 w-[100%]">
          <label
            htmlFor="price"
            className="flex-[1.5] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Price :
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleOnChange}
            value={postData.price}
            required
            className="w-[100%] sm:flex-[6] md:w-[80%] text-xs font-semibold py-[6px] text-yellow-700 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
          />
        </div>

        <div className="inline-flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:items-center gap-2 w-[100%]">
          <label
            htmlFor="color"
            className="flex-[1.5] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Color :
          </label>
          <input
            type="text"
            placeholder="color(s) (e.g red, black, green)"
            name="colors"
            onChange={handleOnChange}
            value={postData.colors.join(", ")}
            required
            className="w-[100%] sm:flex-[6]  text-xs font-semibold py-[6px] text-yellow-700 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start md:justify-between md:items-center gap-10 w-full ">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-1 w-[100%]">
          <label className="flex-1 text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Description :
          </label>
          <textarea
            required
            onChange={handleOnChange}
            rows="3"
            name="comment"
            className="w-[100%] sm:flex-[4] border border-yellow-600 p-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-800 resize-none text-yellow-700"
            value={postData.comment}
          ></textarea>
        </div>
        <div className="w-[100%] flex flex-col sm:flex-row justify-start items-start  sm:items-center gap-2">
          <label
            htmlFor="design"
            className="flex-1 text-xs font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Upload :
          </label>
          <input
            type="file"
            accept="image/*"
            id="design"
            name="design"
            className="text-xs py-1 font-semibold flex-[4]"
            onChange={handleFilesOnChange}
          />
        </div>
        <div className="w-[100%] md:w-[40%] flex justify-center items-center ">
          <Button>Submit Post</Button>
        </div>
      </div>
    </form>
  );
}

export default EditCollection;
