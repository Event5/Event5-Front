import React from "react";


export function SessionCard({sessionDate, sessionName, sessionSpeaker, sessionDescription, type}) {
  return (
      <div className={`SessionCard-${type}`}>
        <p className="p-template">{sessionDate.toLocaleString()}</p>
        <div className="SessionCard-Details">
            <div className="SessionCard-Details-Title">
                <h4 className="h4-template">{sessionName}</h4>
                <a>{sessionSpeaker}</a>
            </div>
            <p className="p-template">
                {sessionDescription}
            </p>

        </div>
      </div>
  );
}