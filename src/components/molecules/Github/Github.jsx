import React from "react";
import { ExternalLink } from "react-external-link";
import { Icon } from "../../atoms";

export function Github() {
  return (
    <ExternalLink
      className="Github__Container"
      href="https://github.com/Event5"
    >
      <div className="Github__Container-Icon">
        <Icon svg="github" classes="SvgIcon" title="github" />
        <span>See project in Github</span>
      </div>
      <p>Event5 team</p>
    </ExternalLink>
  );
}
