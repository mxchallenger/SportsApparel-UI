import React from 'react';

const Validation = () => {
    constructor();
    super();
    this.state = defaultState;

    /*validate() {
        let ccNumberError = "";
        let cvvError = "";
        let alphaError = "";
        let expiryError = "";
    };*/

    const ccNumberError = "Card number must be between 14-16 digits";
    const cvvError = "CVV must have 3 or 4 digits";
    const alphaError = "expiration is invalid";
    const expiryError = "Card Name is invalid";
    const requiredError = "This field is required";

    const doValidation = (regExp, text, errorMsg) => {
        if ((regExp) ? true : errorMsg);
    }
};

const ccNumberReg = (text) => {
    return /@"^[0-9]{14,19}$”/.test(text);
}
const cvvReg = (text) => {
    return /@“^[0-9]{3,4}$”/.test(text);
}
const alphaReg = (text) => {
    return /^[A-Za-z]+$/.test(text);
}
const expiryReg = (text) => {
    return /@"^(0[1-9]|1[0-2])([\/-]{1})[0-9]{2}$”/.test(text);
}


export default Validation;

<span className="text-danger">{this.state.ccNumberError}</span>
<span className="text-danger">{this.state.cvvError}</span>
<span className="text-danger">{this.state.expiryError}</span>
<span className="text-danger">{this.state.alphaError}</span>

const isCreditCardValid {
    if (ccNumberError || cvvError || expiryError || alphaError == false) 
        prevent onDefault();
};  
    return true;