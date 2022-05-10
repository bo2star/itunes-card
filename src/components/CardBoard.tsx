import React from "react";
import { Imitem } from "../models";
import Card from "./layouts/Card";

import "./CardBoard.css";

export interface ICardBoardProps {
  tunes: Imitem[] | null;
}

const CardBoard: React.FC<ICardBoardProps> = ({ tunes }) => {
  return (
    <div className="board" data-testid="board">
      {tunes &&
        tunes.map((item: Imitem) => (
          <Card
            key={item.id.label}
            data={{
              title: item.title.label,
              price: item["im:price"].label,
              artist: item["im:artist"].label,
              image: {
                src: item["im:image"][item["im:image"].length - 1].label,
                height:
                  item["im:image"][item["im:image"].length - 1].attributes
                    .height,
                width:
                  item["im:image"][item["im:image"].length - 1].attributes
                    .height,
              },
            }}
          />
        ))}
    </div>
  );
};

export default CardBoard;
