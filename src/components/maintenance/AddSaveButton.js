import React from 'react';
import Button from '@material-ui/core/Button';
// import updateProducts from './MaintenanceUpdateService';

export const addSaveButton = () => (
  <Button
    variant="contained"
    // onClick={updateProducts}
    style={{
      color: 'white', background: 'black', outlineColor: 'red', outlineWidth: '1px', outlineStyle: 'solid', marginLeft: '2px', marginBottom: '2px'
    }}
  >
    Submit

  </Button>
);
export default addSaveButton;
