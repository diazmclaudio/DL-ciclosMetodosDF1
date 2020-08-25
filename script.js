let reiniciar = () => location.reload();

let valor = prompt("ingresar valor entre 1 y 6: ");

if (!parseFloat(valor) || parseFloat(valor) < 1 || parseFloat(valor) > 6) {
  alert("Debe ingresar un valor entre 1 y 6");
  location.reload();
}

console.log(valor);

switch (parseFloat(valor)) {
  case 1:
    let valor = () => {
      let numero = prompt("ingrese un valor entre 1 y 100");

      for (let i = 0; i <= parseFloat(numero); i++) {
        console.log(i);
      }
    };

    valor();

    break;

  case 2:
    let color = () => {
      let blanco = /blanco/gi;
      let resultado;

      do {
        let caso2 = prompt("¿De qué color es el caballo blanco de Napoleón?");
        resultado = caso2;
      } while (!resultado.match(blanco));
    };

    color();

    break;

  case 3:
    let promedioMaterias = () => {
      let matematicas = prompt("Ingrese promedio de Matemáticas");
      let fisica = prompt("Ingrese promedio de Física");
      let ciencias = prompt("Ingrese promedio de Ciencias");

      let promedio =
        (parseFloat(matematicas) + parseFloat(fisica) + parseFloat(ciencias)) /
        3;

      return alert(`Su promedio es: ${Math.trunc(promedio)}`);
    };

    promedioMaterias();

    break;

  case 4:
    let frutas = () => {
      let arreglo = new Array();

      for (let i = 1; i < 4; i++) {
        let fruta = prompt(`Ingrese la fruta ${i}: `);
        let manzana = /manzana/gi;

        if (!fruta.match(manzana)) {
          arreglo.push(fruta);
        }
      }

      for (const iterator of arreglo) {
        console.log(iterator);
      }
    };

    frutas();
    break;

  case 5:
    let nombre = () => {
      let texto = prompt("Ingrese su nombre: ");

      let vocales = /[a,e,i,o,u]/gi;
      let consonante = /[b,c,d,f,g,h,j,k,l,m,n,ñ,p,q,r,s,t,v,w,x,y,z]/gi;
      let result = texto.match(vocales);
      let result2 = texto.match(consonante);

      return alert(
        `la cantidad de vocales de nombre es ${result.length} y la cantidad de consonantes es: ${result2.length}`
      );
    };

    nombre();

    break;
}
