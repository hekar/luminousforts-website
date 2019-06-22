import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        title="Documentation"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'entities']}
      />

      <div className="container mx-auto leading-normal">
        <h1>Projects</h1>
        <p className="mt-4">LuminousForts is comprised of multiple projects.</p>
        <table className="text-left mt-4">
            <thead>
                <th className="py-3 pr-16">Project</th>
                <th className="py-3 pr-16"></th>
            </thead>
            <tbody>
                <tr>
                    <td className="py-3 pr-16"><a
                        className="text-black"
                        href="https://github.com/hekar/luminousforts">luminousforts</a></td>
                    <td className="py-3 pr-16">Game assets and files based on HL2DM</td>
                </tr>
                <tr>
                    <td className="py-3 pr-16"><a
                        className="text-black"
                        href="https://github.com/hekar/luminousforts-2013">luminousforts-2013</a></td>
                    <td className="py-3 pr-16">C++ source code used to create the game</td>
                </tr>
                <tr>
                    <td className="py-3 pr-16"><a
                        className="text-black"
                        href="https://github.com/hekar/luminousforts-website/">luminousforts-website</a></td>
                    <td className="py-3 pr-16">This Website, statically generated and built on Gatsby.js</td>
                </tr>
                <tr>
                    <td className="py-3 pr-16"><a
                        className="text-black"
                        href="https://github.com/hekar/ssdk-2013-tools">ssdk-2013-tools</a></td>
                    <td className="py-3 pr-16">Node.js based tools for working with the Source SDK</td>
                </tr>
            </tbody>
        </table>
      </div>

    </Layout>
  );
}

export default ProjectsPage;
