import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const roadmap = {
  headers: [
    'Gamemode',
    'Description',
    'Remaining',
    'Completed',
  ],
  rows: [
    ['Capture the flag', 'Build a base and defend your flag', 'Defects', ''],
    ['Domination', 'Control points to increase your block limit and win', '', ''],
    ['Survival', 'Fend off against hords of Zombies', '', ''],
    ['Custom', 'Map determines who wins through Lua and custom objectives', '', ''],
  ]
};

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <h1>LuminousForts</h1>

      <p className="mt-4 leading-normal tracking-wide">
        Based on the <a href="https://developer.valvesoftware.com/wiki/Source_SDK_2013">Source SDK 2013</a> with the aim of creating a series of experimental games centered around fort building.
      </p>
      <p className="mt-2 leading-normal tracking-wide">
        The mod is in the early stages of development, but progress can be viewed in the <a href="https://github.com/hekar/luminousforts-2013/commits">the commit log</a>.
      </p>
      <h2 className="mt-8">Developer Demo</h2>
      <div className="text-center py-6">
        <iframe
          title="YoutubeVideo"
          className="block mx-auto"
          width="720"
          height="420"
          src="https://www.youtube-nocookie.com/embed/x2ItPebIBZY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <h2>Development</h2>
      <h3 className="mt-6">Roadmap</h3>
      <p className="mt-4 leading-normal tracking-wide">
        The following table contains the list of gamemodes that are going to be developed.
        Further details can be seen on the <Link to="/roadmap">Roadmap</Link>.
      </p>
      <table className="mt-6 tracking-wide">
        <thead className="border bg-grey-light">
          {roadmap.headers.map(h =>
            <th className="text-left px-2 py-2">{h}</th>
          )}
        </thead>
        <tbody>
          {roadmap.rows.map(r => 
            <tr className="border">
              {r.map(c => <td className="px-2 py-2">{c}</td>)}
            </tr>
          )}
        </tbody>
      </table>

      <h3 className="mt-4">Contributions</h3>
      <p className="mt-4 leading-normal tracking-wide">
        The best way to get started contributing is to join the 
        <a href="https://steamcommunity.com/groups/LuminousForts">Steam Community</a> 
        and post your ideas in the <a href="https://steamcommunity.com/groups/LuminousForts">chat</a>.
      </p>

      
    </Layout>
  );
}

export default IndexPage;
