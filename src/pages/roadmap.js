import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function RoadmapPage() {
  return (
    <Layout>
      <SEO
        title="Documentation"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'entities']}
      />

      <div className="container mx-auto leading-normal">
        <h1>Roadmap</h1>
        <p className="mt-4">The Roadmap for LuminousForts is constrained based on time and
        lack of concept art. There is also a lack of direction in regards to what is possible
        given current skill sets. Therefore, items in the roadmap are rather conservative
        and are not guaranteed to be added if deemed too complicated.</p>

        <h2 className="mt-8">Gamemodes</h2>
        <h3 className="mt-4">Classic</h3>
        <p className="mt-4">The goal behind the "Classic" or "CTF" gamemode is to recreate Sourceforts as
          an open source game that can be extended by the community. This is not the main focus of
          LuminousForts, but a prerequisite to all other gamemodes.
        </p>
        <h3 className="mt-4">Domination</h3>
        <p className="mt-4">The domination gamemode was 
        </p>

        <h2 className="mt-8">Artistic Direction</h2>
        <p className="mt-4">
        The artistic direction is later stage cyberpunk, with a focus on science fiction, rather than
        fantasy.
        </p>
        <h3 className="mt-4">Player Models</h3>
        <ul className="mt-2">
          <li>Model animations will be based on HL2DM</li>
          <li>Models will wear masks</li>
          <li>Weapons will modeled after existing cyberpunk databases</li>
        </ul>

        <h2 className="mt-8">Releases &amp; Versions</h2>
        <p className="mt-4">
        The modification does not have release version numbers. Releases are done through Github.
        </p>
      </div>

    </Layout>
  );
}

export default RoadmapPage;
