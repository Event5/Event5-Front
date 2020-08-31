import React from "react";

import { AssociateCard } from "../../organisms/AssociateCard";

export function GridAssociates({ AssociatesArray }) {
  let keyAssociate;
  return (
    <section className="GridAssociates">
      {AssociatesArray.map((item) => {
        keyAssociate++;
        return (
          <AssociateCard
            key={keyAssociate}
            name={item.name}
            url={item.url}
            logo={item.logo_url}
          />
        );
      })}
    </section>
  );
}
