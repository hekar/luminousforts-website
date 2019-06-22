  import React from "react";

  import { Link } from "gatsby";
  import Layout from "../../components/layout";
  import SEO from "../../components/seo";

  function DocPage() {
    return (
      <Layout>
        <SEO
          title="Documentation"
          keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'entities']}
        />

        <div className="container mx-auto leading-loose">
          <h1>Documentation</h1>
          <p>The LuminousForts project is compromised of C++ code, models in Blender, textures and maps in Hammer.</p>

          <h2 className="py-4">Code</h2>
          <p className="italic">Windows and Linux documentation</p>
          <p className="py-2">Making changes to the code</p>
          <ol>
            <li><Link className="no-underline" to="/doc/code/compile">Compile</Link></li>
            <li><Link className="no-underline" to="/doc/code/debug">Debug</Link></li>
          </ol>

          <h2 className="py-4">Dedicated Server</h2>
          <p className="italic">Linux Documentation</p>
          <p className="py-2">Hosting a Dedicated Server requires installing steam cmd.</p>
          <p>There are multiple ways to configure a LuminousForts dedicated server, but the easiest way is to use an existing Docker image</p>
          <ol>
            <li><Link className="no-underline" to="/doc/ds">Dedicated Server</Link></li>
            <li><Link className="no-underline" to="/doc/ds/sourcemod">Sourcemod</Link></li>
          </ol>

          <h2 className="py-4">Modelling</h2>
          <p className="italic">Windows and Linux Documentation</p>
          <p className="py-2">Documentation centered around Blender 2.7x</p>
          <ol>
            <li><Link className="no-underline" to="/doc/model/blender">Using Blender</Link></li>
            <li><Link className="no-underline" to="/doc/model/import">Importing the Model</Link></li>
            <li><Link className="no-underline" to="/doc/model/linux">Under Linux with Proton</Link></li>
          </ol>

          <h2 className="py-4">Mapping</h2>
          <p className="italic">Windows and Linux Documentation</p>
          <p className="py-2">Creating maps requires Hammer which is included in the Source SDK Base Multiplayer 2013</p>
          <ol>
            <li><Link className="no-underline" to="/doc/map/windows">Setup Hammer (Windows)</Link></li>
            <li><Link className="no-underline" to="/doc/map/linux">Setup Hammer (Linux)</Link></li>
          </ol>
        </div>

      </Layout>
    );
  }

  export default DocPage;
