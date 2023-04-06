function handlechange(){
    let Centemeter =  Number(document.getElementById("input").value)
let convertinch = Centemeter /2.54
let result = document.getElementById("value");
result.innerHTML= `${convertinch.toFixed(2)}inch`;
}