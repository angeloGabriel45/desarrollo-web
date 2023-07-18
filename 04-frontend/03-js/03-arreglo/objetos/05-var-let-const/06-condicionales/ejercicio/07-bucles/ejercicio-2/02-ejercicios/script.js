function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
return (pares, impares);
}


console.log("Cantidad de números pares: " + pares);
console.log("Cantidad de números impares: " + impares);
