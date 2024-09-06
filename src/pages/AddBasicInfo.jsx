import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const AddBasicInfo = () => {
  const [story, setStory] = useOutletContext();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setStory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/add-story/add-sections/123");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} action="" className="mt-10">
        <input
          name="title"
          type="text"
          className="border-b border-black bg-inherit text-5xl w-full mb-12  focus:outline-none"
          placeholder="Title"
          required
          onChange={handleInputChange}
          value={story.title}
        />

        <textarea
          name="description"
          id=""
          className="border-b border-black bg-inherit text-5xl w-full focus:outline-none min-h-24"
          placeholder="Desription"
          onChange={handleInputChange}
          value={story.description}
        ></textarea>
        <div className="flex justify-end mt-6">
          <button className="border border-black px-8 py-3 rounded-xl">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBasicInfo;
