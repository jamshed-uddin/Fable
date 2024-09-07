import React, { useState } from "react";
import Path from "./Path";
import { useOutletContext } from "react-router-dom";
import useMutateStory from "../hooks/useMutateStory";
import MyButton from "./MyButton";
import MyModal from "./MyModal";
import AddPath from "./AddPath";

const Section = ({ section, paths, sections }) => {
  const [story, setStory] = useOutletContext();
  const [openModal, setOpenModal] = useState(false);
  const { getPaths } = useMutateStory(story);
  const [expandedPath, setExpandedPath] = useState(null);

  const expandPath = (pathId) => {
    if (expandedPath === pathId) {
      setExpandedPath("");
    } else {
      setExpandedPath(pathId);
    }
  };

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <MyModal
        isOpen={openModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <AddPath sectionId={section.id} closeModal={closeModal} />
      </MyModal>
      <div className="p-3  w-full h-32 rounded-lg bg-white shadow-md flex flex-col">
        <div className="flex-grow">
          <h3> {section.title}</h3>
        </div>

        <div className="flex justify-end items-center gap-2">
          <div className="space-x-2">
            {section.paths.length === 0 ? (
              <MyButton
                tooltipId={"addnew-section-btn"}
                tooltipText={"Add a new section next to the current section"}
              >
                Add next section
              </MyButton>
            ) : null}
            <MyButton
              tooltipId={"add-path-btn"}
              tooltipText={"Add a new path"}
              onClick={() => setOpenModal(true)}
            >
              Add paths
            </MyButton>
          </div>
          {section.paths.length ? (
            <h4
              onClick={() => setExpandedPath(null)}
              className="text-xs text-end cursor-pointer hover:underline text-blue-600"
            >
              {` ${section.paths.length} path ${
                section.paths.length > 1 ? "options" : "option"
              }`}
            </h4>
          ) : null}
        </div>
      </div>
      {section.paths &&
        getPaths(section.id).map((path, index) => (
          <div key={index} className="">
            <Path
              path={path}
              onPathClick={() => expandPath(path.id)}
              isPathExpanded={expandedPath === path.id}
            />
          </div>
        ))}
      {section.nextSection && <Section section={section.nextSection} />}
    </>
  );
};

export default Section;
