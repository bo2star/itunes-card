import React from "react";

import "./Toggler.css";

export interface ITogglerProps {
  defaultChecked: boolean;
  rightLabel: string;
  leftLabel: string;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggler: React.FC<ITogglerProps> = ({
  defaultChecked,
  rightLabel,
  leftLabel,
  onToggle,
}) => {
  return (
    <div className="toggler" data-testid="toggler">
      <span>{leftLabel}</span>
      <label className="switch">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onToggle}
        />
        <span className="slider round" data-testid="toggle-slider"></span>
      </label>
      <span>{rightLabel}</span>
    </div>
  );
};

export default Toggler;
