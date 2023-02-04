window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   /* Your solution goes here */
   let xhr = new XMLHttpRequest();
   xhr.responseType = "json";
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.open("GET", `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();
}

function responseReceivedHandler() {
   /* Your solution goes here */
   let quotes = this.response;
   let quotesDiv = document.getElementById("quotes");
   if(quotes.error) {
      quotesDiv.innerHTML = this.response.error;
   } else {
      let quotesList = "<ol>";
      for (let i = 0; i < quotes.length; i++) {
         quotesList += `<li>${quotes[i].quote} - ${quotes[i].source}</li>`;
      }
      quotesList += "</ol>";
      quotesDiv.innerHTML = quotesList;
   }
}