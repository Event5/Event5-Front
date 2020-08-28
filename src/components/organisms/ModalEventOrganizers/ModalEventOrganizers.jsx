import React from "react";

import { Button } from "../../atoms";
import { OrganizerCard } from "../../molecules";

export function ModalOrganizers() {
  return (
    <div className="ModalOrganizers">
      <h2>Event Organizers</h2>
      <OrganizerCard
        name="Nombre del Organizador"
        email="organizador@event.com"
      />
      <OrganizerCard
        name="Nombre del Organizador"
        email="organizador@event.com"
      />
      <OrganizerCard
        name="Nombre del Organizador"
        email="organizador@event.com"
      />
      <OrganizerCard
        name="Nombre del Organizador"
        email="organizador@event.com"
      />
      <h2>Add Organizer</h2>
      <form className="ModalOrganizers__Form" action="">
        <select>
          <option value="" disabled selected>
            Link Organizer
          </option>
          <option value="Hector Reyes">Hector Reyes</option>
          <option value="Den Velez">Den Velez</option>
          <option value="Jose Luis Chavez">Jose Luis Chavez</option>
          <option value="Cristian Cortes">Cristian Cortes</option>
          <option value="Sergio Estrella">Sergio Estrella</option>
        </select>
        <div className="ModalSession__Form__Btn">
          <Button text="Save Changes" type="primary" color="first" />
          <a>Discard Changes</a>
          <a>Delete Session</a>
        </div>
      </form>
    </div>
  );
}
