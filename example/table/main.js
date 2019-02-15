import React from 'react';
import ReactDOM from 'react-dom';
import { DataTable } from 'react-data-components';

function buildTable(data) {
  const renderMapUrl =
    (val, row) =>
      <a href={`https://www.google.com/maps?q=${row['lat']},${row['long']}`}>
        Google Maps
      </a>;

  const tableColumns = [
    { title: 'Name', prop: 'name' },
    { title: 'City', prop: 'city' },
    { title: 'Birth Year', prop: 'birthYear' }
  ];

  return (
    <DataTable
      className="container"
      keys="id"
      columns={tableColumns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    />
  );
}

fetch('/data.json')
  .then(res => res.json())
  .then((rows) => {
    ReactDOM.render(buildTable(rows), document.getElementById('root'));
  });
