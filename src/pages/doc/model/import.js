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

      </div>

    </Layout>
  );
}

export default Page;
