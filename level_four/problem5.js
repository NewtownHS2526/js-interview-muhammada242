// Level Four - Problem Set 5: Luxury Spa Premium Access
// Logic Rules:
// - If servicePackage is "Royal" AND age is 21 → return "can access"
// - If age is 21 AND servicePackage is NOT "Royal" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if with two conditions
// ============================================
// Task: Use && to check both servicePackage and age
// Hint: Both conditions must be true for && to work
function easyProblem1(servicePackage, age) {
    if (servicePackage === "Royal" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Royal", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Royal", 20)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Standard", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: If-else with !== operator
// ============================================
// Task: Check if servicePackage is different from "Royal"
// Hint: !== checks if values are NOT equal
function easyProblem2(servicePackage, age) {
    if (age === 21 && servicePackage !== "Royal") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Premium", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Royal", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Basic", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Complete conditional chain
// ============================================
// Task: Write all three conditions using if-else if-else
// Hint: Check each condition carefully
function mediumProblem(servicePackage, age) {
    if (servicePackage === "Royal" && age === 21) {
        return "can access";
    } else if (age === 21 && servicePackage !== "Royal") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Royal", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Premium", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Royal", 19)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Standard", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Advanced nested conditions
// ============================================
// Task: Use nested if-else statements with proper structure
// Hint: Think about the logic flow - what should be checked first?
function hardProblem(servicePackage, age) {
    if (age === 21) {
        if (servicePackage === "Royal") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Royal", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Royal", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Deluxe", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Standard", 30)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Basic", 21)); // Should print: "can sign in"