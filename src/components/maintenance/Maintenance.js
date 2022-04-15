import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { BASE_URL_API, PRODUCT_ENDPOINT } from '../../utils/constants';
/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const [columnDefs] = useState([
    { field: 'id', sortable: true },
    { field: 'name', sortable: true, suppressSizeToFit: true },
    { field: 'description', sortable: true, suppressSizeToFit: true },
    { field: 'price', sortable: true, suppressSizeToFit: true },
    { field: 'quantity', sortable: true, suppressSizeToFit: true },
    { field: 'active', sortable: true, suppressSizeToFit: true },
    { field: 'category', sortable: true, suppressSizeToFit: true },
    { field: 'type', sortable: true, suppressSizeToFit: true },
    { field: 'brand', sortable: true, suppressSizeToFit: true },
    { field: 'material', sortable: true, suppressSizeToFit: true },
    { field: 'sku', sortable: true, suppressSizeToFit: true },
    { field: 'globalProductCode', sortable: true, suppressSizeToFit: true },
    { field: 'releaseDate', sortable: true, suppressSizeToFit: true },
    { field: 'imageSrc', sortable: true, suppressSizeToFit: true },
    { field: 'primaryColorCode', sortable: true, suppressSizeToFit: true },
    { field: 'secondaryColorCode', sortable: true, suppressSizeToFit: true },
    { field: 'demographic', sortable: true, suppressSizeToFit: true }
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL_API + PRODUCT_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="scroll">
      <div className="ag-theme-alpine" style={{ height: 450, width: '100%', columnFill: 'balance-all' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default Maintenance;
