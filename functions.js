const { time } = require("console");
const { toNamespacedPath } = require("path");

// WRITE REUSABLE CODE WITH FUNCTIONS
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction(); // every time the function is called  Heyya, World will print 3x
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5) // outputs 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5); // outputs 15

// GLOBAL SCOPE AND FUNCTIONS
//scope: refers to the visibility of variables, variables defined outside of the function (global scope can be seen anywhere)
var myGlobal = 10;

function fun1() {
    //assign 5 to oopsGlobal Here
    //automatically global
    oopsGlobal = 5; //if we had the var keyword it would be scopes to this function
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    var myVariable = 5;
    console.log(myVariable);
}
myLocalScope();

//console.log(myVariable); // cannot access var myVariable because it was has a local scope to the function

// GLOBAL VS. LOCAL SCOPE IN FUNCTIONS
var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "Sweater"
    return outerWear;
}
console.log(myOutfit()); // Sweater because local variables takes precedence over global variables
console.log(outerWear) // T-shirt (Global variable)

// RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10)); //3

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5)); //25

// UNDERSTANDING UNDEFINED VALUES RETURNED FROM A FUNCTION
var sum = 0
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum += 5;
}
console.log(addThree());//undefined
console.log(addFive());//undefined 

// ASSIGNMENT WITH A RETURNED VALUE
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed); //2

// STAND IN LINE
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(); //removes the first item and returns it
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)) //changes an array to a string that can be easily printed to the screen
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// BOOLEAN VALUES
function welcomeToBooleans() {
    return false;
}
console.log(welcomeToBooleans()) //outputs false (booleans can return true or false)

// USE CONDITIONAL LOGIC WITH IF STATEMENTS
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true)); //Yes, that was true

// COMPARISON WITH THE EQUALITY OPERATOR
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    } return "Not equal";
}
console.log(testEqual(10)); //Not equal

// COMPARISON WITH THE STRICT EQUALITY OPERATOR
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not equal";
}
testStrict('7'); //Not equal
/*
3 == 3 true
3 === '3' false 
*/

// PRACTICING COMPARING DIFFERENT VALUES
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal"
}
console.log(compareEquality(10, "10")); // Not equal === checks if the number and string is equal doesn't convert the types like ==

// COMPARISON WITH INEQUALITY OPERATOR
function testNotEqual(val) {
    if (val != 99) {
        return "Not equal";
    }
    return "Equal"
}
console.log(testNotEqual(10)); // Not equal

// COMPARISON WITH THE STRICT INEQUALITY OPERATOR
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal"
}
console.log(testStrictNotEqual('17')); // Not equal

// COMPARISON WITH THE GREATER THAN OPERATOR
function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan(10)); //10 or under

// COMPARISON WITH GREATER THAN OR EQUAL TO OPERATOR
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "less than 10";
}
console.log(testGreaterThanOrEqual(10)) // 10 or over

// COMPARISON WITH THE LESS THAN OPERATOR
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "under 55"
    }
    return "55 or over"
}
console.log(testLessThan(10)); // Under 25

// COMPARISON WITH LESS THAN OR EQUAL TO OPERATOR
function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "smaller than or equal to 12"
    }
    if (val <= 24) {
        return "smaller than or equal to 24"
    }
    return "more than 24"
}
console.log(testLessThanOrEqual(10)); // smaller than or equal to 12

// COMPARISON WITH THE LOGICAL AND OPERATOR
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "yes";
    }
    return "no"
}
console.log(testLogicalAnd(26)) //yes

// COMPARISON WITH THE LOGICAL OR OPERATOR
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "outside";
    }
    return "inside";
}
console.log(testLogicalOr(15)); // inside

// ELSE STATEMENTS
function testElse(val) {
    if (val > 5) {
        result = "bigger than 5";
    } else {
        result = "5 or smaller"
    }
    return result;
}
console.log(testElse(2)); // 5 or smaller

// ELSE IF STATEMENTS 
function testElseIf(val) {
    if (val > 10) {
        return "greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    } else {
        return "between 5 and 10";
    }
}
console.log(testElseIf(6)); // between 5 and 10

// LOGICAL ORDER IN IF ELSE STATEMENTS
function orderMyLogic(val) {
    if (val < 5) {
        return "less than 5"; // has to be in order bc when condition is met it exits the function and returns output
    } else if (val < 10) {
        return "less than 10";
    } else {
        return "greater than or equal to 10"
    }
}
console.log(orderMyLogic(3)); // less than 5

// CHAINING IF ELSE STATEMENTS
/*
write chained if else statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(19)); //large


// GOLD CODE
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return toNamespacedPath[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 4)); //birdie
console.log(golfScore(5, 2)); //Eagle
console.log(golfScore(5, 8)); //Go home!

// SWITCH STATEMENT
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1)); //alpha
console.log(caseInSwitch(2)); //beta
console.log(caseInSwitch(3)); //gama

// DEFAULT OPTION IN SWITCH STATEMENTS
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a")); //apple
console.log(switchOfStuff("x")); //stuff

// MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1)); //Low
console.log(sequentialSizes(5)); //Mid
console.log(sequentialSizes(8)); //High

// REPLACING IF ELSE CHINS WITH SWITCH
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley"
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "ate nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch(99)); //Missed me by this much

// RETURNING BOOLEAN VALUE FROM FUNCTIONS
function isLess(a, b) {
    return a < b; // all comparison operators return a true or false value
}
console.log(isLess(10, 15)); //true
console.log(isLess(20, 15)); //false

// RETURNING AN EARLY PATTERN FROM FUNCTIONS
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2)); //8
console.log(abTest(-2, 2)); //undefined



