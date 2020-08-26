import React from "react";

import { AssociateCard } from "../../organisms/AssociateCard";

export function GridAssociates({ AssociatesArray }) {
  return (
    <section className="grid-associates">
      {AssociatesArray.map((item) => {
        return (
          <AssociateCard
            name={item.name}
            url={item.url}
            logo={item.logo_url}
          />
        );
      })}
    </section>
  );
}