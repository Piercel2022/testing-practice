const reverseString = (string) => {
    let newString = '';
    let i = string.length-1;
    for (i ; i >= 0; i--){
      newString += string[i];
    }
    return newString;
  }
  
  module.exports = reverseString;