// Problem 1: Find the Smallest Integer in an Array

// Create a function findSmallestInteger
// Set smallest to the first element of the array
// Loop through the array starting from the second element
// If the current element is smaller than smallest, update smallest
// Return smallest

// Solution:

function findSmallestInteger(arr) {
    // Initialize the smallest number as the first element in the array
    let smallest = arr[0];
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is smaller than the smallest, update the smallest
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    // Return the smallest number found
    return smallest;
}

console.log(findSmallestInteger([34, 15, 88, 2])); 
console.log(findSmallestInteger([34, -345, -1, 100])); 


// Problem 2: Count Sheep

// Create a function countSheep
// Initialize an empty string murmur
// Loop from 1 to num
// Append the current number and " sheep..." to murmur
// Return murmur

// Solution:

function countSheep(num) {
    // Initialize an empty string to store the result
    let murmur = '';
    
    // Iterate from 1 to the given number
    for (let i = 1; i <= num; i++) {
        // Append the current count and " sheep..." to the string
        murmur += i + ' sheep...';
    }
    
    // Return the final string
    return murmur;
}

console.log(countSheep(3)); 


// Problem 3: Powers of Two

// Create a function powersOfTwo
// Initialize an empty array result
// Loop from 0 to n
// Calculate 2 raised to the power of the current index
// Push the result to the array result
// Return the array result

// Solution:

function powersOfTwo(n) {
    // Initialize an empty array to store the result
    let result = [];
    
    // Iterate from 0 to n
    for (let i = 0; i <= n; i++) {
        // Calculate 2 raised to the power of i and push it to the result array
        result.push(2 ** i);
    }
    
    // Return the result array
    return result;
}

console.log(powersOfTwo(3)); 


// Problem 4: Smash Words

// Create a function smashWords
// Join the words array into a single string with spaces between words
// // Return the resulting string

// Solution:

function smashWords(words) {
    // Join the words array into a single string with spaces between words
    return words.join(' ');
}

console.log(smashWords(['Hello', 'from', 'Space!'])); 

// Problem 5: Basic Mathematical Operations

// Create a function basicOperation
// Check if the operation is addition
// If true, return the sum of value1 and value2
// Check if the operation is subtraction
// If true, return the difference of value1 and value2
// Check if the operation is multiplication
// If true, return the product of value1 and value2
// Check if the operation is division
// If true, return the quotient of value1 and value2
// If none of the above, return 'Invalid operation'

// Solution:

function basicOperation(operation, value1, value2) {
    // Use an if-else statement to determine the operation
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    } else {
        // Return an error message for invalid operations
        return 'Invalid operation';
    }
}

console.log(basicOperation('+', 5, 3)); 
console.log(basicOperation('-', 10, 4)); 
console.log(basicOperation('*', 6, 2)); 
console.log(basicOperation('/', 15, 3)); 











