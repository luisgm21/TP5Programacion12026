console.log("Inicio");

function prepararPizza(tipo) {
    const promesa = new Promise((resolve) => {
        console.log("Se crea la promesa y se ejecuta su función");
        setTimeout(() => {
            resolve("Pizza de " + tipo + " lista");
        }, 1000);
    });
    return promesa;
}

async function prepararPedido() {
    let variedad = prompt("Ingrese la variedad de pizza que desea");
    console.log("Preparando pedido ...");
    let tipoPizza = await prepararPizza(variedad);
    console.log(tipoPizza);
}

setTimeout(prepararPedido, 3000, "Tarea de setTimeout");
console.log("Fin");