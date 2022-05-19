import React from 'react';
import Button from '@material-ui/core/Button';

export const AddSaveButton = () => (
  <Button
    variant="contained"
    size="small"
    style={{
      color: 'white', background: 'black', outlineColor: 'red', outlineWidth: '1px', outlineStyle: 'solid', marginLeft: '2px', marginBottom: '2px'
    }}
  >
    Submit ↥

  </Button>
);
export const addNoButton = () => (
  <div />
);

export default AddSaveButton;
