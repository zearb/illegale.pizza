//Functions for validate inputs
export default class Validate {
    static verifyEmpty = (value) => {
      return value.length !== 0;
    };
  
    static verifyDNI = (value) => {
      let regex = /^[0-9]*$/;
      while (value !== undefined) {
        return !regex.test(value) || value.length !== 8 ? false : true;
      }
    };

    static verifyCE = (value) => {
        while (value !== undefined) {
            return (value.length !== 0 && value.length >= 8);
        }
    };
  
    static verifyRUC = (value) => {
      let regex = /^[0-9]*$/;
      while (value !== undefined) {
        return !regex.test(value) || value.length !== 11 || (value.substring(0, 2) !== '20' && value.substring(0, 2) !== '10') ? false : true;
      }
    };
  
    static verifyPhone = (value) => {
      let regex = /^[0-9]*$/;
      while (value !== undefined) {
        return !regex.test(value) || value.length !== 9 || value.charAt(0) !== '9' ? false : true;
      }
    };
  
  }
  