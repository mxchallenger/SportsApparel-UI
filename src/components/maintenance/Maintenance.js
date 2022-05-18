import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import fetchProducts from './MaintenanceService';
import { addColorBox } from './AddColorBox';
import { addImage } from './AddImage';
import { formatCurrency } from './FormatCurrency';
import { formatActive } from './FormatActive';
import styles from './Maintenance.module.css';
import Constants from '../../utils/constants';

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
    {
      field: 'description',
      width: 250
    },
    {
      field: 'price',
      sortable: true,
      type: 'rightAligned',
      width: 100,
      valueFormatter: formatCurrency
    },
    {
      field: 'quantity',
      width: 100,
      type: 'rightAligned'
    },
    {
      field: 'active',
      sortable: true,
      width: 100,
      valueFormatter: formatActive
    },
    {
      field: 'category',
      width: 150
    },
    {
      field: 'type',
      width: 125
    },
    {
      field: 'brand',
      width: 125
    },
    {
      field: 'material',
      width: 130
    },
    { field: 'demographic' },
    {
      headerName: 'Image Source',
      field: 'imageSrc',
      width: 250
    },
    {
      headerName: 'Image',
      field: 'imageSrc',
      cellRenderer: addImage
    },
    {
      field: 'primaryColorCode'
    },
    {
      headerName: 'Primary Color',
      field: 'primaryColorCode',
      width: 30,
      cellRenderer: addColorBox
    },
    {
      field: 'secondaryColorCode'
    },
    {
      headerName: 'Secondary Color',
      field: 'secondaryColorCode',
      width: 30,
      cellRenderer: addColorBox
    },
    {
      field: 'styleNumber',
      width: 130
    },
    {
      field: 'sku',
      width: 130
    },
    {
      field: 'globalProductCode',
      width: 175
    },
    { field: 'releaseDate' },
    {
      field: 'dateCreated',
      editable: false
    },
    {
      field: 'dateModified',
      editable: false
    }
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
      <h1 className={styles.pageHeader}>Products Maintenance View</h1>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
      <div>
        <NavLink to="/add-product-page">
          <button type="button" className={styles.createProdBtn}>Create A Product</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Maintenance;
