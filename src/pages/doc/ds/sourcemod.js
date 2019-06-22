import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function SourceModPage() {
  return (
    <Layout>
      <SEO
        title="Documentation - Sourcemod"
        keywords={[`luminousforts`, `sourcesdk`, `sourcemod`]}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Sourcemod</h1>
        
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p className="font-bold">Warning</p>
          <p>This Tutorial only covers Linux and Sourcemod only works on Dedicated Servers. You cannot use Sourcemod on a Linux listen server.</p>
        </div>

        <p><a href="https://www.sourcemod.net/about.php">SourceMod</a> is server modification for any game that runs on the Half-Life 2 engine. It is a powerful, highly optimized platform for scripting plugins and handling server administration. The default package comes with a base set of plugins, but there are over 2,500 plugins in the community. </p>
        <p>Sourcemod requires <a href="https://www.metamodsource.net/">Metamod</a></p>
        
        <h2>Installation</h2>
        <p>Setting up <a href="https://www.sourcemod.net/about.php">SourceMod</a> requires download and unzipping Metamod and Sourcemod to the LuminousForts game folder.</p>
        <pre><code>{`cd ~/.steam/steam/steamapps/sourcemods/luminousforts
wget https://mms.alliedmods.net/mmsdrop/1.10/mmsource-1.10.7-git970-linux.tar.gz
tar -zxvf mmsource-1.10.7-git970-linux.tar.gz
rm mmsource-1.10.7-git970-linux.tar.gz
wget https://sm.alliedmods.net/smdrop/1.9/sourcemod-1.9.0-git6281-linux.tar.gz
tar -zxvf sourcemod-1.9.0-git6281-linux.tar.gz
rm sourcemod-1.9.0-git6281-linux.tar.gz`}</code></pre>
      </div>

    </Layout>
  );
}

export default SourceModPage;
