// COMMENTS
var number = 5; // in-line comment
/* this is a 
whoop
whoop
whoop
whoop
whoop
whoop
whoop
whoop
whoop
whoop 
multi-line comment */
number = 9;

/* data types: 
undefined, null, boolean, string, symbol, number, and object
*/

// VARIABLES
var myName = "Mariam" //used throughout whole program
myName = 8
let ourName = "freeCodeCamp" //only used within the scope of where you declare them
const pi = 3.15 //variable that can never change

//storing values with assignment operator
var a; //declaring variable
var b = 2; //declaring and assigning variables
console.log(a);

a = 7;
b = a;
console.log(a);

//initialing variables with assignment operators
var a = 9;

//initialize these variables
var a = 5;
var b = 10;
var c = "I am a";
//do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";

// CASE SENSITIVITY IN VARIABLES 
//declarations 
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// ADDING NUMBERS
var sum = 10 + 10;
console.log(sum);

// SUBTRACTING NUMBERS
var difference = 45 - 33;
console.log(difference);

// MULTIPLYING NUMBERS
var product = 8 * 10;
console.log(product);

// DIVIDING NUMBERS
var quotient = 66 / 33;
console.log(quotient);

// INCREMENTING NUMBERS
var myVar = 87;
myVar++;
console.log(myVar);

// DECREMENTING NUMBERS
var myVar = 11;
myVar--;
console.log(myVar);

// DECIMAL NUMBERS
var ourDecimal = 5.7;
var myDecimal = 0.009;

// MULTIPLYING DECIMALS
var product = 2.0 * 2.5;
console.log(product);

// DIVIDING DECIMALS
var quotient = 4.4 / 2.0;
console.log(quotient);

// FINDING A REMAINDER
var remainder;
remainder = 11 % 3;
console.log(remainder);

// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
var a = 3;
var b = 17;
var c = 12;
// Only modify code below this line
a += 12 // a = a + 12;
b += 9 // b = 9 + b;
c += 7 // c = c + 7;

// COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
var a = 11;
var b = 9;
var c = 3;
// Only modify code below this line
a -= 6 // a = a - 6;
b -= 15 // b = b - 15;
c -= 1 // c = c - 1;

// COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 5;
var b = 12;
var c = 4.6;
// Only modify code below this line
a *= 5 // a = a * 5;
b *= 3 // b = b * 3;
c *= 10 // c = c * 10;

// COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 48;
var b = 108;
var c = 33;
// Only modify code below this line
a /= 12 // a = a / 12;
b /= 4 // b = b / 4;
c /= 11 // c = c / 11;

// DECLARING STRING VARIABLES
var myFirstName = "Mariam";
var myLastName = "Conde";

// ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// QUOTING STRINGS WITH SINGLE QUOTES
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

// ESCAPING SEQUENCES IN STRINGS

/*****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// CONCATENATING STRINGS WITH PLUS OPERATOR
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

// only change below this line
myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

// CONSTRUCTING STRINGS WITH VARIABLES
var siteName = "freecodecamp";
var ourStr = "Hello, our name is " + siteName + ", how are you?";
console.log(ourStr);


var myName = "Mariam";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// APPENDING VARIABLES TO STRINGS
var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// FINDING LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

// BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // ZERO BASED INDEXING
console.log(firstLetterOfLastName);

// STRING IMMUTABILITY
var myStr = "Jello World";
console.log(myStr);
myStr[0] = "H"; // cannot change string
myStr = "Hello World"; // can reassign entire string
console.log(myStr);

// BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1]; //3-1[2]
console.log(lastLetterOfFirstName); //a

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; //8-1=[7]
console.log(lastLetterOfLastName); //e

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 2]; //8-1=[6]
console.log(lastLetterOfLastName); //c

// WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    // Your code above this line
    return result;
}
// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// STORE MULTIPLE VALUES IN ONE VARIABLE USING JAVASCRIPT ARRAYS
var ourArray = ["John", 23]; // ANY DATA TYPE

// Only change code below this line.
var myArray = ["Mariam", 21];

// NESTED ARRAYS
var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray[0]); // ["the universe", 42]
console.log(ourArray[1]); // ["everything", 101010]
var myArray = [["Bulls", 23], ["White Sox", 45]];

var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

var myArray = [50, 60, 70];
var myData = myArray[0]; // equals 50
console.log(myData);

// MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18, 64, 99];
ourArray[1] = 45;

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray); // [45, 64, 99]

// ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][1]; //8
console.log(myData);

// MANIPULATE ARRAYS WITH PUSH()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // add an element to the end
console.log(myArray); // [["John", 23], ["cat", 2], ["dog", 3]]

// MANIPULATE ARRAYS WITH POP()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); // removes the last element
console.log(myArray); // [["John", 23]]

// MANIPULATE ARRAYS WITH SHIFT()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(); // removes the first element
console.log(myArray); // [["dog", 3]]

// MANIPULATE ARRAYS WITH UNSHIFT()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // removes the first element
console.log(myArray); // [["dog", 3]]
myArray.unshift(["Paul", 35]);
console.log(myArray); // [["Paul", 35], ["dog", 3]]

// SHOPPING LIST
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]; // arrays of arrays

