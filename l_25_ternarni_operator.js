const bmw = 100000;
const ford = 20000;
const budget = 30000;

let message;
if (budget>bmw){
    message = "bmw";
} else if (budget>ford){
    message= "ford";
}else{
    message="velik";
}
console.log (`I want buy ${message}`);
