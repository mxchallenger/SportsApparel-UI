import React, { useEffect, useMemo, useState } from 'react';
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
      width: 250,
      editable: true
    },
    {
      field: 'description',
      width: 250,
      editable: true
    },
    {
      field: 'price',
      sortable: true,
      type: 'rightAligned',
      width: 100,
      valueFormatter: formatCurrency,
      editable: true
    },
    {
      field: 'quantity',
      width: 100,
      type: 'rightAligned',
      editable: true
    },
    {
      field: 'active',
      sortable: true,
      width: 100,
      valueFormatter: formatActive
    },
    {
      field: 'category',
      width: 150,
      editable: true
    },
    {
      field: 'type',
      width: 125,
      editable: true
    },
    {
      field: 'brand',
      width: 125,
      editable: true
    },
    {
      field: 'material',
      width: 130,
      editable: true
    },
    { field: 'demographic' },
    {
      headerName: 'Image Source',
      field: 'imageSrc',
      width: 250,
      editable: true
    },
    {
      headerName: 'Image',
      field: 'imageSrc',
      cellRenderer: addImage,
      editable: true
    },
    {
      field: 'primaryColorCode',
      editable: true
    },
    {
      headerName: 'Primary Color',
      field: 'primaryColorCode',
      width: 30,
      cellRenderer: addColorBox
    },
    {
      field: 'secondaryColorCode',
      editable: true
    },
    {
      headerName: 'Secondary Color',
      field: 'secondaryColorCode',
      width: 30,
      cellRenderer: addColorBox
    },
    {
      field: 'styleNumber',
      width: 130,
      editable: true
    },
    {
      field: 'sku',
      width: 130,
      editable: true
    },
    {
      field: 'globalProductCode',
      width: 175,
      editable: true
    },
    { field: 'releaseDate' },
    {
      field: 'dateCreated',
      editable: false
    },
    {
      field: 'dateModified',
      editable: true
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
      <h1 style={{ color: 'black' }}>Products Maintenance View</h1>
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
