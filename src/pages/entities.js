import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import fgd from "../fgd";

function renderFgd(content) {
  const { entities } = content;

  const renderTable = (obj) => {
    const rows = Object.keys(obj)
      .map(key => ({ key, val: obj[key] }))
      .filter(({ key }) => key !== 'name')
      .map(({ key, val }) => (
        <tr key={key}>
          <td className="text-left font-medium pr-8">{key}</td>
          <td className="text-left">{JSON.stringify(val, null, 2)}</td>
        </tr>
      ));

    return (
      <table className="">
        <thead>
          <th className="text-left">Key</th>
          <th className="text-left">Value</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  };

  const renderJson = (obj) => {
    if (obj) {
      const rows = Object.keys(obj)
        .map(key => ({ key, val: obj[key] }))
        .map(({ key, val }) => {
          if (typeof val === 'object') {
            return {
              key: val.name,
              val: renderTable(val)
            };
          } else {
            return {
              key,
              val: String(val)
            };
          }
        })
        .map(({ key, val }) => (
          <tr key={key}>
            <td className="text-left py-2 px-4 font-bold">{key}</td>
            <td className="text-left py-2 px-4">{val}</td>
          </tr>
        ));
      
      return (
        <table className="max-w-lg">
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    } else {
      return 'N/A';
    }
  };

  const renderRow = (entity) => {
    return (
      <div className="mt-8 max-w-md">
        <h3 name={entity.name}>
          <a
            className="text-black"
            href={'#' + entity.name}>{entity.name}</a>
        </h3>
        <p className="mt-4">Type: <span className="font-bold">{entity.type ? entity.type : '...'}</span></p>
        <h5 className="mt-4 leading-normal">Description</h5>
        <p>{entity.description ? entity.description : 'none'}</p>
        <h5 className="mt-4 leading-normal">Properties</h5>
        {renderJson(entity.properties)}
        <h5 className="mt-4">Inputs</h5>
        {renderJson(entity.inputs)}
        <h5 className="mt-4">Outputs</h5>
        {renderJson(entity.outputs)}
        <h5 className="mt-4">Parameters</h5>
        {renderJson(entity.parameters)}
      </div>
    );
  };

  return entities.map(renderRow);
}

function EntitiesPage() {
  return (
    <Layout>
      <SEO
        title="Entities"
        keywords={[`luminousforts`, `sourcesdk`, `sourceforts`, `halflife2`, 'entities']}
      />
      <h1 className="">Entities</h1>
      <p className="mt-4">The LuminousForts entities visible in Hammer</p>

      <h2 className="mt-16">Shared</h2>
      <p className="mt-4">
        Entities available in any gamemode
      </p>
      <div className="mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p className="text-sm">All these entities are prefixed with lf_* and apply to multiple gamemodes</p>
      </div>
      {renderFgd(fgd.shared)}

      <h2 className="mt-16">Classic Gamemode</h2>
      <p className="mt-4">
        Entities only available in the Classic (Capture the flag) gamemode
      </p>
      <div className="mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p className="text-sm">All entities are prefixed with lfc_*</p>
      </div>
      {renderFgd(fgd.classic)}

      <h2 className="mt-16">Domination Gamemode</h2>
      <p className="mt-4">
        Entities only available in the Domination gamemode
      </p>
      <div className="mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p className="text-sm">All entities are prefixed with lfd_*</p>
      </div>
      {renderFgd(fgd.domination)}

      <h2 className="mt-16">Custom Gamemode</h2>
      <p className="mt-4">
        Available for custom gamemodes
      </p>
      <div className="mt-4 bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p className="text-sm">All these entities are for custom gameplay</p>
      </div>
      {renderFgd(fgd.custom)}
    </Layout>
  );
}

export default EntitiesPage;
