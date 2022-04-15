import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

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
    { field: 'globalProductCode', sortable: true },
    { field: 'releaseDate', sortable: true },
    { field: 'imageSrc', sortable: true },
    { field: 'primaryColorCode', sortable: true },
    { field: 'secondaryColorCode', sortable: true },
    { field: 'demographic', sortable: true }
  ]);

  const [rowData, setRowData] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchProducts(setRowData, setApiError);
  }, []);

  return (
    <div className="scroll">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
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
