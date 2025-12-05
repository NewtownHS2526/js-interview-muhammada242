// Level Three - Problem Set 4: Fitness Center Premium Access
// Logic Rules:
// - If memberLevel is "Elite" AND age is 16 → return "can access"
// - If age is 16 AND memberLevel is NOT "Elite" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
// Task: Check two conditions with &&
// Hint: && means both must be true
function easyProblem1(memberLevel, age) {
    if (memberLevel === "Elite" && age === 16) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Elite", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Elite", 15)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Basic", 16)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
// Task: Check if something is NOT equal
// Hint: !== means "not equal to"
function easyProblem2(memberLevel, age) {
    if (age === 16 && memberLevel !== "Elite") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Elite", 16)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 14)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
// Task: Use if-else if-else to check all cases
// Hint: Check conditions one by one
function mediumProblem(memberLevel, age) {
    if (memberLevel === "Elite" && age === 16) {
        return "can access";
    } else if (age === 16 && memberLevel !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Elite", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Elite", 14)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 16)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Basic", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
// Task: Create nested if-else statements
// Hint: Check age first, then check memberLevel inside
function hardProblem(memberLevel, age) {
    if (age === 16) {
        if (memberLevel === "Elite") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Elite", 16)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 16)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Elite", 15)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 16)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Basic", 18)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("VIP", 16)); // Should print: "can sign in"
