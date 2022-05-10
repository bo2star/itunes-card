import React, { ChangeEvent } from "react";
import { useSearch } from "../context/SearchContext";

import "./Footer.css";

const Footer: React.FC = () => {
  const { changeArtist, changePrice, changeTitle } = useSearch();

  return (
    <div className="footer" data-testid="footer">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Title"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            changeTitle(event.target.value)
          }
        />
        <input
          type="number"
          placeholder="Search by Price"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            changePrice(parseFloat(event.target.value))
          }
        />
        <input
          type="text"
          placeholder="Search by Artist"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            changeArtist(event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default Footer;
