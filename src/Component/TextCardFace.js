import React from "react";
import PropTypes from "prop-types";

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

TextCardFace.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  flipCard: PropTypes.bool.isRequired
};

export default TextCardFace;
