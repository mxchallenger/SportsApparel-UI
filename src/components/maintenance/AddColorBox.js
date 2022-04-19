import React from 'react';
/**
 * A JSX cell renderer that returns a circle filled with color in input value.
 * @param {Object} params a color code in hex format.
 * @returns JSX/HTML svg tag containing definition for circle.
 */
export const addColorBox = (params) => (
  <svg style={{ height: 25, width: 25 }}>
    <circle cx={9} cy={17} r={7} stroke="black" strokeWidth={1} fill={params.value} />
  </svg>
);

export default addColorBox;
