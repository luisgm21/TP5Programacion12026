console.log("Inicio");
crearParrafoHTML("Inicio",document.body);

function crearParrafoHTML(texto,padre){
  let parrafo, elementoTexto;
  parrafo = document.createElement("p");
  elementoTexto = document.createTextNode(texto);
  parrafo.appendChild(elementoTexto);
  padre.appendChild(parrafo);
}

function prepararPizza(tipo) {
    const promesa = new Promise((resolve) => {
        console.log("Se crea la promesa y se ejecuta su función");
        crearParrafoHTML("Se crea la promesa y se ejecuta su función",document.body);
        setTimeout(() => {
            resolve("Pizza de " + tipo + " lista");
        }, 1000);
    });
    return promesa;
}

async function prepararPedido(mensaje) {
    let variedad = prompt("Ingrese la variedad de pizza que desea");
    let parrafo, texto;
    console.log("Preparando pedido ...");
    crearParrafoHTML("Preparando pedido ...",document.body);
    let tipoPizza = await prepararPizza(variedad);
    console.log(tipoPizza);
    crearParrafoHTML(tipoPizza ,document.body);
    crearParrafoHTML( mensaje ,document.body);
}

setTimeout(prepararPedido, 3000, "Tarea de setTimeout");
console.log("Fin");
crearParrafoHTML("Fin",document.body);
