// this file handles global validation functions
const namePattern = (input) => /[a-zA-Z]+$/.test(input);

export const validateCheckoutFields = (del) => {
  const errorMsg = {};
  if (del.firstName === undefined) {
    errorMsg.name = 'Name is Required.';
  } else if
  (!(namePattern(del.firstName))) {
    errorMsg.name = 'STUPID';
  }
  return errorMsg;
};
export default validateCheckoutFields;
