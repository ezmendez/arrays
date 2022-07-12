class Productos {
    constructor(id, nombre, marca, ean, stock){
        this.id=id
        this.nombre=nombre
        this.marca=marca
        this.ean=ean
        this.stock=stock
    }
}
const producto1= new Productos("Crema de peinar", "Pantenne", "Unilever", 7793990, 100)
const producto2= new Productos("Crema para rulos", "Sedal", "Unilever", 7793991, 55)
const producto3= new Productos("Cera para peinar", "Barber", "Unilever", 7793992, 10)
const producto4= new Productos("Gel de pelo", "Lord Che", "Unilever", 7793993, 15)
const producto5= new Productos("Tintura gold", "Issue", "Unilever", 7793994, 21)

const stockAlmacen=[producto1, producto2,producto3,producto4,producto5]
console.log(stockAlmacen)
for (const stockAlmacen of Productos){
    console.log(Productos.nombre)
}
   
