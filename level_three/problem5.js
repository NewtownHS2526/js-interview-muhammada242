// Level Three - Problem Set 5: Music Festival VIP Access
// Logic Rules:
// - If ticketCategory is "Platinum" AND age is 18 → return "can access"
// - If age is 18 AND ticketCategory is NOT "Platinum" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
// Task: Use && to check both ticketCategory and age
// Hint: Both conditions must be true for && to work
function easyProblem1(ticketCategory, age) {
    if (ticketCategory === "Platinum" && age === 18) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Platinum", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Platinum", 17)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("General", 18)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
// Task: Check if ticketCategory is different from "Platinum"
// Hint: !== checks if values are NOT equal
function easyProblem2(ticketCategory, age) {
    if (age === 18 && ticketCategory !== "Platinum") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("VIP", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Platinum", 18)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Standard", 16)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
// Task: Write all three conditions using if-else if-else
// Hint: Check each condition carefully
function mediumProblem(ticketCategory, age) {
    if (ticketCategory === "Platinum" && age === 18) {
        return "can access";
    } else if (age === 18 && ticketCategory !== "Platinum") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Platinum", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("VIP", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Platinum", 16)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("General", 18)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Premium", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
// Task: Use nested if-else statements with proper structure
// Hint: Think about the logic flow - what should be checked first?
function hardProblem(ticketCategory, age) {
    if (age === 18) {
        if (ticketCategory === "Platinum") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Platinum", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("VIP", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Platinum", 17)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("General", 18)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Premium", 25)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Standard", 18)); // Should print: "can sign in"
