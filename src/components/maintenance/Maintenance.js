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
    { field: 'name', sortable: true },
    { field: 'description', sortable: true },
    { field: 'price', sortable: true },
    { field: 'quantity', sortable: true },
    { field: 'active', sortable: true },
    { field: 'category', sortable: true },
    { field: 'type', sortable: true },
    { field: 'brand', sortable: true },
    { field: 'material', sortable: true },
    { field: 'sku', sortable: true },
    { filed: 'imagesrc', sortable: true },
    { field: 'demographic', sortable: true }
  ]);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL_API + PRODUCT_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default Maintenance;
