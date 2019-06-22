import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function DocCompilingPage() {
  return (
    <Layout>
      <SEO
        title="Documentation - Debugging"
        keywords={[`luminousforts`, `sourcesdk`, 'debugging']}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Debugging</h1>
        <p>The LuminousForts project is compromised of C++ code, models in Blender, textures and maps in Hammer.</p>

        <h2 className="py-4">Windows</h2>
        <p>Follow the documentation found on the Valve Wiki: <a href="https://developer.valvesoftware.com/wiki/Launching_from_Visual_Studio_2013">Launching from Visual Studio 2013</a></p>

        <h2 className="py-4">Linux (Visual Studio Code)</h2>
        <p>Create a launch configuration using the example below</p>
  
        <pre><code>{`{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "type": "cppdbg",
            "request": "launch",
            "program": "\${env:HOME}/.local/share/Steam/steamapps/common/Source SDK Base 2013 Multiplayer/hl2_linux",
            "args": [
                "-game",
                "sourcetest",
                "-steam",
                "-game",
                "\${env:HOME}/.local/share/Steam/steamapps/sourcemods/luminousforts"
            ],
            "stopAtEntry": false,
            "cwd": "\${env:HOME}/.local/share/Steam/steamapps/common/Source SDK Base 2013 Multiplayer/",
            "environment": [{
                "name": "LD_LIBRARY_PATH",
                "value": "\${env:HOME}/.local/share/Steam/steamapps/common/Source SDK Base 2013 Multiplayer/bin"
            }],
            "externalConsole": false,
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ]
        }
    ]
}`}</code></pre>

        <h2 className="py-4">Linux (GDB)</h2>
        <p>Run the command line GDB debugger</p>

        <pre><code>{`GAME_DEBUGGER=gdb ~/.steam/steam/steamapps/common/Source SDK Base 2013 Multiplayer/hl2.sh  -game sourcetest -steam -game ~/.local/share/Steam/steamapps/sourcemods/luminousforts`}</code></pre>

        <h2 className="py-4">Linux (strace)</h2>
        <p>Create strace logs. This is useful for figuring out incorrectly reference model, texture and resource filepaths</p>

        <pre><code>{`GAME_DEBUGGER="strace -f -o strace.log" ~/.steam/steam/steamapps/common/Source SDK Base 2013 Multiplayer/hl2.sh -game sourcetest -steam -game ~/.local/share/Steam/steamapps/sourcemods/luminousforts`}</code></pre>

        <h2 className="py-4">Linux (memory debugging)</h2>
        <p>Replacing the default memory allocator with tcmalloc debug</p>

        <pre><code>{`GAME_DEBUGGER="gdb" LD_PRELOAD="../src/thirdparty/gperftools-2.0/.libs/libtcmalloc_debug.so:$LD_PRELOAD" ~/.steam/steam/steamapps/common/Source SDK Base 2013 Multiplayer/hl2.sh  -game sourcetest -steam -game ~/.local/share/Steam/steamapps/sourcemods/luminousforts`}</code></pre>

      </div>

    </Layout>
  );
}

export default DocCompilingPage;
