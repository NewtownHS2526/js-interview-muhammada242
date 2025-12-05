// Level One - Problem Set 1: Library Access System
// Logic Rules:
// - If memberType is "Premium" AND age is 18 → return "can access"
// - If age is 18 AND memberType is NOT "Premium" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
// Task: Check if member is Premium and age is 18
// Hint: Use if statement with && operator
function easyProblem1(memberType, age) {
    if (memberType === "Premium" && age === 18) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Premium", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Premium", 17)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
// Task: Check if age is 18 and memberType is NOT "Premium"
// Hint: Use if-else with !== operator
function easyProblem2(memberType, age) {
    if (age === 18 && memberType !== "Premium") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Premium", 18)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
// Task: Handle all three cases using if-else if-else
// Hint: Check conditions in order: first "Premium" + 18, then 18 + not "Premium", then else
function mediumProblem(memberType, age) {
    if (memberType === "Premium" && age === 18) {
        return "can access";
    } else if (age === 18 && memberType !== "Premium") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Premium", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Regular", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Student", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
// Task: Create a function that checks age first, then memberType
// Hint: Use nested if statements - check age first, then memberType inside
function hardProblem(memberType, age) {
    if (age === 18) {
        if (memberType === "Premium") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Premium", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Regular", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Premium", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Student", 16)); // Should print: "go home"