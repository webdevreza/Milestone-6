//=====================================================================
// Block scope -- can access inside the block {}. let, const is block scope
//=====================================================================
if (true) {
   let blockScopedVar = "I am block-scoped";
   console.log(blockScopedVar); // Outputs: "I am block-scoped"
}

// console.log(blockScopedVar); // This would throw an error since blockScopedVar is not accessible outside the block

//=====================================================================
// Global Scope -- can access from anywhere in the js files. var and function name(){} is global scope. Global scope should not use.
//=====================================================================

var globalVar = "I am a global variable";

function accessGlobalVar() {
    console.log(globalVar); // Outputs: "I am a global variable"
}

// Function Scope
function demoFunctionScope() {
   if (true) {
       var functionScopedVar = "I am function-scoped";
   }
   console.log(functionScopedVar); // Outputs: "I am function-scoped" because var is not block-scoped but function-scoped
}
