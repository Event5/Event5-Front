import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export function OrganizerCard({ photo, name, email }) {
  return (
    <div className="organizer-card__container">
      <div className="organizer-card__info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{email}</p>
      </div>
      <Icon svg="close" classes="svg-icon-close" title="close" />
    </div>
  );
}
