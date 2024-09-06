import React from "react";
import Path from "./Path";
import { useOutletContext } from "react-router-dom";
import useMutateStory from "../hooks/useMutateStory";
import MyButton from "./MyButton";

const Section = ({ section, paths, sections }) => {
  const [story, setStory] = useOutletContext();
  const { getPaths } = useMutateStory(story);
  console.log(section);

  //   const getPaths = () => {
  //     const sectionsPath = paths.filter((path) => {
  //       return section.paths.includes(path.id);
  //     });
  //     return sectionsPath;
  //   };

  const getSection = (id) => {
    return sections.find((section) => section.id === id);
  };

  return (
    <>
      <div className="p-3  w-full h-32 rounded-lg bg-white shadow-md flex flex-col">
        <div className="flex-grow">
          <h3> {section.title}</h3>
        </div>

        <div className="flex justify-end items-center gap-2">
          <div className="space-x-2">
            {section.paths.length === 0 ? (
              <MyButton
                tooltipId={"addnew-section-btn"}
                tooltipText={"Add a new section"}
              >
                Add next section
              </MyButton>
            ) : null}
            <MyButton tooltipId={"add-path-btn"} tooltipText={"Add a new path"}>
              Add paths
            </MyButton>
          </div>
          {section.paths.length ? (
            <h4 className="text-xs text-end">
              {` ${section.paths.length} path ${
                section.paths.length > 1 ? "options" : "option"
              }`}
            </h4>
          ) : null}
        </div>
      </div>
      {section.paths &&
        getPaths(section.paths).map((path, index) => (
          <div key={index} className="">
            <Path path={path} />
          </div>
        ))}
      {section.nextSection && <Section section={section.nextSection} />}
    </>
  );
};

export default Section;
