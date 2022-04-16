import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

const formatNumber = (number) => number.toFixed(2).toString();

const currencyFormatter = (params) => '$'.concat(formatNumber(params.value));

/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 675, width: '100%' }), []);

  const [columnDefs] = useState([
    { field: 'id', sortable: true },
    { field: 'name', sortable: true },
    { field: 'description', sortable: true },
    { field: 'price', sortable: true, valueFormatter: currencyFormatter },
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
    <div style={containerStyle}>
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default Maintenance;
