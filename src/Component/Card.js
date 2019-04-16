import React, { useState } from "react";
import PropTypes from "prop-types";
import TextCardFace from "./TextCardFace";
import ImageCardFace from "./ImageCardFace";

const Card = ({ data }) => {
  const { type, backText, frontText, imageSrc } = data;

  const [flipCard, setFlipCard] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setFlipCard(!flipCard);
  };

  let rotateCss = flipCard && "rotate-card";
  let bottomFadeCss = type === "longText" && "bottom-fade";
  let showTopBarCss = flipCard ? "invisible" : "top-bar";

  return (
    <div className="flip-card mx-auto">
      <div onClick={handleClick} className={`flip-card-inner ${rotateCss}`}>
        <div className="flip-card-front">
          <div className={`${showTopBarCss}`} />
          <TextCardFace type="shortText" text={frontText} flipCard={flipCard} />
        </div>
        <div className={`flip-card-back ${bottomFadeCss}`}>
          {type === "image" ? (
            <ImageCardFace src={imageSrc} />
          ) : (
            <TextCardFace type={type} text={backText} />
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    frontText: PropTypes.string.isRequired,
    backText: PropTypes.string,
    imageSrc: PropTypes.string,
    type: PropTypes.string.isRequired
  })
};

export default Card;
