let peso = 59;
let altura = 1.7;
let imc = peso / (altura * altura);
console.log(imc);
let resultadofinal = imc.toFixed(2);

if (resultadofinal < 18.5) {
  console.log("tu imc es " + resultadofinal + ", tienes peso normal.");
} else if (resultadofinal >= 18.5 && resultadofinal < 25) {
  console.log("tu imc es " + resultadofinal + ", tienes bajo peso.");
} else console.log("tu imc es " + resultadofinal + ", tienes bajo peso.");
