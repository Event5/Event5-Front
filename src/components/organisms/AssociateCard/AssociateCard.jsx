import React from "react";

export function AssociateCard({ logo, name, url }) {
  return (
    <div className="associate-card">
      <img src={logo} alt="Associate Logo" />
      <h5>{name}</h5>
      <p>{url}</p>
      <button>Edit Associate</button>
    </div>
  );
}
