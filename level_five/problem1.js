// Level Five - Problem Set 1: Exclusive Wine Tasting Event
// Logic Rules:
// - If guestStatus is "Connoisseur" AND age is 21 → return "can access"
// - If age is 21 AND guestStatus is NOT "Connoisseur" → return "can sign in"
// - Else → return "go home"

// ============================================
// EASY PROBLEM 1: Simple if statement
// ============================================
// Task: Check if guestStatus is "Connoisseur" and age is 21
// Hint: Use if statement with && operator
function easyProblem1(guestStatus, age) {
    // TODO: Write your code here
    // If guestStatus is "Connoisseur" AND age is 21, return "can access"
    // Otherwise, return "go home"
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    }
    return "go home";
}

// Test your code:
console.log("Easy 1 - Test 1:", easyProblem1("Connoisseur", 21)); // Should print: "can access"
console.log("Easy 1 - Test 2:", easyProblem1("Connoisseur", 20)); // Should print: "go home"
// ============================================
// EASY PROBLEM 2: Simple if-else statement
// ============================================
// Task: Check if age is 21 and guestStatus is NOT "Connoisseur"
// Hint: Use if-else with !== operator
function easyProblem2(guestStatus, age) {
    // TODO: Write your code here
    // If age is 21 AND guestStatus is NOT "Connoisseur", return "can sign in"
    // Otherwise, return "go home"
    if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    }
    return "go home";
}

// Test your code:
console.log("Easy 2 - Test 1:", easyProblem2("Enthusiast", 21)); // Should print: "can sign in"
console.log("Easy 2 - Test 2:", easyProblem2("Connoisseur", 21)); // Should print: "go home"
// ============================================
// MEDIUM PROBLEM: Multiple conditions with if-else if-else
// ============================================
// Task: Handle all three cases using if-else if-else
// Hint: Check conditions in order: first "Connoisseur" + 21, then 21 + not "Connoisseur", then else
function mediumProblem(guestStatus, age) {
    // TODO: Write your code here
    // Use if-else if-else to handle all three cases:
    // 1. guestStatus === "Connoisseur" && age === 21 → "can access"
    // 2. age === 21 && guestStatus !== "Connoisseur" → "can sign in"
    // 3. Everything else → "go home"
    if (guestStatus === "Connoisseur" && age === 21) {
        return "can access";
    } else if (age === 21 && guestStatus !== "Connoisseur") {
        return "can sign in";
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Medium - Test 1:", mediumProblem("Connoisseur", 21)); // Should print: "can access"
console.log("Medium - Test 2:", mediumProblem("Novice", 21)); // Should print: "can sign in"
console.log("Medium - Test 3:", mediumProblem("Expert", 25)); // Should print: "go home"
// ============================================
// HARD PROBLEM: Function with nested if statements
// ============================================
// Task: Create a function that checks age first, then guestStatus
// Hint: Use nested if statements - check age first, then guestStatus inside
function hardProblem(guestStatus, age) {
    // TODO: Write your code here
    // Step 1: Check if age is 21
    //   - If yes, check guestStatus:
    //     - If guestStatus is "Connoisseur" → return "can access"
    //     - If guestStatus is NOT "Connoisseur" → return "can sign in"
    //   - If age is NOT 21 → return "go home"
    // Use nested if statements!
    if (age === 21) {
        if (guestStatus === "Connoisseur") {
            return "can access";
        } else {
            return "can sign in";
        }
    } else {
        return "go home";
    }
}

// Test your code:
console.log("Hard - Test 1:", hardProblem("Connoisseur", 21)); // Should print: "can access"
console.log("Hard - Test 2:", hardProblem("Enthusiast", 21)); // Should print: "can sign in"
console.log("Hard - Test 3:", hardProblem("Connoisseur", 19)); // Should print: "go home"
console.log("Hard - Test 4:", hardProblem("Beginner", 18)); // Should print: "go home"