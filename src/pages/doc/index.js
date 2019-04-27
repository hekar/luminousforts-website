import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function DocPage() {
  return (
    <Layout>
      <SEO
        title="Documentation"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'entities']}
      />

      <div className="container mx-auto">
        <h1>Documentation</h1>
      </div>

    </Layout>
  );
}

export default DocPage;
