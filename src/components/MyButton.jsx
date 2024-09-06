import React from "react";
import { Tooltip } from "react-tooltip";

const MyButton = ({ children, tooltipText, tooltipId, onClick }) => {
  return (
    <>
      <button
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltipText}
        data-tooltip-delay-hide={300}
        onClick={onClick}
      >
        {children}
      </button>
      <Tooltip
        id={tooltipId}
        style={{
          backgroundColor: "whiteSmoke",
          boxShadow: "0 0 6px 0 gray",
          color: "black",
          borderRadius: "16px",
        }}
      />
    </>
  );
};

export default MyButton;
