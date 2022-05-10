import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export type CardData = {
  title: string;
  image: {
    src: string;
    height: string;
    width: string;
  };
  artist: string;
  price: string;
};

interface ICardProps {
  data: CardData;
}

const Card: React.FC<ICardProps> = ({ data }) => {
  return (
    <div className="card" data-testid="card">
      <LazyLoadImage
        src={data.image.src}
        alt={data.title}
        height={data.image.height}
        width={data.image.width}
        effect="blur"
      />
      <h4>{data.title}</h4>
      <h5>{data.price}</h5>
      <p className="artist-name">{data.artist}</p>
    </div>
  );
};

export default Card;
