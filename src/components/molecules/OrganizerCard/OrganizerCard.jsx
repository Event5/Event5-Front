import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function OrganizerCard({ name, email }) {
  return (
    <div className="OrganizerCard__Container">
      <div className="OrganizerCard__Info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{email}</p>
      </div>
      {/* <Icons svg="close" classes="svg-icon-close" title="close" /> */}
    </div>
  );
}
