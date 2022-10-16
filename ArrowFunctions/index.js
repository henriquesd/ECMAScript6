// Function declaration:
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

// Anonymous function:
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

console.log(breakfastMenu());
console.log(lunchMenu());

// Arrow function:
const dinnerMenuWithArrowFunction = () => {
    return "I'm going to eat a burger for dinner";
}
console.log(dinnerMenuWithArrowFunction());

// Arrow function with parameter:
const dinnerMenuWithArrowFunctionWithParameter = (food) => {
    return `I'm going to eat ${food} for dinner`;
}
console.log(dinnerMenuWithArrowFunctionWithParameter("chicken salad"));

// Arrow function in a single line:
// what is after the "=>" means that you are going to return it;
const dinnerMenuArrowFunctionInSameLine = (food) => `I'm going to eat ${food} for dinner`;
console.log(dinnerMenuArrowFunctionInSameLine("pasta"));

// Arrow function with only 1 parameter:
const dinnerMenuArrowFunctionWithOneParameter = food => `I'm going to eat ${food} for dinner`;
console.log(dinnerMenuArrowFunctionWithOneParameter("meat"));
