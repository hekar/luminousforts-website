import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-red-darkest">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <svg
            className="h-8 mr-3 w-8 stroke-current text-grey"
            width="54"
            height="54"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect
                y="1.879681"
                x="1.9534023"
                height="12.036263"
                width="2.0214746" />
              <rect
                y="11.794399"
                x="3.9355807"
                height="2.1221235"
                width="6.0260615" />
              <rect
                y="1.8920995"
                x="7.9449863"
                height="10.065925"
                width="2.0214748" />
              <rect
                y="6.8946781"
                x="9.9164286"
                height="2.021349"
                width="3.0370996" />
              <rect
                y="1.8955755"
                x="9.8877001"
                height="2.0095088"
                width="5.0605369" />
            </g>
          </svg>
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/doc"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Docs
            </Link>

            <Link
              to="/entities"
              className="block md:inline-block mr-8 mt-4 md:mt-0 no-underline text-white"
            >
              Entities
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/hekar/luminousforts"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Github</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
