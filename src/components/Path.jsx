import React from "react";
import Section from "./Section";

const Path = ({ path }) => {
  return (
    <>
      <div>
        <h2> path:{path.title}</h2>
      </div>
      {path.leadsTo && <Section section={path.leadsTo} />}
    </>
  );
};

export default Path;
