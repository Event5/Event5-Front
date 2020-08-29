import React from "react";


export function SessionCard({sessionDate, sessionName, sessionSpeaker, sessionDescription, type}) {
  return (
      <div className={`SessionCard-${type}`}>
        <p>{sessionDate.toLocaleString()}</p>
        <div className="SessionCard-Details">
            <div className="SessionCard-Details-Title">
                <h4>{sessionName}</h4>
                <a>{sessionSpeaker}</a>
            </div>
            <p>
                {sessionDescription}
            </p>

        </div>
      </div>
  );
}