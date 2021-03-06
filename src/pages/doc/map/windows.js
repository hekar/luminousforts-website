import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function Page() {
  return (
    <Layout>
      <SEO
        title="LuminousForts - Hammer Windows"
        keywords={[`luminousforts`, `hammer`, `windows`]}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Hammer Windows</h1>
      </div>

    </Layout>
  );
}

export default Page;
