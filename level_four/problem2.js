// Level Four - Problem Set 2: Casino VIP Lounge Access
// Logic Rules:
// - If playerStatus is "HighRoller" AND age is 21 → return "can access"
// - If age is 21 AND playerStatus is NOT "HighRoller" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Using comparison operators
// ============================================
// Task: Use === to check exact match
// Hint: === checks both value and type
function easyProblem1(playerStatus, age) {
    // TODO: Write your code here
    // Use === to check if playerStatus is "HighRoller" AND age is 21
    // If both conditions are true, return "can access"
    // Otherwise, return "go home"
    if (playerStatus === "HighRoller" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("HighRoller", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("highroller", 21)); // Should print: "go home" (case sensitive!)
// ============================================
// EASY PROBLEM 2: Using !== operator
// ============================================
// Task: Check if playerStatus is NOT "HighRoller" when age is 21
// Hint: !== means "not equal to"
function easyProblem2(playerStatus, age) {
    // TODO: Write your code here
    // Use !== to check if playerStatus is NOT "HighRoller" when age is 21
    // If age is 21 AND playerStatus is NOT "HighRoller", return "can sign in"
    // Otherwise, return "go home"
    if (age === 21 && playerStatus !== "HighRoller") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Regular", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("HighRoller", 21)); // Should print: "go home"
// ============================================
// MEDIUM PROBLEM: Combining multiple conditions
// ============================================
// Task: Use && operator to combine conditions
// Hint: Think about the order of operations
function mediumProblem(playerStatus, age) {
    // TODO: Write your code here
    // Use if-else if-else to handle all three cases:
    // 1. playerStatus === "HighRoller" && age === 21 → "can access"
    // 2. age === 21 && playerStatus !== "HighRoller" → "can sign in"
    // 3. Everything else → "go home"
    if (playerStatus === "HighRoller" && age === 21) {
        return "can access";
    } else if (age === 21 && playerStatus !== "HighRoller") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("HighRoller", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("HighRoller", 20)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 25)); // Should print: "go home"
// ============================================
// HARD PROBLEM: Function with multiple nested conditions
// ============================================
// Task: Check age first, then create nested conditions for playerStatus
// Hint: Use if inside if (nested if statements)
function hardProblem(playerStatus, age) {
    // TODO: Write your code here
    // Step 1: Check if age is 21
    //   - If yes, check playerStatus:
    //     - If playerStatus is "HighRoller" → return "can access"
    //     - If playerStatus is NOT "HighRoller" → return "can sign in"
    //   - If age is NOT 21 → return "go home"
    // Use nested if statements!
    if (age === 21) {
        if (playerStatus === "HighRoller") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("HighRoller", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Regular", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("HighRoller", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("HighRoller", 22)); // Should print: "go home"