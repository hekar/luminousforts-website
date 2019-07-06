import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function DocCompilingPage() {
  return (
    <Layout>
      <SEO
        title="Documentation - C++ Compile"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'compile']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Compiling from Source</h1>
        <p>The code for LuminousForts can be compiled under Ubuntu 14.04 or Visual Studio 2013 in Windows.</p>

        <pre><code>git clone git@github.com:hekar/luminousforts-2013.git</code></pre>
        <a href="https://github.com/hekar/luminousforts-2013">github.com/luminousforts-2013</a>

        <h2 className="py-4">Windows</h2>
        <p>Follow the documentation found here:</p>
        <ul>
          <li><a href="https://developer.valvesoftware.com/wiki/Source_SDK_2013">Visual Studio 2013</a></li>
          <li><a href="https://developer.valvesoftware.com/wiki/Building_without_Visual_Studio">Windows CLI Build</a></li>
        </ul>

        <h2 className="py-4">Linux</h2>

        <p>Since Ubuntu 14.04 is no longer used by anyone, Docker is your best option to create a binary.</p>
        <p>It is suggested that you place your "luminousforts-2013" source code in your $HOME folder and mount the $HOME as a volume in the Docker container.</p>

        <p className="font-bold">Create Docker Container</p>
        <pre><code>{`sudo docker pull hekar/luminousforts-ci
cd ~
sudo docker run --rm -t -i -v $(pwd):$(pwd) -w $(pwd) -e HOME=$(pwd) hekar/luminousforts-ci /bin/bash`}</code></pre>

        <h3 className="py-4">Within the Docker container</h3>
        
        <p className="font-bold">Compile</p>
        <pre><code>{`cd $HOME/luminousforts-2013/mp/src/
make -f everything.mak`}</code></pre>

        <p className="font-bold">Copy to LuminousForts</p>
        <pre><code>{`rsync --progress -v ../game/mod_hl2mp/bin/* $HOME/.steam/steam/steamapps/sourcemods/luminousforts/bin/`}</code></pre>
        
        <p className="font-bold">Compile and copy</p>
        <code>{`cd $HOME/luminousforts-2013/mp/src/ &&
make -f everything.mak &&
rsync --progress -v ../game/mod_hl2mp/bin/* $HOME/.steam/steam/steamapps/sourcemods/luminousforts/bin/`}</code>

      </div>

    </Layout>
  );
}

export default DocCompilingPage;
