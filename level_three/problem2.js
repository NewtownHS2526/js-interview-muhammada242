// Level Three - Problem Set 2: Airport Lounge Access Control
// Logic Rules:
// - If membershipClass is "Diamond" AND age is 21 → return "can access"
// - If age is 21 AND membershipClass is NOT "Diamond" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
// Task: Use === to check exact match
// Hint: === checks both value and type
function easyProblem1(membershipClass, age) {
    if (membershipClass === "Diamond" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Diamond", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("diamond", 21)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
// Task: Check if membershipClass is NOT "Diamond" when age is 21
// Hint: !== means "not equal to"
function easyProblem2(membershipClass, age) {
    if (age === 21 && membershipClass !== "Diamond") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Gold", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Diamond", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
// Task: Use && operator to combine conditions
// Hint: Think about the order of operations
function mediumProblem(membershipClass, age) {
    if (membershipClass === "Diamond" && age === 21) {
        return "can access";
    } else if (age === 21 && membershipClass !== "Diamond") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Diamond", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Silver", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Diamond", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Platinum", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
// Task: Check age first, then create nested conditions for membershipClass
// Hint: Use if inside if (nested if statements)
function hardProblem(membershipClass, age) {
    if (age === 21) {
        if (membershipClass === "Diamond") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Diamond", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Gold", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Diamond", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Silver", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Diamond", 22)); // Should print: "go home"
