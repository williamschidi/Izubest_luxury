import { useState } from "react";
import Button from "../container/Button";
import { toast } from "react-toastify";

function CreatePost() {
  const [postData, setPostData] = useState({
    category: "",
    name: "",
    comment: "",
    price: "",
    img: null,
  });

  function handleFilesOnChange(e) {
    const files = Array.from(e.target.files);
    setPostData((prev) => ({ ...prev, designs: files }));
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!postData.designs)
        return toast.error(
          "Please provide a design images"
        );

      const formData = new FormData();

      formData.append("Price", postData.price);

      formData.append("Category", postData.category.trim());
      formData.append("Title", postData.title.trim());
      formData.append("Comment", postData.comment.trim());

      if (postData.designs) {
        postData.designs.forEach((design) =>
          formData.append("Designs", design)
        );
      }
      formData.forEach((key, value) =>
        console.log(value, key)
      );
      toast.success("Post sent successful");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <form
      className=" m-auto mt-[2rem] space-y-6 w-[80%] pt-2 pb-6"
      onSubmit={handleSubmit}
    >
      <legend className="font-bold text-sm bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
        FILL UP YOUR BLOG POST
      </legend>
      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-between items-center w-[60%]">
          <label
            htmlFor="category"
            className="text-sm font-semibold flex-1 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Category:
          </label>
          <select
            required
            id="category"
            name="category"
            className="w-[80%] rounded-md border border-yellow-600 text-xs py-1 font-semibold text-yellow-700"
            value={postData.category}
            onChange={handleOnChange}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex justify-between items-center w-[45%]">
          <label
            htmlFor="heading"
            className="text-sm font-semibold flex-1 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Title :
          </label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={postData.title}
            id="heading"
            required
            onChange={handleOnChange}
            className="text-yellow-700 w-[100%] md:w-[85%] text-xs font-semibold py-1 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 ">
        <div className="inline-flex justify-between items-center w-[60%]">
          <label
            htmlFor="price"
            className="text-sm font-semibold flex-1 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent w-[15%]"
          >
            Price:
          </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleOnChange}
            value={postData.price}
            required
            className=" w-[100%] md:w-[80%] text-xs font-semibold py-[6px] text-yellow-700 px-2 rounded-md border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-800"
          />
        </div>
        <div className="w-[45%] pl-4">
          <label
            htmlFor="designs"
            className="text-xs font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent"
          >
            Upload Designs
          </label>
          <input
            required
            type="file"
            accept="image/*"
            id="designs"
            name="designs"
            multiple
            className="text-xs py-1 font-semibold"
            onChange={handleFilesOnChange}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <div className="flex justify-between items-start w-[57%]">
          <label className="text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Comment :
          </label>
          <textarea
            required
            onChange={handleOnChange}
            rows="3"
            name="comment"
            className="w-[80%] border border-yellow-600 p-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-yellow-800 resize-none text-yellow-700"
            value={postData.comment}
          ></textarea>
        </div>
        <div className="w-[40%] ">
          <Button>Submit Post</Button>
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
