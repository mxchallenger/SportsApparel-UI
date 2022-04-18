import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

/**
 * A value formatter that takes a number and converts to a string
 * with 2 digits to the right of the decimal
 * @param {*} number
 * @returns formatted string
 */
const formatNumber = (number) => number.toFixed(2).toString();

/**
 * A value formatter that takes in params (props) and returs the
 * string in a monetary format.
 * @param {*} params
 * @returns monetary string
 */
const formatCurrency = (params) => '$'.concat(formatNumber(params.value));

/**
 * A value formatter that returns true or false based on input value.
 * @param {*} params truthy or falsey value.
 * @returns either 'true' or 'false' as a string.
 */
const formatActive = (params) => (params.value === true ? 'true' : 'false');

/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 650, width: '100%' }), []);

  const columnDefs = [
    {
      field: 'id',
      sortable: true,
      width: 75
    },
    {
      field: 'name',
      sortable: true,
      width: 250
    },
    { field: 'description', width: 250 },
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
    { field: 'demographic' },
    { field: 'imageSrc' },
    {
      headerName: 'Image',
      field: 'imageSrc',
      cellRenderer: (params) => <img style={{ height: '50px', width: '50px' }} src={params.value} alt="" />
    },
    { field: 'primaryColorCode' },
    { field: 'secondaryColorCode' },
    { field: 'styleNumber', width: 130 },
    { field: 'sku', width: 130 },
    { field: 'globalProductCode', width: 175 },
    { field: 'releaseDate' },
    { field: 'dateCreated' },
    { field: 'dateModified' }
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
    width: 110
  };

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
