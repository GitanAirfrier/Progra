/*Pido tam de matriz al usuario (N)
Creo una matriz NxN con numeros aleatorios entre N y N*2
Obtener el número mayor de la matriz y mostrarlo
Mostrar la matriz por consola en filas y columnas:
-elementos separados por espacio
-todos los elementos deben ocupar los mismo
-Sumar todos los elementos de la matriz y mostrar por pantalla
-Aplicar Fiz-Buzz en los elementos de la matriz con los cambios
Si num es múltiplo de 3 ---> Fizz
Si num es múltiplo de 5 ---> Buzz
Si es multiplo de 3 y 5 ---> Fizz-Buzz*/

function recogerNumero(cad) {
  let num;
  do {
    num = Number(prompt(cad));
  } while (isNaN(num));

  return num;
}

function main() {
  let tam = recogerNumero("Dame un númerito pls");
  let matriz = [];
  let filiña = [];
  let mayor = -11111111;
  let suma = 0;
  let n;
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      n = parseInt(Math.random() * (tam + 2) + tam);

      if (n > mayor) {
        mayor = n;
      }
      suma += n;
      filiña.push(n);
      
    }
    matriz.push(filiña);
    filiña = [];
  }
  let matriz2 = matriz;
  for (let i = 0; i < tam; i++) {
    for (let j = 0; j < tam; j++) {
      if (matriz[i][j] % 3 == 0 && matriz[i][j] % 5 == 0)
        matriz2[i][j] = "FIZZ-BUZZ";
      else if (matriz[i][j] % 3 == 0) matriz2[i][j] = "FIZZ";
      else if (matriz[i][j] % 5 == 0) matriz2[i][j] = "BUZZ";
      else{
        if(matriz2[i][j] >=10)
          matriz2[i][j] = " "+matriz[i][j]+" ";
        else{
          matriz2[i][j] = " 0"+matriz[i][j]+" ";
        }
      }
    }
  }
  for (let i = 0; i < matriz2.length; i++) {
    console.log(matriz2[i]);
  }
  
}
