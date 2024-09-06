import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Section from "../components/Section";
import Path from "../components/Path";
import useMutateStory from "../hooks/useMutateStory";

const AddSections = () => {
  const { id } = useParams();
  const [story, setStory] = useOutletContext();
  console.log(story);
  const { getSection } = useMutateStory(story);

  const { data, isLoading, error } = useQuery({
    queryKey: ["story"],
    queryFn: () => {},
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: () => {},
    onSuccess: () => {},
  });

  return (
    <div className="lg:w-1/2 w-full mx-auto  mt-12 ">
      <div className="w-full ">
        <Section section={getSection(story.startingSection)} />

        {}

        {/* {story.sections.map((section, index) => (
          <div key={index} className="">
            <Section section={section} paths={storyObj.paths} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AddSections;
