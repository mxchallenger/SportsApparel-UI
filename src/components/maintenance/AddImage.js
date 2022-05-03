import React from 'react';
/**
 * A JSX cell renderer that returns a thumbnail image based on input value.
 * @param {Object} imageSource containing a link to an image.
 * @returns JSX/HTML image tag.
 */
export const addImage = (imageSource) => <img style={{ height: '50px', width: '50px' }} src={imageSource.value} alt="" />;

export default addImage;
