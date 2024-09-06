import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AddStory = () => {
  const [story, setStory] = useState({
    title: "",
    description: "",
  });

  console.log(story);
  return (
    <div>
      <Outlet context={[story, setStory]} />
    </div>
  );
};

export default AddStory;
