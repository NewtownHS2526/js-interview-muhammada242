// Level Two - Problem Set 3: Restaurant VIP Reservation System
// Logic Rules:
// - If memberStatus is "VIP" AND age is 18 → return "can access"
// - If age is 18 AND memberStatus is NOT "VIP" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
// Task: Write a simple if statement
// Hint: Just check one condition at a time
function easyProblem1(memberStatus, age) {
    if (memberStatus === "VIP" && age === 18) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("VIP", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Regular", 18)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
// Task: Use if-else to handle two cases
// Hint: if handles one case, else handles the other
function easyProblem2(memberStatus, age) {
    if (age === 18 && memberStatus !== "VIP") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("VIP", 18)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Member", 17)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
// Task: Handle all three rules in one function
// Hint: Use if, else if, and else
function mediumProblem(memberStatus, age) {
    if (memberStatus === "VIP" && age === 18) {
        return "can access";
    } else if (age === 18 && memberStatus !== "VIP") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("VIP", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Regular", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("VIP", 16)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Member", 22)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
// Task: Use nested if statements with multiple levels
// Hint: First check age, then check memberStatus inside
function hardProblem(memberStatus, age) {
    if (age === 18) {
        if (memberStatus === "VIP") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("VIP", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Regular", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("VIP", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Member", 18)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Guest", 20)); // Should print: "go home"