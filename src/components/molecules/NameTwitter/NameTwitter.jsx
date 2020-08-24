import React from "react";

import { Icon } from "../../atoms/Icons/Icon";
import "./NameTwitter.scss";

export function NameTwitter({speakerName, twitterUrl }) {
  return (
    <div className="name-twitter">
      <h5>{speakerName}</h5>
      <a href={twitterUrl}>
        <Icon svg="twitter" classes="svg-icon" title={`${speakerName}'s Twitter`} />
      </a>
    </div>  
  );
}
