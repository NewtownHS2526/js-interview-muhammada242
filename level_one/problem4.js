// Level One - Problem Set 4: Online Game Access Control
// Logic Rules:
// - If playerRank is "Elite" AND level is 10 → return "can access"
// - If level is 10 AND playerRank is NOT "Elite" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
// Task: Check two conditions with &&
// Hint: && means both must be true
function easyProblem1(playerRank, level) {
    if (playerRank === "Elite" && level === 10) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Elite", 10)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Elite", 9)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Pro", 10)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
// Task: Check if something is NOT equal
// Hint: !== means "not equal to"
function easyProblem2(playerRank, level) {
    if (level === 10 && playerRank !== "Elite") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Pro", 10)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Elite", 10)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Beginner", 8)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
// Task: Use if-else if-else to check all cases
// Hint: Check conditions one by one
function mediumProblem(playerRank, level) {
    if (playerRank === "Elite" && level === 10) {
        return "can access";
    } else if (level === 10 && playerRank !== "Elite") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Elite", 10)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Pro", 10)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Elite", 8)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Beginner", 10)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Master", 15)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
// Task: Create nested if-else statements
// Hint: Check level first, then check playerRank inside
function hardProblem(playerRank, level) {
    if (level === 10) {
        if (playerRank === "Elite") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Elite", 10)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Pro", 10)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Elite", 9)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Beginner", 10)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Master", 12)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Expert", 10)); // Should print: "can sign in"
