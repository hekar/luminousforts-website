import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function SourceModPage() {
  return (
    <Layout>
      <SEO
        title="Documentation - C++ Compile"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'compile']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>C++ Compile</h1>
        <p>The LuminousForts project is compromised of C++ code, models in Blender, textures and maps in Hammer.</p>

        <h2>Code</h2>
        <p>The code for LuminousForts can be compiled under Ubuntu 14.04 using Docker or Visual Studio 2013 in Windows.</p>
      </div>

    </Layout>
  );
}

export default SourceModPage;
