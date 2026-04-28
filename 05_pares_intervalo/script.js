let a = parseInt(prompt());
let b = parseInt(prompt());

let inicio = Math.min(a, b);
let fim = Math.max(a, b);

for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}