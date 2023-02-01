window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   document.getElementById("convertButton").addEventListener("click", function() {
      let cel = document.getElementById("cInput").value;
      let fah = document.getElementById("fInput").value;
      let celsius = parseFloat(document.getElementById("cInput").value);
      let fahrenheit = parseFloat(document.getElementById("fInput").value);
      let errorMsg = document.getElementById("errorMessage");
      let imgElement = document.getElementById("weatherImage");
      
      //set empty by default
      errorMsg.innerHTML = "";
      
      //if cel is a num 
      if(!isNaN(celsius)) {
         fahrenheit = convertCtoF(celsius);
         document.getElementById("fInput").value = fahrenheit;
      } 
      
      //if fahr is a num
      else if(!isNaN(fahrenheit)) {
         celsius = convertFtoC(fahrenheit);
         document.getElementById("cInput").value = celsius;
      } 
      
      //if cel is str and fah is empty
      else if(isNaN(celsius) && fah === ""){
         errorMsg.innerHTML = cel + " is not a number"; 
      } 
      
      //if fah is str and cel is empty
      else if(isNaN(fahrenheit) && cel === "") {
         errorMsg.innerHTML = fah + " is not a number"; 
      } 
      
      
      if(fahrenheit < 32) {
         imgElement.src = "cold.png";
      } else if(fahrenheit >= 32 && fahrenheit <= 50) {
         imgElement.src = "cool.png";
      } else if(fahrenheit > 50) {
         imgElement.src = "warm.png";
      }

   });

   document.getElementById("fInput").addEventListener("input", clearCel);
   function clearCel() {
      document.getElementById("cInput").value = "";
   }
   
   document.getElementById("cInput").addEventListener("input", clearFah);
   function clearFah() {
      document.getElementById("fInput").value = "";
   }
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