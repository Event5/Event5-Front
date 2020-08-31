import React from "react";
import { ExternalLink } from "react-external-link";

import { Icon } from "../../atoms/Icons/Icon";

export function IconName({ icon, name, url }) {
  return (
    <div className="IconName">
      <ExternalLink href={url}>
        <Icon svg={icon} classes="SvgIcon--Big" title={icon} />
        <h6>{name}</h6>
      </ExternalLink>
    </div>
  );
}
