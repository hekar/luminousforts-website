import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
