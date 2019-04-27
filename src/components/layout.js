import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-start max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-blue-darkest">
            <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Based on the Source SDK - Copyright 2019
              </p>
              <div>
                <a
                  href="https://steamcommunity.com/groups/LuminousForts"
                  className="font-bold no-underline text-white"
                >
                  Community
                </a>

                <a
                  href="https://github.com/hekar/luminousforts-2013/"
                  className="pl-8 font-bold no-underline text-white"
                >
                  Source Code
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
