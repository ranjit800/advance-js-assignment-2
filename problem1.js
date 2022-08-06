let black = document.getElementsById("black");

function valueButton(value){
black.value += value;
}
function Ac(){
black.value  = "";
}

function calculate(value) {
let result = eval(black.value);
black.value = result;
}