
//example-1
function greetings(name,callBackFunction){
   callBackFunction(name);
}
greetings("Tom cruise", welcome);

function welcome(name){
   console.log("Welcome", name);
}