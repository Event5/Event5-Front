import React from "react";

export function Numeralia({ participantsType, numberOfParticipants }) {
  return (
    <div className="Numeralia">
      <p>{ participantsType }</p>
      <h1>{ numberOfParticipants }</h1>
    </div>  
  );
}
