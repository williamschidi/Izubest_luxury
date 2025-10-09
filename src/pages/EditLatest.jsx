import { useEffect, useState } from "react";
import Button from "../components/Button";
import {
  useGetLatestQuery,
  useUpdateLatestMutation,
} from "../components/apiSlice";
import { toast } from "react-toastify";

function EditLatest() {
  const { data } = useGetLatestQuery();
  const [updateLatest] = useUpdateLatestMutation();
  const latestCollection = data?.data?.latestCollection;

  const [latest, setLatest] = useState({
    name: "",
    description: "",
    video: null,
  });

  useEffect(() => {
    setLatest({
      name: latestCollection?.title || "",
      description: latestCollection?.description || "",
    });
  }, [latestCollection]);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setLatest((prev) => ({ ...prev, [name]: value }));
  }

  function handleVideoOnChange(e) {
    const file = e.target.files[0];

    setLatest((prev) => ({ ...prev, video: file }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = latestCollection._id;
    try {
      const formData = new FormData();
      formData.append("title", latest.name);
      formData.append("description", latest.description);
      if (latest.video) {
        formData.append("video", latest.video);
      }

      formData.forEach((key, value) =>
        console.log(value, ":", key)
      );

      await updateLatest({ id, formData }).unwrap();
      toast.success(
        "Latest collection successfully updated",
        { className: "w-[500px] text-green-600" }
      );

      setLatest({ name: "", description: "", video: null });
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        className: "w-[500px] text-green-600",
      });
    }
  }
  return (
    <form
      className=" m-auto mt-[2rem] space-y-6 w-[100%] px-2 xs:px-4 lg:px-0 lg:w-[80%] pt-2 pb-6"
      onSubmit={handleSubmit}
    >
      <legend className="font-bold text-sm md:text-base text-center tracking-[.2em] pb-[2rem] bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
        UPDATE LATEST POST
      </legend>
      <div className="space-y-14 md:space-y-10">
        <div className="flex flex-col mlg:flex-row items-start justify-start mlg:justify-between mlg:items-center gap-10">
          <div className="flex-1 flex flex-col sm:flex-row items-start justify-start sm:justify-between sm:items-center gap-2 w-[100%]">
            <label
              htmlFor="name"
              className="flex-1 sm:flex-[2] mlg:flex-[4] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
            >
              name :
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={latest.name}
              id="name"
              onChange={handleOnChange}
              className="text-yellow-700 w-[100%] sm:flex-[8] md:w-[85%] text-xs font-semibold py-1 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center gap-2">
            <label
              htmlFor="designs"
              className="flex-[2] text-xs sm:text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
            >
              Upload Video :
            </label>
            <input
              type="file"
              accept="video/*"
              id="designs"
              name="video"
              className="w-[100%] text-xs py-1 font-semibold sm:flex-[4] md:flex-[3]"
              onChange={handleVideoOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 w-[100%] ">
          <label className="flex-1 sm:flex-[2] mlg:flex-[1.5] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Description :
          </label>
          <textarea
            onChange={handleOnChange}
            rows="4"
            name="description"
            className="w-[100%] sm:flex-[8] border border-yellow-600 px-2 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-800 resize-none text-yellow-700"
            value={latest.description}
          ></textarea>
        </div>
      </div>
      <div className="pt-8">
        <Button>Update Latest</Button>
      </div>
    </form>
  );
}

export default EditLatest;
