
// 1. Create a variable to store your name and display it in an alert.

function showMessage(){

    console.log("Simon")

}

showMessage();



// 2. Declare two number variables and show their sum, difference, product, and quotient.

function arithm(){

    let x = 21

    let y = 7

    console.log(x+y, x-y, x*y, x/y)
}

arithm();



// 3. Write a program that converts Celsius to Fahrenheit.

function convertCtoF(){

    let celsiusTemp = 25

    let fahrenheitTemp = (celsiusTemp * 9/5) + 32;

    return fahrenheitTemp;

}
console.log(convertCtoF());



// 4. Create a program that calculates the area of a rectangle using variables for length and width.

function areaOfRec(){

  let L = 5

  let W = 2

  console.log(L*W)
}
areaOfRec();



// 5. Write code that checks if a number is even or odd and displays the result.

let value = 8;

let remainder = (value % 2)

if(remainder == 0){


  console.log(`${value} is an even number`)

}

else{

  console.log(`${value} is an odd number`)

}



// 6. Create a program that determines if a year entered is a leap year.

let year = 2025;

if(year %4 == 0){

    console.log(year + " is a leap year")
  }

else{
   console.log(year + " is not a leap yaer");
 }

            

//  7. Write a function that returns the reverse of a string input.

function reverseString(str){

    let charactArray = str.split("");

   charactArray.reverse();

   console.log(charactArray);

}

reverseString("SIMON")



// 8. Create a function that counts the number of vowels in a string.

const count_vowels = function (str){

    return str.replace(/[^aeiuo]/gmi, "").length;
}
console.log(count_vowels("My name is Tsegen Simon, and I am a mobile developer"));



// 9. Write a program that finds the largest number in an array of 5 numbers.

const num = [3,2,7,9,8,23,76,55]

console.log(Math.max(...num));



// 10. Create a function that checks if a string is a palindrome.

const str = "Hannah";

const isPalindrome = (inStr) => {

    inStr = inStr.toLowerCase();

    for (let i = 0; i < inStr.length; i+=1) {

        if (inStr[i] !== inStr[inStr.length -1 -i]) {

            return false;

        }

    }

    return true;
}

console.log(isPalindrome(str));



// 11. Write code that calculates the factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(6)); 



// 12. Create a function that generates a random number between two given values.

let min = 1;
let max = 6;
 console.log(Math.floor(Math.random() * ( max - min + 1 )) + min );


// 13. Write a program that converts a number of seconds into hours, minutes, and seconds.

let sec = 9000
let mins = (sec/60)
let hour = (mins/60);
console.log(mins);
console.log(hour);



// 14. Create a program that checks if a number is prime.

function isPrime(n) {

    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;

    return true;

  }
  
  const number = 99;

  console.log(`${number} is ${isPrime(number) ? '' : 'not '}a prime number.`);
  


// 15. Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {

    return sentence

      .split(' ')

      .map(word => word.charAt(0).toUpperCase() + word.slice(1))

      .join(' ');
  }
  
  const sentence = "hello simon, how is mobile development going?";

  console.log(capitalizeWords(sentence)); 
  


// 16. Create a program that calculates the sum of all numbers from 1 to n.

  function sumTo(n) {

    let sum = 0;

    for (let i = 1; i <= n; i++) {

      sum += i;

    }

    return sum;

  }
  
  const n = 10; 

  console.log(`The sum from 1 to ${n} is ${sumTo(n)}.`);



// 17. Write code that finds the average of numbers in an array.
  
function average(arr) {

    if (arr.length === 0) return 0 // Prevent division by zero

    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum / arr.length;
  }
  
  const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  console.log(`The average is ${average(numbers)}.`);
  


// 18. Create a function that removes duplicate values from an array.

function removeDuplicates(arr) {

    return [...new Set(arr)];

  }
  
const nums = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 10, 8, 8, 9, 9,];

const uniqueNums = removeDuplicates(nums);

console.log(uniqueNums); 



// 19. Write a program that counts down from 10 to 1, then displays "Blast off!".

for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  console.log("Blast off!");



// 20. Create a function that determines if a string contains only numbers.
  
function isNumeric(str) {

    return /^[0-9]+$/.test(str);

  }
  console.log(isNumeric("12345"));
  console.log(isNumeric("abc123"));   
  console.log(isNumeric("123 456")); 
  console.log(isNumeric(""));         
  


// 21. Write code that finds the second smallest number in an array.

