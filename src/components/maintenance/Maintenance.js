import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ]);

  const [columnDefs] = useState([
    { field: 'make', sortable: true },
    { field: 'model', sortable: true },
    { field: 'price', sortable: true }
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default Maintenance;
