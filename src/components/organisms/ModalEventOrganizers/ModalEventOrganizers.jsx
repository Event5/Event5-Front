import React from "react";

import { Button, Input } from "../../atoms";
import { OrganizerCard } from "../../molecules";

export function ModalOrganizers({
  intialState,
  inputAction,
  handleSaveOrganizer,
}) {
  let keyMap = 0; //key for map
  return (
    <div className="ModalOrganizers">
      <h2>Event Organizers</h2>
      {intialState.map((person) => {
        keyMap = keyMap + 1;
        return (
          <OrganizerCard key={keyMap} name={person.name} email={person.email} />
        );
      })}
      <h2>Add Organizer</h2>
      <form className="ModalOrganizers__Form">
        <Input
          name="organizer"
          type="email"
          onChange={inputAction}
          placeholder="New Organizer email"
        />
        <div className="ModalSession__Form__Btn">
          <Button
            text="Save Organizer"
            type="primary"
            color="first"
            onClick={handleSaveOrganizer}
          />
          {/* <a>Discard Changes</a> */}
          {/* <a>Delete Session</a> */}
        </div>
      </form>
    </div>
  );
}

// before than input component
// {/* <select>
//       <option value="" disabled selected>
//         Link Organizer
//       </option>
//       <option value="Hector Reyes">Hector Reyes</option>
//       <option value="Den Velez">Den Velez</option>
//       <option value="Jose Luis Chavez">Jose Luis Chavez</option>
//       <option value="Cristian Cortes">Cristian Cortes</option>
//       <option value="Sergio Estrella">Sergio Estrella</option>
//     </select> */}