function secondSmallest(arr) {
    
    let unique = [...new Set(arr)];
  
    if (unique.length < 2) {

      return null;

    }
  
    unique.sort((a, b) => a - b);
  
    return unique[1];
  }
  
console.log(secondSmallest([4, 1, 2, 3, 7, 5, 10]));
console.log(secondSmallest([7, 7, 7, 7]));     
console.log(secondSmallest([10]));              
console.log(secondSmallest([5, 0, 1, 5, 2, 3]));  
  
  

// 22. Create a program that displays the multiplication table for a given number.

function multiplicationTable(number) {

    let i = 1;

    while (i <= 12) {

      console.log(`${number} x ${i} = ${number * i}`);
      i++;
    }

  }
  multiplicationTable(10);
  


// 23. Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).

function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    if (password.length >= minLength && hasUppercase && hasLowercase && hasNumber) {

      return true;

    } 
    
    else {

      return false;

    }

  }
  
  console.log(validatePassword("simoN360"));
  console.log(validatePassword("smon36010")); 
  console.log(validatePassword("SIMON1360"));
  console.log(validatePassword("Tsegensimon1"));


  
// 24. Create code that simulates a simple calculator with basic operations.

  function simpleCalculator() {
    function calculate(num1, operator, num2) {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
          return 'Error: Invalid operator';
      }
    }
  
    console.log(calculate(10, '+', 5));   // 15
    console.log(calculate(10, '-', 5));   // 5
    console.log(calculate(10, '*', 5));   // 50
    console.log(calculate(10, '/', 2));   // 5
    console.log(calculate(10, '/', 0));   // Error: Division by zero
    console.log(calculate(10, '^', 2));   // Error: Invalid operator
  }
  
  simpleCalculator();

  

// 25. Write a program that finds all factors of a given number.

function findFactors(number) {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        console.log(i);
      }
    }
  }
findFactors(25);  



// 26. Create a function that checks if two strings are anagrams.

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()
    
    if (str1.length !== str2.length) {
      return false

    }

    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')
  
    return str1 === str2
  }
  
  const check = isAnagram('loop', 'pool')
  console.log(check);


// 27. Write a program that generates the Fibonacci sequence up to n terms.

function fibonacciSeries(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacciSeries(10));



// 28. Create code that sorts an array of numbers without using the built-in sort method.

function bubbleSort(arr){

    let n = arr.length;

    for (let i=0; i<n-1; i++){

      for (let j=0; j<n-i-1; j++){

        if(arr[j]>arr[j+1]){

          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
      }
  }
    }
   return arr;
  }
  
  let array = [1,9,2,8,4,6,]
  console.log("sorted Array ", bubbleSort(array));



// 29. Write a function that counts how many times a specific element appears in an array.

let scores = [100, 60, 75, 85, 100, 2, 5, 55, 2, 55, 100, 50];

const countAllElements = function(arr) {

    return arr.reduce((acc, elem) => {

        acc[elem] = (acc[elem] || 0) + 1;

        return acc;
        
    }, {});
};

console.log(countAllElements(scores));


// 30. Create a shopping cart program where users can add items, remove items, and calculate the total price.

const itemNames = ["Laptop", "Phone"];
const itemPrices = [1000, 500];
const itemQuantities = [1, 2];
const itemInStock = [true, true];

const ShoppingCart = () => {
  const cart = [];

  const addItemToCart = (itemIndex) => {
    if (itemInStock[itemIndex]) {
      cart.push(itemIndex);
      console.log(`${itemNames[itemIndex]} added to the cart`);
    } else {
      console.log(`${itemNames[itemIndex]} is out of stock`);
    }
  };

  const removeItemFromCart = (itemIndex) => {
    const index = cart.indexOf(itemIndex);
    if (index > -1) {
      cart.splice(index, 1);
    }
  };

  const getCartItems = () => {
    return cart.map(itemIndex => itemNames[itemIndex]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, itemIndex) => {
      return total + itemPrices[itemIndex] * itemQuantities[itemIndex];
    }, 0);
  };

  return {
    addItemToCart,
    removeItemFromCart,
    getCartItems,
    calculateTotal
  };
};

const myCart = ShoppingCart();
myCart.addItemToCart(0);
myCart.addItemToCart(1);
console.log(myCart.getCartItems());
console.log(myCart.calculateTotal());
myCart.removeItemFromCart(1);
console.log(myCart.getCartItems());
console.log(myCart.calculateTotal());

