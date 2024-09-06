import React, { useState } from "react";
import Section from "./Section";
import { PiPath } from "react-icons/pi";
import { PiArrowRight } from "react-icons/pi";

import { useOutletContext } from "react-router-dom";
import useMutateStory from "../hooks/useMutateStory";
import { Tooltip } from "react-tooltip";
import MyButton from "./MyButton";

const Path = ({ path }) => {
  const [story, setStory] = useOutletContext();
  const { getSection } = useMutateStory(story);
  const [expand, setExpand] = useState(false);

  const handleConnectSection = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setExpand((p) => !p)}
        className="ml-4  flex items-center gap-2 my-2   justify-end cursor-pointer "
      >
        <PiPath />{" "}
        <div className="bg-white p-2 rounded-lg shadow-md flex gap-3 justify-between items-center w-full">
          <h1>{path.title}</h1>
          <MyButton
            tooltipId={"connect-section-btn"}
            tooltipText={"Connect section"}
            onClick={handleConnectSection}
          >
            <PiArrowRight />
          </MyButton>
        </div>
      </div>
      {expand && path.leadsTo && <Section section={getSection(path.leadsTo)} />}
    </>
  );
};

export default Path;
