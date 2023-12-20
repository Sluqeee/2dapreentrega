const productos = [
    { nombre: "mantecol", precio: 1000 },
    { nombre: "sidra", precio: 2500 },
    { nombre: "garrapiñada", precio: 800 },
    { nombre: "mani", precio: 700 },
    { nombre: "champagne", precio: 3700 },
];
let carrito = []
let seleccion = prompt("Hola desea comprar algun producto si o no")
while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}
if(seleccion == "si"){
    alert("a continuación nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no")
    alert ("Gracias por venir, hasta pronto!!")
    while(seleccion != "no"){
        let producto = prompt ("agrega un producto al carrito")
        let precio = 0
        if (producto == "mantecol" || producto == "sidra" || producto == "garrapiñada" || producto == "mani" || producto == "champagne"){
            switch(producto) {
                case "mantecol":
                    precio = 1000;
                    break;
                case "sidra":
                    precio = 2500;
                    break;
                case "garrapiñada":
                    precio = 800;
                    break;
                case "mani":
                    precio = 700;
                    break;
                case "champagne":
                    precio = 3700;
                    break;
            }
            let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
            carrito.push({producto, unidades, precio})
            console.log(carrito)
        }else {
            alert("no tenemos ese producto")
        }
        seleccion = prompt ("desea seguir comprando?")
        while (seleccion === "no"){
            alert("gracias por la compra, hasta luego!")
            carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
    }
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0 )
    console.log (`el total a pagar por su compra es: ${total}`)