import React from "react";
import Path from "./Path";
import { useOutletContext } from "react-router-dom";

const Section = ({ section, paths, sections }) => {
  const [story, setStory] = useOutletContext();
  console.log(story);
  const getPaths = () => {
    const sectionsPath = paths.filter((path) => {
      return section.paths.includes(path.id);
    });
    return sectionsPath;
  };

  const getSection = (id) => {
    return sections.find((section) => section.id === id);
  };

  return (
    <>
      <div className="border border-black w-48 h-16 rounded-lg ">
        <h3> section:{section.title}</h3>
      </div>
      {section.paths &&
        getPaths().map((path, index) => <Path key={index} path={path} />)}
      {section.nextSection && <Section section={section.nextSection} />}
    </>
  );
};

export default Section;
