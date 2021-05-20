

// QUESTION 1


 const convertFahrToCelsius = (fahrenheit) => {
  let ftoCelsius = Math.ceil(((fahrenheit - 32) * 5) / 9); 
  console.log(`${fahrenheit} F is equal to ${ftoCelsius} C.`)
 }


 convertFahrToCelsius(); 



//  QUESTION 2 
 const checkYuGiOh = (n) => {
   for(let i = 0; i <= n; i++) {
    if( n % 3 === 0) {
      console.log("yu"); 
    } else if (n % 5 === 0) {
      console.log("gi"); 
    } else if (n % 2 === 0) {
      console.log(`${i}, oh `); 
    }  else {
     console.log(`invalid parameter:  ,  fizzbuzz is meh`); 
   }
 }

} 

checkYuGiOh(); 