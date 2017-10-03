// Convert the given number into a roman numeral.

function convertToRoman(num) {
    
  var numerals = [
    ['I','V'],
    ['X','L'],
    ['C','D'],
    ['M']
  ];
    
  function converter(number, place = 0) {
    
      if 
        (number <= 3) {
        return numerals[place][0].repeat(number); 
      } else if 
        ( number === 4 ) {
        return numerals[place][0] + numerals[place][1];
      } else if
        (number >= 5 && number !== 9) {
        return numerals[place][1] + numerals[place][0].repeat(number - 5);
      } else if
      (number === 9) {
        return numerals[place][0] + numerals[place + 1][0]; 
      } else {
        // zero
        return '';
      }
  }
  
  num = Array.from(num.toString()).map(Number);
  var tensPlace = 0;
  
  for(var i = num.length - 1; i >= 0; i--) {
    num[i] = converter(num[i],tensPlace);
    tensPlace ++;
  }
  
 return num.join('');
}

convertToRoman(36);
