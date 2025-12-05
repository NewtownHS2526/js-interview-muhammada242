// Level One - Problem Set 3: Gym Membership Access
// Logic Rules:
// - If membershipLevel is "Gold" AND age is 21 → return "can access"
// - If age is 21 AND membershipLevel is NOT "Gold" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
// Task: Write a simple if statement
// Hint: Just check one condition at a time
function easyProblem1(membershipLevel, age) {
    if (membershipLevel === "Gold" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Gold", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Silver", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
// Task: Use if-else to handle two cases
// Hint: if handles one case, else handles the other
function easyProblem2(membershipLevel, age) {
    if (age === 21 && membershipLevel !== "Gold") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Silver", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Gold", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Bronze", 20)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
// Task: Handle all three rules in one function
// Hint: Use if, else if, and else
function mediumProblem(membershipLevel, age) {
    if (membershipLevel === "Gold" && age === 21) {
        return "can access";
    } else if (age === 21 && membershipLevel !== "Gold") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Gold", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Gold", 18)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Bronze", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
// Task: Use nested if statements with multiple levels
// Hint: First check age, then check membershipLevel inside
function hardProblem(membershipLevel, age) {
    if (age === 21) {
        if (membershipLevel === "Gold") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Gold", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Silver", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Gold", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Bronze", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Platinum", 19)); // Should print: "go home"
