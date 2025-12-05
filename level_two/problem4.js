// Level Two - Problem Set 4: Sports Event Season Ticket Access
// Logic Rules:
// - If ticketTier is "Championship" AND age is 16 → return "can access"
// - If age is 16 AND ticketTier is NOT "Championship" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
// Task: Check two conditions with &&
// Hint: && means both must be true
function easyProblem1(ticketTier, age) {
    if (ticketTier === "Championship" && age === 16) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Championship", 16)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Championship", 15)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Regular", 16)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
// Task: Check if something is NOT equal
// Hint: !== means "not equal to"
function easyProblem2(ticketTier, age) {
    if (age === 16 && ticketTier !== "Championship") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Standard", 16)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Championship", 16)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("Premium", 14)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
// Task: Use if-else if-else to check all cases
// Hint: Check conditions one by one
function mediumProblem(ticketTier, age) {
    if (ticketTier === "Championship" && age === 16) {
        return "can access";
    } else if (age === 16 && ticketTier !== "Championship") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Championship", 16)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Standard", 16)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Championship", 14)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("Premium", 16)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("VIP", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
// Task: Create nested if-else statements
// Hint: Check age first, then check ticketTier inside
function hardProblem(ticketTier, age) {
    if (age === 16) {
        if (ticketTier === "Championship") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Championship", 16)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Standard", 16)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Championship", 15)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Premium", 16)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("VIP", 18)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 16)); // Should print: "can sign in"