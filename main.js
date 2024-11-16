const frutas = ['manzana', 'pera', 'uva', 'sandía', 'piña']

function recorrer (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i)
  }
}

recorrer(frutas, (fruta, i) => {
  console.log(fruta)
  console.log(i)
})

frutas.forEach((fruta, i) => {
  console.log(fruta)
  console.log(i)
})
