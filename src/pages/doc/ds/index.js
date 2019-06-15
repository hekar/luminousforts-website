import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Documentation - Dedicated Server"
        keywords={[`luminousforts`, 'dedicated-server', 'server']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Dedicated Server</h1>
        <p>Configuring a Dedicated Server for LuminousForts requires both LuminousForts and the command-line version of Steam.</p>
        <p>There are multiple methods to create a Dedicated Server. Some are partially automated and under development, but for the most reliable to manually configure your server by downloading all the necessary applications.</p>

        <h2>Automated Installation</h2>
        <p class="text-red-700 uppercase">Under Development</p>

        <h2>Docker</h2>
        <p>Docker image is the preferred route to configure a dedicated server.</p>

        <p class="text-red-700 uppercase">Under Development</p>

        <h2>Manual configuration</h2>
        <p>To manually configure a dedicated server for LuminousForts requires the installation of <a href="">Steam CMD</a></p>

        <h4>64 bit Ubuntu</h4>
        <pre><code>{`sudo dpkg --add-architecture i386
sudo apt update
sudo apt install p7zip lib32gcc1 libstdc++6 libstdc++6:i386 libncurses5:i386 libtinfo5:i386`}</code></pre>

        <h4>32 bit Ubuntu</h4>
        <pre><code>{`sudo apt install p7zip libstdc++6 libncurses5 libtinfo5`}</code></pre>

        <h4>Create the folder</h4>
        <pre><code>{`cd ~ && mkdir lf && cd lf`}</code></pre>

        <h4>Download Steam CMD</h4>
        <pre><code>{`wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz
tar xvzf steamcmd_linux.tar.gz`}</code></pre>

        <h4>Configure Steam CMD</h4>
        <pre><code>{`echo "login anonymous" > ds_lf.txt
echo "force_install_dir ./sdkbase" >> ds_lf.txt
echo "app_update 244310" >> ds_lf.txt
echo "quit" >> ds_lf.txt`}</code></pre>

        <h4>Run Steam CMD Update</h4>
        <pre><code>{`./steamcmd.sh +runscript ds_lf.txt`}</code></pre>

        <h4>Fix broken symbolic links</h4>
        <pre><code>{`cd ~/lf/sdkbase/bin/
ln -s datacache_srv.so datacache.so
ln -s dedicated_srv.so dedicated.so
ln -s engine_srv.so engine.so
ln -s materialsystem_srv.so materialsystem.so
ln -s replay_srv.so replay.so
ln -s scenefilecache_srv.so scenefilecache.so
ln -s shaderapiempty_srv.so shaderapiempty.so
ln -s soundemittersystem_srv.so soundemittersystem.so
ln -s studiorender_srv.so studiorender.so
ln -s vphysics_srv.so vphysics.so`}</code></pre>

        <h4>Install LuminousForts</h4>
        <pre><code>{`cd ~/lf/sdkbase
git clone https://github.com/hekar/luminousforts.git`}</code></pre>

        <h4>Run the LuminousForts server</h4>
        <pre><code>{`cd ~/lf
./sdkbase/srcds_run -console -game luminousforts -secured +map lfc_pyramids +maxplayers 8`}</code></pre>
      </div>

    </Layout>
  );
}

export default IndexPage;
