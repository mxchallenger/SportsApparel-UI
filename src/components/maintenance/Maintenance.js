import React, { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

/**
 * A JSX value formatter that takes a number and converts to a string
 * with 2 digits to the right of the decimal
 * @param {*} number
 * @returns formatted string
 */
const formatNumber = (number) => number.toFixed(2).toString();

/**
 * A JSX value formatter that takes in params (props) and returs the
 * string in a monetary format.
 * @param {Object} params a number representing a price.
 * @returns monetary string
 */
const formatCurrency = (params) => '$'.concat(formatNumber(params.value));

/**
 * A JSX value formatter that returns true or false based on input value.
 * @param {Object} params truthy or falsey value.
 * @returns either 'true' or 'false' as a string.
 */
const formatActive = (params) => (params.value === true ? 'true' : 'false');

/**
 * A JSX cell renderer that returns a thumbnail image based on input value.
 * @param {Object} params a link to an image.
 * @returns JSX/HTML image tag.
 */
const addImage = (params) => <img style={{ height: '50px', width: '50px' }} src={params.value} alt="" />;

/**
 * A JSX cell renderer that returns a circle filled with color in input value.
 * @param {Object} params a color code in hex format.
 * @returns JSX/HTML svg tag containing definition for circle.
 */
const addColorBox = (params) => (
  <svg style={{ height: 25, width: 25 }}>
    <circle cx={9} cy={17} r={7} stroke="black" strokeWidth={1} fill={params.value} />
  </svg>
);

/**
 * @name Maintenance
 * @description fetches products from API and displays products in a table
 * @return component
 */
const Maintenance = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 500, width: '100%' }), []);

  const columnDefs = [
    {
      field: 'id',
      sortable: true,
      width: 75,
      editable: false
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
      editable: false,
      cellRenderer: addImage
    },
    {
      field: 'primaryColorCode'
    },
    {
      headerName: '',
      field: 'primaryColorCode',
      width: 30,
      editable: false,
      sortable: false,
      cellRenderer: addColorBox
    },
    {
      field: 'secondaryColorCode'
    },
    {
      headerName: '',
      field: 'secondaryColorCode',
      width: 30,
      editable: false,
      sortable: false,
      cellRenderer: addColorBox
    },
    { field: 'styleNumber', width: 130 },
    { field: 'sku', width: 130 },
    { field: 'globalProductCode', width: 175 },
    { field: 'releaseDate' },
    { field: 'dateCreated', editable: false },
    { field: 'dateModified', editable: false }
  ];

  const defaultColDef = {
    resizable: true,
    sortable: true,
    editable: true,
    width: 110
  };

  const [rowData, setRowData] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchProducts(setRowData, setApiError);
  }, []);

  return (
    <div style={containerStyle}>
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR.concat(' Is the database running?')}</p>}
      <h1>Products Maintenance View</h1>
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
