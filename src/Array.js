let Producto = [ 
    {Id: "123456", Nombre: "Celular", Precio: "200", Categoria: "Tecnologia" },
    {Id: "234567", Nombre: "Usb", Precio:"20", Categoria: "Tecnologia"},
    {Id: "345678", Nombre: "Libro", Precio:"50", Categoria: "Libreria"},
    {Id: "456789", Nombre: "Audifonos", Precio:"70", Categoria: "Tecnologia"},
    {Id: "567890", Nombre: "Resaltador", Precio:"10", Categoria: "Libreria"} 
];

let filtrar = Producto.filter(BuscarCategoria);
console.log("Productos de la categoria: "+filtrar);
