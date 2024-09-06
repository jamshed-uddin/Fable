import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Section from "../components/Section";
import Path from "../components/Path";

const AddSections = () => {
  const { id } = useParams();
  const [story, setStory] = useOutletContext();
  console.log(story);

  const { data, isLoading, error } = useQuery({
    queryKey: ["story"],
    queryFn: () => {},
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: () => {},
    onSuccess: () => {},
  });

  const storyObj = {
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
        leadsTo: 8,
      },
      {
        id: 2,
        title: "path 2",
        leadsTo: null,
      },
      { id: 3, title: "path 3", leadsTo: null },
    ],
  };

  return (
    <div className="flex justify-center mt-12">
      <div>
        {storyObj.sections.map((section, index) => (
          <div key={index} className="">
            <Section section={section} paths={storyObj.paths} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSections;
