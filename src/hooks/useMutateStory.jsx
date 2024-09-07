import React from "react";

const useMutateStory = (story, setStory) => {
  console.log(setStory);
  const getPaths = (sectionId) => {
    return story?.paths.filter((path) => path.sectionId === sectionId);
  };

  const addPath = (sectionId, title) => {
    const newPathId = "path" + Math.floor(Math.random() * 10000);
    const newPath = {
      id: newPathId,
      title,
      sectionId,
      leadsTo: null,
    };
    setStory((prev) => ({
      ...prev,
      paths: [...prev.paths, newPath],
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? { ...section, paths: [...section.paths, newPathId] }
          : section
      ),
    }));
  };

  const deletePath = (sectionId, pathId) => {
    setStory((prev) => ({
      ...prev,
      paths: prev.paths.filter((path) => path.id !== pathId),
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              paths: section.paths.filter((path) => path !== pathId),
            }
          : section
      ),
    }));
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
    deletePath,
    connectSection,
    addSection,
    getSection,
    setNextSection,
  };
};

export default useMutateStory;
