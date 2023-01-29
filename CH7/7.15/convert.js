window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function

}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   let tempInC = parseFloat(degreesCelsius);
   let tempInF = tempInC * 9/5 + 32;

   return tempInF;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   let tempInF = parseFloat(degreesFahrenheit); 
   let tempInC = (tempInF - 32) * 5/9;

   return tempInC;
}
