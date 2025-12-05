// Level Three - Problem Set 3: Hotel Suite Booking System
// Logic Rules:
// - If roomType is "Presidential" AND guestAge is 21 → return "can access"
// - If guestAge is 21 AND roomType is NOT "Presidential" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple condition check
// ============================================
// Task: Write a simple if statement
// Hint: Just check one condition at a time
function easyProblem1(roomType, guestAge) {
    if (roomType === "Presidential" && guestAge === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Presidential", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Deluxe", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using else statement
// ============================================
// Task: Use if-else to handle two cases
// Hint: if handles one case, else handles the other
function easyProblem2(roomType, guestAge) {
    if (guestAge === 21 && roomType !== "Presidential") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Presidential", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Suite", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete if-else if-else chain
// ============================================
// Task: Handle all three rules in one function
// Hint: Use if, else if, and else
function mediumProblem(roomType, guestAge) {
    if (roomType === "Presidential" && guestAge === 21) {
        return "can access";
    } else if (guestAge === 21 && roomType !== "Presidential") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Presidential", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Presidential", 18)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Standard", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Complex nested conditions
// ============================================
// Task: Use nested if statements with multiple levels
// Hint: First check guestAge, then check roomType inside
function hardProblem(roomType, guestAge) {
    if (guestAge === 21) {
        if (roomType === "Presidential") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Presidential", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Presidential", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Suite", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Standard", 19)); // Should print: "go home"