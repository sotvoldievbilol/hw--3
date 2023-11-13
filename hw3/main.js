const num = [3, 8, 2, 10, 5, 7]; 
числа(num); 
 
 
function числа(array) { 
    let filteredArray = array.filter(num => num > 5); 
    alert(filteredArray); 
  }