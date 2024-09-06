import React from "react";

const useMutateStory = (story) => {
  console.log(story);

  const getPaths = (sectionPaths) => {
    return story?.paths.filter((path) => sectionPaths.includes(path.id));
  };

  const addPath = (sectionId, text) => {
    const newPath = {
      id: "path" + Math.floor(Math.random() * 10000),
      text,
      sectionId,
      leadsToSection: null,
    };
  };

  const connectSection = (pathId, leadsToSectionId) => {};

  const setNextSection = (currentSectionId, nextSectionId) => {};

  const addSection = () => {};

  const getSection = (id) => {
    return story?.sections.find((section) => section.id === id);
  };

  return {
    addPath,
    getPaths,
    connectSection,
    addSection,
    getSection,
    setNextSection,
  };
};

export default useMutateStory;
