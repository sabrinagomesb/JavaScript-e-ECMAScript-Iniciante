function fatorial (n) {
  let fat = 1
  for(let c = n; c > 1; c --) {
    fat *= c
  }
  return fat
}

console.log(fatorial(5))

// !5 = 5 x 4 x 3 x 2 x 1

// enquanto o contador for maior que 1, o contador perde 1 (contagem regressiva)