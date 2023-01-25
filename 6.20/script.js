function calcWordFrequencies() {
   let input = prompt("Enter words: ");
   let words = input.split(" ");
   let wordFrequency = new Map();

   for(let i = 0; i < words.length; i++) {
    if(wordFrequency.has(words[i])) {
        wordFrequency.set(words[i], wordFrequency.get(words[i]) + 1);
    } else {
        wordFrequency.set(words[i], 1);
    }
   }

   for (let [word, frequency] of wordFrequency) {
    console.log(word + " " + frequency);
   }
}