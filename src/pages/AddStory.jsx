import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AddStory = () => {
  const [story, setStory] = useState({
    title: "new Story",
    description: "Description new story",
    sections: [
      {
        id: 1,
        title: "section 1",
        paths: [1, 2],
        nextSection: null,
      },
      {
        id: 2,
        title: "section 2",
        paths: [],
        nextSection: null,
      },
      {
        id: 3,
        title: "section 3",
        paths: [],
        nextSection: null,
      },
      {
        id: 7,
        title: "section 7",
        paths: [],
        nextSection: null,
      },
      {
        id: 9,
        title: "section 9",
        paths: [],
        nextSection: null,
      },
    ],
    paths: [
      {
        id: 1,
        title: "path 1",
        leadsTo: 9,
      },
      {
        id: 2,
        title: "path 2",
        leadsTo: 7,
      },
      { id: 3, title: "path 3", leadsTo: null },
    ],
    startingSection: 1,
  });

  console.log(story);
  return (
    <div>
      <Outlet context={[story, setStory]} />
    </div>
  );
};

export default AddStory;
