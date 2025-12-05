// Level Four - Problem Set 4: Tech Conference Premium Access
// Logic Rules:
// - If attendeeType is "Speaker" AND age is 21 → return "can access"
// - If age is 21 AND attendeeType is NOT "Speaker" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Basic if condition
// ============================================
// Task: Check two conditions with &&
// Hint: && means both must be true
function easyProblem1(attendeeType, age) {
    if (attendeeType === "Speaker" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Speaker", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Speaker", 20)); // Should print: "go home"
console.log("Easy 1 - Test 3:", easyProblem1("Attendee", 21)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Using !== in condition
// ============================================
// Task: Check if something is NOT equal
// Hint: !== means "not equal to"
function easyProblem2(attendeeType, age) {
    if (age === 21 && attendeeType !== "Speaker") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Attendee", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Speaker", 21)); // Should print: "go home"
console.log("Easy 2 - Test 3:", easyProblem2("VIP", 19)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with else if
// ============================================
// Task: Use if-else if-else to check all cases
// Hint: Check conditions one by one
function mediumProblem(attendeeType, age) {
    if (attendeeType === "Speaker" && age === 21) {
        return "can access";
    } else if (age === 21 && attendeeType !== "Speaker") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Speaker", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Attendee", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Speaker", 19)); // Should print: "go home"
console.log("Medium - Test 4:", mediumProblem("VIP", 21)); // Should print: "can sign in"
console.log("Medium - Test 5:", mediumProblem("Student", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Deeply nested if statements
// ============================================
// Task: Create nested if-else statements
// Hint: Check age first, then check attendeeType inside
function hardProblem(attendeeType, age) {
    if (age === 21) {
        if (attendeeType === "Speaker") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Speaker", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Attendee", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Speaker", 20)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("VIP", 21)); // Should print: "can sign in"
console.log("Hard - Test 5:", hardProblem("Student", 18)); // Should print: "go home"
console.log("Hard - Test 6:", hardProblem("Regular", 21)); // Should print: "can sign in"
