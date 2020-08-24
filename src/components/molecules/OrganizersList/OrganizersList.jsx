import React from "react";

export function OrganizersList({ firstOrganizer, secondOrganizer }) {
  return (
    <div className="OrganizersList">
      <h5>Organizers</h5>
      <ul>
          <li>{firstOrganizer}</li>
          <li>{secondOrganizer}</li>
      </ul>
    </div>  
  );
}
