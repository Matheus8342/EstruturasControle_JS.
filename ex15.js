let valor = 12;

console.log("Divisores de " + valor + ":");
for (let i = 1; i <= valor; i++) {
  if (valor % i === 0) console.log(i);
}
