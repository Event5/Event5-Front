import React from "react";


export function Hero({eventImage, eventName, eventDate}) {
  return (
      <div className="HeroOne">
        <span style={{backgroundImage:`url(${eventImage});`}}>
            <h1>{eventName}</h1>
            <p>{eventDate.toLocaleString()}</p>
        </span>
      </div>
  );
}