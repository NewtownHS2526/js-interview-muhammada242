// Level Four - Problem Set 1: Art Gallery Exclusive Access
// Logic Rules:
// - If patronLevel is "Collector" AND age is 21 → return "can access"
// - If age is 21 AND patronLevel is NOT "Collector" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
// Task: Check if patronLevel is "Collector" and age is 21
// Hint: Use if statement with && operator
function easyProblem1(patronLevel, age) {
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Collector", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Collector", 20)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
// Task: Check if age is 21 and patronLevel is NOT "Collector"
// Hint: Use if-else with !== operator
function easyProblem2(patronLevel, age) {
    if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Member", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Collector", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
// Task: Handle all three cases using if-else if-else
// Hint: Check conditions in order: first "Collector" + 21, then 21 + not "Collector", then else
function mediumProblem(patronLevel, age) {
    if (patronLevel === "Collector" && age === 21) {
        return "can access";
    } else if (age === 21 && patronLevel !== "Collector") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Collector", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Visitor", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Student", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
// Task: Create a function that checks age first, then patronLevel
// Hint: Use nested if statements - check age first, then patronLevel inside
function hardProblem(patronLevel, age) {
    if (age === 21) {
        if (patronLevel === "Collector") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Collector", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Member", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Collector", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Guest", 15)); // Should print: "go home"
