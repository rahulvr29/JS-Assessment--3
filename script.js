"use strict";
/* 1. Write a program that translates a given sentence from one language to another using a dictionary. 

Sample Input:  
const sentence = "Hello, how are you?"; 

const dictionary = { 

"Hello": "Hola", 

"how": "cómo", 

"are": "estás", 

"you": "tú" 

}; 

Sample Output: Translated Sentence: "Hola, cómo estás tú?"  */

function translateSentence(sentence, dictionary) {
  const words = sentence.split(' ');
  const translatedWords = [];

  for (const word of words) {
    if (dictionary.hasOwnProperty(word)) {
      translatedWords.push(dictionary[word]);
    } else {
      translatedWords.push(word);
    }
  }

  
  const translatedSentence = translatedWords.join(' ');

  return translatedSentence;
}

const sentence = "Hello, how are you?";
const dictionary = {
  "Hello": "Hola",
  "how": "cómo",
  "are": "estás",
  "you": "tú"
};

const translatedSentence = translateSentence(sentence, dictionary);
console.log(`Translated Sentence: "${translatedSentence}"`);


/* 2. Write a program that calculates the total price of a product with tax based on user location using bind. 

Sample Input:   
const product = { price: 50 }; 
const userLocation = "NY"; 

Sample Output:   
Total Price with Tax: $54.50  */

function calculateTotalPrice(taxRate) {
  const total = this.price * (1 + taxRate / 100);
  return total.toFixed(2);
}

const product = { price: 50 };
const userLocation = "NY";


const taxRates = {
  "NY": 9.00,  
  "CA": 8.25,  
};


if (taxRates.hasOwnProperty(userLocation)) {
  const calculateTotalPriceWithTax = calculateTotalPrice.bind(product, taxRates[userLocation]);
  const totalPriceWithTax = calculateTotalPriceWithTax();

  console.log(`Total Price with Tax: $${totalPriceWithTax}`);
} else {
  console.log("Tax rate for this location is not defined.");
}




/* 3. Write a program that formats a list of phone numbers using a predefined formatting function using bind. 

Sample Input: const phoneNumbers = ["1234567890", "9876543210"]; 
Sample Output: Formatted Phone Numbers: "(123) 456-7890", "(987) 654-3210"  */

function formatPhoneNumber(formatFunction, phoneNumber) {
  return formatFunction(phoneNumber);
}

function formatPhoneNumberDefault(phoneNumber) {
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

const phoneNumbers = ["1234567890", "9876543210"];
const formatPhoneNumberWithDefault = formatPhoneNumber.bind(null, formatPhoneNumberDefault);
const formattedPhoneNumbers = phoneNumbers.map(formatPhoneNumberWithDefault);

console.log("Formatted Phone Numbers:", formattedPhoneNumbers);




/* 4. */



/* 5.  */




/* 6.  */




/* 7. */





/* 8.  */





/* 9. */




/* 10.  */



