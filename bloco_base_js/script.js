function somar(num1, num2){
    alert(num1 + num2);
}

function subtrair(num1, num2){
    alert(num1 - num2);
}

function multiplicacao(num1, num2){
    alert(num1 * num2);
}

function divisao(num1, num2){
    alert(num1 / num2);
}

alert("Aplicativo para somar dois numeros");
let primeiroNumero = Number(prompt ("Digite o primeiro número, por favor"));
let segundoroNumero = Number(prompt ("Digite o segunda número, por favor"));

somar(primeiroNumero, segundoroNumero);
subtrair(primeiroNumero, segundoroNumero);
multiplicacao(primeiroNumero, segundoroNumero);
divisao(primeiroNumero, segundoroNumero);