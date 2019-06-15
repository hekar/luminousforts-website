import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function Page() {
  return (
    <Layout>
      <SEO
        title="LuminousForts - Compile Valve Models Linux"
        keywords={[`luminousforts`, `valve`, `models`, `sourcesdk`, 'linux']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Import Blender models using Linux</h1>
        <p>Importing models into the Source SDK under Linux requires a newer version of Steam with Proton and Forced Compatibilty mode.</p>

        <p>The basic premise is to install Windows version of Source Base Singleplayer 2013 using Proton in the Linux version of Steam and using the Windows tooling installed through Wine since the tooling in the multiplayer and single player SDKs are compatible. Tooling for modelling, mapping, particles and more will be installed when the single player base 2013 is installed. The assets are then exported to the Multiplayer version of LuminousForts. Under Windows the tooling is avaiable without having to install the single player sdk.</p>
      </div>

    </Layout>
  );
}

export default Page;
