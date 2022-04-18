import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

const formatNumber = (number) => number.toFixed(2).toString();

const formatCurrency = (params) => '$'.concat(formatNumber(params.value));

const formatActive = (params) => (params.value === true ? 'true' : 'false');

/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 650, width: '100%' }), []);

  const columnDefs = useMemo(() => [
    {
      field: 'id',
      sortable: true,
      width: 75
    },
    {
      field: 'name',
      sortable: true,
      width: 275
    },
    { field: 'description', width: 275 },
    {
      field: 'price',
      sortable: true,
      width: 100,
      valueFormatter: formatCurrency
    },
    { field: 'quantity', width: 100 },
    {
      field: 'active',
      sortable: true,
      width: 100,
      valueFormatter: formatActive
    },
    { field: 'category', width: 150 },
    { field: 'type', width: 125 },
    { field: 'brand', width: 125 },
    { field: 'material', width: 130 },
    { field: 'sku', width: 130 },
    { field: 'globalProductCode', width: 175 },
    { field: 'releaseDate' },
    { field: 'imageSrc' },
    {
      field: 'primaryColorCode',
      width: 100
    },
    { field: 'secondaryColorCode' },
    { field: 'demographic' }
  ], []);

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true
  }), []);

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
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default Maintenance;
