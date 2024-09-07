import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MyButton from "./MyButton";
import useMutateStory from "../hooks/useMutateStory";

const AddPath = ({ sectionId, closeModal }) => {
  const [story, setStory] = useOutletContext();
  const [pathTitle, setPathTitle] = useState("");

  const { addPath } = useMutateStory(story, setStory);

  const createPath = (e) => {
    e.preventDefault();
    if (!pathTitle) return;
    addPath(sectionId, pathTitle);
    closeModal();
  };
  return (
    <form onSubmit={createPath}>
      <input
        name="title"
        type="text"
        className="border-b border-black bg-inherit text-xl w-full mb-3  focus:outline-none"
        placeholder="Title"
        value={pathTitle}
        onChange={(e) => setPathTitle(e.target.value)}
        required
      />
      <div className="flex justify-end">
        <MyButton type={"submit"}>Add</MyButton>
      </div>
    </form>
  );
};

export default AddPath;
