import React from "react";
import { socials } from "../../data";
import SocialIcon from "./SocialIcon";
import "./socials.css";

function Socials() {
  return (
    <div className="icons">
      {socials.map(props => (
        <SocialIcon
          Icon={props.Icon}
          iconClass={props.iconClass}
          name={props.name}
          key={props.name}
        />
      ))}
    </div>
  );
}

export default Socials;
