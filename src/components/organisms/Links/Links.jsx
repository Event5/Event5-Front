import React from "react";

import { IconName } from "../../molecules/IconName";

export function Links() {
  return (
    <section className="About__Links">
      <div className="About__Links__Container">
        <h2>Links</h2>
        <IconName
          icon="github"
          name="Backend"
          url="https://github.com/Event5/Event5-Back"
        />
        <IconName
          icon="github"
          name="Frontend"
          url="https://github.com/Event5/Event5-Front"
        />
        <IconName
          icon="notion"
          name="Project"
          url="https://www.notion.so/Event5-Project-1f305c23dc0e4ea8875067109a30c25c"
        />
      </div>
    </section>
  );
}
