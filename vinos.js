// Array de productos //

const productos = [
    { id : 1, nombre: "D.V. Catena", origen: "Mendoza", bodega: "Catena Zapata", cepa: "Pinot Noir", precio: 16.949, stock: 20 },
    { id : 2, nombre: "Thibaut Delmotte", origen: "Salta", bodega: "Familia Delmotte", cepa: "Malbec", precio: 14.285, stock: 25 },
    { id : 3, nombre: "Casa Boher", origen: "Mendoza", bodega: "Rosell Boher", cepa: "Blend", precio: 21.486, stock: 15 },
    { id : 4, nombre: "Alta Vista Serenade", origen: "Mendoza", bodega: "Alta Vista", cepa: "Malbec", precio: 55.421, stock: 7 },
    { id : 5, nombre: "Luca", origen: "San Juan", bodega: "Luca Wines", cepa: "Pinot Noir", precio: 30.557, stock: 30}
]

// función mostrarProductos //

productos.forEach((producto)=> {
    console.log(`📢 Nombre: ${producto.nombre}, Origen: ${producto.origen}, Bodega: ${producto.bodega}, Cepa: ${producto.cepa}, $${producto.precio}, Stock: ${producto.stock}`);
});

// Función de Orden Superior Filter //

const productosMendocinos = productos.filter((producto)=> producto.origen === "Mendoza")
console.log(`🌐 Productos de Mendoza:`);
productosMendocinos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Origen: ${producto.origen}`);
});

const productosPinotNoir = productos.filter((producto)=> producto.cepa === "Pinot Noir");
console.log(`🍷 Productos de Cepa Pinot Noir:`);
productosPinotNoir.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosMalbec = productos.filter((producto)=> producto.cepa === "Malbec");
console.log(`🍷 Productos de Cepa Malbec:`);
productosMalbec.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Cepa: ${producto.cepa}`);
});

const productosCaros = productos.filter((producto)=> producto.precio >= 30.000);
console.log(`🍷 Vinos Premium:`);
productosCaros.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

const productosBaratos = productos.filter((producto)=> producto.precio <= 30.000);
console.log(`🍷 Vinos de Buen Valor:`);
productosBaratos.forEach((producto)=>{
    console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`);
});

// Funcion de Orden Superior Find //

const resultado = productos.find(producto => producto.bodega === "Familia Delmotte");
console.log(resultado);

const resultado1 = productos.find(producto => producto.precio < 20.000);
console.log(resultado1);

const resultado2 = productos.find(producto => producto.nombre === "Rutini");
console.log(resultado2); // No existe

const resultado3 = productos.find(producto => producto.stock > 25);
console.log(resultado3);

// Función de Orden Superior Map //

const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

const vinosConDescuentos = productos.map(producto => {
    return{
        ...producto,
        price: producto.precio * 0.9
    }
})
console.log(vinosConDescuentos);

