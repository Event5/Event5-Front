import React from "react";

import { OrganizationCard } from "../../organisms";

export function GridOrganizations({ organizationArray }) {
  return (
    <section className="content-grid">
      {organizationArray.map((organization) => {
        console.log(organization);
        return (
          <OrganizationCard
            key={organization.organizationID}
            orgName={organization.organizationName}
            orgEventsArray={organization.events}
          />
        );
      })}
    </section>
  );
}
