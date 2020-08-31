import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function NameTwitter({ speakerName, twitterUrl }) {
  return (
    <div className="NameTwitter">
      <h5>{speakerName}</h5>
      <a href={twitterUrl}>
        <Icon
          svg="twitter"
          classes="SvgIcon--Twitter"
          title={`${speakerName}'s Twitter`}
        />
      </a>
    </div>
  );
}
