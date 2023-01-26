////Tema Array and Loops

////ex.1 Tipăriți toate numerele pare de la 0 la 10

let num = [0,1,2,3,4,5,6,7,8,9,10];

 for (let i = 0; i <= 10 ; i++) {
   if (i % 2 === 0) { 

   console.log(i);
 }
}

/*for (let i = 0; i <= 10; i+=2) {
  
  console.log(i);
}*/


////ex.2 Calculați suma numerelor dintr-un șir de numere

function sumaNumerelor(sirDeNumere) {
  let result = 0;

  //console.log(sirDeNumere);

 /* for (let numar of sirDeNumere) {
    result = result + numar;
  }*/

  for (let i = 0; i < sirDeNumere.length; i++){
    result = result + sirDeNumere[i]
  }
  return result;
}
console.log(sumaNumerelor([1, -5, 20, -34, 16, 29, 36, -4]))
console.log(sumaNumerelor([3.45, -2.68, 356, -75.96, 64, 19.28]))

////ex.3 Creați o funcție care inversează un șir de numere

function reverse (input) {
  const result = [];
   for (let i = input.length - 1; i >= 0; i--){
     result [result.length] = input[i];
   }
  return result;
}

const input = [1, -5, 20, -34, 16, 29, 36, -4];
const result = reverse(input);
console.log(result)


////ex.4 Returnează numărul de vocale dintr-un șir de caractere (string)

function cautaVocale(sirDeCaractere) {
  let result = 0;
  const vocale = ["a", "e", "i", "o", "u"];

  for (let caracter of sirDeCaractere) {
    //console.log(caracter);

    for (let vocala of vocale) {
      if (caracter === vocala) 
        result = result + 1;
      }
    }
   return result;
  } 
 
console.log(cautaVocale("string de test"));
//console.log(cautaVocale("Ramona"));
