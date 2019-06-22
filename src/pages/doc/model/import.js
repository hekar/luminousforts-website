import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function Page() {
  return (
    <Layout>
      <SEO
        title="LuminousForts - Import"
        keywords={[`luminousforts`, `sourcesdk`, `model`, 'import']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Importing Model</h1>

        <div role="alert">
          <div class="bg-red-500 text-white font-bold rounded-px-4 py-2">
            Oops
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>There is no documentation here.</p>
          </div>
        </div>

        <p className="py-4">
          <a href="https://developer.valvesoftware.com/wiki/Blender_Source_Tools_Help">Additional Source Tool Blender Documentation</a>
        </p>
      </div>

    </Layout>
  );
}

export default Page;
