// Level Three - Problem Set 1: Online Course Premium Access
// Logic Rules:
// - If courseTier is "Master" AND studentAge is 18 → return "can access"
// - If studentAge is 18 AND courseTier is NOT "Master" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
// Task: Check if courseTier is "Master" and studentAge is 18
// Hint: Use if statement with && operator
function easyProblem1(courseTier, studentAge) {
    // TODO: Write your code here
    // If courseTier is "Master" AND studentAge is 18, return "can access"
    // Otherwise, return "go home"
    if (courseTier === "Master" && studentAge === 18) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Master", 18)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Master", 17)); // Should print: "go home"

// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
// Task: Check if studentAge is 18 and courseTier is NOT "Master"
// Hint: Use if-else with !== operator
function easyProblem2(courseTier, studentAge) {
    // TODO: Write your code here
    // If studentAge is 18 AND courseTier is NOT "Master", return "can sign in"
    // Otherwise, return "go home"
    if (studentAge === 18 && courseTier !== "Master") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Beginner", 18)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Master", 18)); // Should print: "go home"

// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
// Task: Handle all three cases using if-else if-else
// Hint: Check conditions in order: first "Master" + 18, then 18 + not "Master", then else
function mediumProblem(courseTier, studentAge) {
    // TODO: Write your code here
    // Use if-else if-else to handle all three cases:
    // 1. courseTier === "Master" && studentAge === 18 → "can access"
    // 2. studentAge === 18 && courseTier !== "Master" → "can sign in"
    // 3. Everything else → "go home"
    if (courseTier === "Master" && studentAge === 18) {
        return "can access";
    } else if (studentAge === 18 && courseTier !== "Master") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Master", 18)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Intermediate", 18)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Advanced", 20)); // Should print: "go home"

// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
// Task: Create a function that checks studentAge first, then courseTier
// Hint: Use nested if statements - check studentAge first, then courseTier inside
function hardProblem(courseTier, studentAge) {
    // TODO: Write your code here
    // Step 1: Check if studentAge is 18
    //   - If yes, check courseTier:
    //     - If courseTier is "Master" → return "can access"
    //     - If courseTier is NOT "Master" → return "can sign in"
    //   - If studentAge is NOT 18 → return "go home"
    // Use nested if statements!
    if (studentAge === 18) {
        if (courseTier === "Master") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Master", 18)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Beginner", 18)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Master", 16)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Expert", 14)); // Should print: "go home"