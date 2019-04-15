import React from "react";

const ImageCardFace = ({ src }) => {
  return (
    <div>
      <img src={src} className="img-fluid position-center" />
      <i className="flip-icon fas fa-sync" />
    </div>
  );
};

export default ImageCardFace;
