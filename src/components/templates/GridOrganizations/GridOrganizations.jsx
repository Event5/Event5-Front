import React from "react";

import { OrganizationCard } from "../../organisms";

export function GridOrganizations({ organizationArray }) {
  return (
    <section className="content-grid">
      {organizationArray.map((organization) => {
        return (
          <OrganizationCard
            key={organization.organizationID}
            orgName={organization.organizationName}
            orgId={organization.organizationID}
            orgEventsArray={organization.events}
          />
        );
      })}
    </section>
  );
}
