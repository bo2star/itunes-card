import React, { ChangeEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Toggler from "./layouts/Toggler";

import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked) {
      navigate("/albums");
    } else {
      navigate("/songs");
    }
  };

  return (
    <header className="header" data-testid="header">
      <nav className="navbar">
        <h3>ITunes Apple Store</h3>
        <Toggler
          defaultChecked={location!.pathname === "/albums"}
          rightLabel="Albums"
          leftLabel="Songs"
          onToggle={handleToggle}
        />
      </nav>
    </header>
  );
};

export default Header;
