// this file handles global validation functions
const namePattern = (input) => /[a-zA-Z]+$/.test(input);
//I AM A WORKING FUNCTION WHO DOES NOT PRINT ERRORS TO THE RIGHT PLACE K THANKS
export const validateCheckoutFields = (del) => {
  const errors= { };
  if (del.firstName === undefined) {
    errors.name = 'Name is Required.';
  } else if
  (!(namePattern(del.firstName))) {
    errors.name = 'STUPID';
  }
  return errors;
};
export default validateCheckoutFields;
