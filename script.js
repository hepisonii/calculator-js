const display = document.getElementById("display");
const button = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const backspace = document.getElementById("backspace");

let expression = "";

button.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        let val = btn.textContent.replace(/\s+/g,"");
        if(val==="x") val = "*";
        if(val==="÷") val = "/";
        expression += val;
        display.value = expression;
    });
});
equal.addEventListener("click",() =>{
    try{
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch(e){
        display.value = "ERROR";
        expression = "";
    }
});

clear.addEventListener("click",() =>{
    display.value = "";
    expression = "";
});

backspace.addEventListener("click",() =>{
    expression = expression.slice(0,-1);
    display.value = expression;
});