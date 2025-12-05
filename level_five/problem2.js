// Level Five - Problem Set 2: Private Yacht Club Access
// Logic Rules:
// - If memberRank is "Commodore" AND age is 21 → return "can access"
// - If age is 21 AND memberRank is NOT "Commodore" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
// Task: Use === to check exact match
// Hint: === checks both value and type
function easyProblem1(memberRank, age) {
    if (memberRank === "Commodore" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Commodore", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("commodore", 21)); // Should print: "go home" (case sensitive!)

// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
// Task: Check if memberRank is NOT "Commodore" when age is 21
// Hint: !== means "not equal to"
function easyProblem2(memberRank, age) {
    if (age === 21 && memberRank !== "Commodore") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Captain", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Commodore", 21)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
// Task: Use && operator to combine conditions
// Hint: Think about the order of operations
function mediumProblem(memberRank, age) {
    if (memberRank === "Commodore" && age === 21) {
        return "can access";
    } else if (age === 21 && memberRank !== "Commodore") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Commodore", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Member", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Commodore", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Officer", 25)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
// Task: Check age first, then create nested conditions for memberRank
// Hint: Use if inside if (nested if statements)
function hardProblem(memberRank, age) {
    if (age === 21) {
        if (memberRank === "Commodore") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Commodore", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Captain", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Commodore", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Member", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Commodore", 22)); // Should print: "go home"