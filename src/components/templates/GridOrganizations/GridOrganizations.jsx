import React from "react";

import { OrganizationCard } from "../../organisms";

export function GridOrganizations() {
  return (
    <section className="content-grid">
      <OrganizationCard orgName="Conejo Estelar" />
      <OrganizationCard orgName="Event5" />
    </section>
  );
}
