import React, { useState } from "react";
import Section from "./Section";
import { HiXMark } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";

import { PiPath } from "react-icons/pi";
import { PiArrowRight } from "react-icons/pi";

import { useOutletContext } from "react-router-dom";
import useMutateStory from "../hooks/useMutateStory";
import { Tooltip } from "react-tooltip";
import MyButton from "./MyButton";
import MyModal from "./MyModal";

const Path = ({ path, onPathClick, isPathExpanded }) => {
  const [story, setStory] = useOutletContext();
  const { getSection, deletePath } = useMutateStory(story, setStory);
  const [modalOpen, setModalOpen] = useState(false);

  const handleConnectSection = (e) => {
    e.stopPropagation();
  };

  const removePath = () => {
    deletePath(path.sectionId, path.id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <MyModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <h3>
            Are you sure you want to remove this path? This action will remove
            the whole branch
          </h3>
          <div className="flex justify-end gap-3 mt-3">
            <MyButton onClick={closeModal}>Cancel</MyButton>
            <MyButton onClick={removePath}>Delete</MyButton>
          </div>
        </div>
      </MyModal>
      <div
        onClick={onPathClick}
        className="ml-4  flex items-center gap-2 my-2   justify-end cursor-pointer "
      >
        <PiPath />{" "}
        <div className="bg-white p-2 rounded-lg shadow-md flex gap-3 justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <MyButton
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
            >
              <HiXMark />
            </MyButton>
            <h1>{path.title}</h1>
          </div>
          {path.leadsTo ? (
            <HiChevronDown
              style={{
                rotate: isPathExpanded ? "180deg" : "0deg",
                transition: "all 400ms",
              }}
            />
          ) : (
            <MyButton
              tooltipId={"connect-section-btn"}
              tooltipText={"Connect section"}
              onClick={handleConnectSection}
            >
              <PiArrowRight />
            </MyButton>
          )}
        </div>
      </div>
      {isPathExpanded && path.leadsTo && (
        <Section section={getSection(path.leadsTo)} />
      )}
    </>
  );
};

export default Path;
