import React, { useState } from "react";
import TextCardFace from "./TextCardFace";
import ImageCardFace from "./ImageCardFace";

const Card = ({ data }) => {
  const { type, back, front } = data;

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
          {/* front is always a short text type */}
          <TextCardFace type="shortText" text={front} flipCard={flipCard} />
        </div>
        <div className={`flip-card-back ${bottomFadeCss}`}>
          {type === "image" ? (
            <ImageCardFace src={back} />
          ) : (
            <TextCardFace type={type} text={back} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
