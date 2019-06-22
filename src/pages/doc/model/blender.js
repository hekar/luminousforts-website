import React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

function ProfilingPage() {
  return (
    <Layout>
      <SEO
        title="LuminousForts - Blender"
        keywords={[`luminousforts`, `blender`]}
      />

      <div className="container leading-loose mx-auto">
        <span><Link className="no-underline text-blue-700 uppercase tracking-wide" to="/doc">&lt; Documentation</Link></span>
        <h1>Blender</h1>

        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p className="font-bold">Warning</p>
          <p>Using Blender with the Source SDK is fairly complicated. Until cohesive documentation is compiled in the future, there is a set of videos for beginning.</p>
        </div>

        <p className="py-4">Below is a series of videos on YouTube that serve as an introduction in creating models for the Source Engine in Blender.</p>

        <h3 className="py-4">Props</h3>
        
        <p>Props are static models that are placed around maps.</p>

        <p className="py-4 font-bold">Creating simple props</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/thr-Pc-uBf8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p className="py-4 font-bold">Exporting</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TZ9Rl8PXwk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p className="py-4 font-bold">Compiling</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PYVnm5zeVaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h3 className="py-4">View Models (Weapons)</h3>

        <p>View models are weapons as seen by the player in first person (not third person.)</p>

        <p className="py-4 font-bold">View Model Animation Part 1</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m9HQ231R3MM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p className="py-4 font-bold">View Model Animation Part 2</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sE4Vewb324U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p className="py-4 font-bold">View Model Animation Part 3</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PsfXzlR0o8k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h3 className="py-4">Player Models</h3>

        <p>Player models are used to represent players. LuminousForts uses the HL2DM animation system.</p>

        <p className="py-4 font-bold">Player Model rigging</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VmBPYoHq4wY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </Layout>
  );
}

export default ProfilingPage;
