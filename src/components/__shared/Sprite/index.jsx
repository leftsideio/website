import React from "react";
import "./sprites.svg";

const Sprite = ({ name, ...rest }) => (
  <svg {...rest}>
    <use xlinkHref={`#sprites_${name}`} />
  </svg>
);

export default Sprite;
