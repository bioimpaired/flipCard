import React from "react";
import PropTypes from "prop-types";

const ImageCardFace = ({ src }) => {
  return (
    <div>
      <img src={src} className="img-fluid position-center" />
      <i className="flip-icon fas fa-sync" />
    </div>
  );
};

ImageCardFace.propTypes = {
  src: PropTypes.string.isRequired
};

export default ImageCardFace;
