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
  "you?": "tú"
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




/* 4. Write a program that checks if a given string of parentheses is balanced using a stack.. 

Sample Input:  const str = "{[()]}"; 
Sample Output:  Is Balanced: true */

function isBalanced(str) {
  const stack = [];
  const openingBrackets = '([{';
  const closingBrackets = ')]}';
  
  for (const char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (!lastOpeningBracket || openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(char)) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

const str = "{[()]}";
const result = isBalanced(str);

console.log("Is Balanced:", result);


/* 5. Write a program that takes an arbitrary number of strings and concatenates them using a rest parameter. 

Sample Input: const result = concatenateStrings("Hello", "world", "from", "JavaScript!"); 
Sample Output:  Concatenated String: "Hello world from JavaScript!"  */

function concatenateStrings(...strings) {
  return strings.join(' ');
}

const result2 = concatenateStrings("Hello", "world", "from", "JavaScript!");

console.log(`Concatenated String: "${result2}"`);




/* 6.  Write a program that takes an arbitrary number of numbers and finds the maximum value using a rest parameter. 

Sample Input: const max = (10, 5, 30, 15, 25); 
Sample Output:  Maximum Value: 30  */

function findMax(...numbers) {
  if (numbers.length === 0) {
    return undefined; 
  }
  let max = numbers[0];

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }

  return max;
}

const max = findMax(10, 5, 30, 15, 25);

console.log(`Maximum Value: ${max}`);



/* 7.  Write a program that creates a deep clone of a nested array using the spread syntax. 

Sample Input: const original = [1, [2, 3], [4, [5, 6]]]; 
Sample Output:  Deep Clone: [1, [2, 3], [4, [5, 6]]] */

function deepCloneArray(arr) {
  return arr.map((item) => {
    if (Array.isArray(item)) {
      return deepCloneArray(item); 
    } else {
      return item; 
    }
  });
}

const original = [1, [2, 3], [4, [5, 6]]];
const deepClone = deepCloneArray(original);

console.log("Deep Clone:", deepClone);




/* 8. Write a program that takes a function and an array of numbers, and spreads the array as function parameters. 

Sample Input: const numbers = [10, 20, 30]; 
Sample Output: Sum: 60  */


function sumNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];

const result3 = sumNumbers(...numbers);

console.log(`Sum: ${result3}`);



/* 9.Write a program that converts a given time from one time zone to another. 

Sample Input:  const time = "12:00 PM"; 
const fromTimeZone = "UTC"; 
const toTimeZone = "PST"; 

Sample Output: Converted Time: "4:00 AM"  */





/* 10. Write a program that calculates the area of various shapes using different methods, such as bind. 

Sample Input: 
const rectangle = { length: 5, width: 3 }; 
const circle = { radius: 7 }; 

Sample Output: 

Rectangle Area: 15 
Circle Area: 153.94  */

function calculateRectangleArea() {
  return this.length * this.width;
}

function calculateCircleArea() {
  return Math.PI * Math.pow(this.radius, 2);
}

const rectangle = { length: 5, width: 3 };
const circle = { radius: 7 };

const calculateRectangleAreaBound = calculateRectangleArea.bind(rectangle);
const calculateCircleAreaBound = calculateCircleArea.bind(circle);

const rectangleArea = calculateRectangleAreaBound();
const circleArea = calculateCircleAreaBound();

console.log(`Rectangle Area: ${rectangleArea.toFixed(2)}`);
console.log(`Circle Area: ${circleArea.toFixed(2)}`);




