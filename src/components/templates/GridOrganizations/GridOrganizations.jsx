import React from "react";

import { OrganizationCard } from "../../organisms";

export function GridOrganizations({ organizationArray }) {
  let keyOrg = 0;
  return (
    <section className="ContentGrid">
      {organizationArray.map((organization) => {
        keyOrg++;
        return (
          <OrganizationCard
            key={keyOrg}
            orgName={organization.name}
            orgId={organization.id}
            orgEventsArray={organization.organization_event || []}
          />
        );
      })}
    </section>
  );
}
