import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center">
        <h1>LuminousForts</h1>
        <iframe
          title="YoutubeVideo"
          className="block mx-auto"
          width="720"
          height="360"
          src="https://www.youtube-nocookie.com/embed/x2ItPebIBZY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

        <p className="leading-loose">
          Modification of the Source SDK 2013 to create a series of experimental gameplay centered around fort building. The basis being the gameplay of the original Sourceforts.
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
