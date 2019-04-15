import React from "react";

const TextCardFace = ({ type, text, flipCard }) => {
  return (
    <div className={`${flipCard && "invisible"}`}>
      <div className={`position-center ${type === "longText" && "long-text"}`}>
        {text}
      </div>
      <i className="flip-icon fas fa-sync" />
    </div>
  );
};

export default TextCardFace;
