import React from "react";

export function OrganizerCard({ name, email }) {
  return (
    <div className="OrganizerCard__Container">
      <div className="OrganizerCard__Info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
}
