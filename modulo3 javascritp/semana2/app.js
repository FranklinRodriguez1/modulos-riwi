
// TASK 1
// 1. Creación del objeto de productos:
// Cada producto debe contener las propiedades:
// id (clave única del producto)
// nombre (nombre del producto)
// precio (valor numérico) 
function Random (){ /**/
    let numberaleatorio = Math.floor(Math.random() * (10 - 1)) + 1
    return  numberaleatorio
}
let product = {
    id : Random(), 
    nom: "nombre ejemplo",
    price : Random() * 5000
}  

console.log(product); 

// TASK 2 
// 2. Uso de Set en JavaScript:
// Crea un Set con una lista de números que incluya valores repetidos. 
const newSet = new Set([1, 2, 2, 5, 15, 1, 3, 6, 6])
// Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente. 
console.log(newSet);
// Agrega un nuevo número al Set utilizando el método .add(). 
let number = 45
newSet.add(number) 
console.log(newSet);
// Verifica si un número específico existe dentro del Set con .has(). 
console.log(newSet.has(45)  
)
// Elimina un número del Set con .delete(). 
newSet.delete(45) 
console.log(newSet);
// Recorre el Set utilizando un for…of para mostrar cada valor. 
for (const number of newSet) {
    console.log(number);
}
// TASK 3
// 3. Creación de un Map:
// Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor). 
let perro = new Map([
    ["raza", "perro"],
    ["color", "blanco"],
    ["genero", "hembra"]
]
) 
console.log(perro);
// Asegúrate de que el Map refleje correctamente la información adicional de cada producto.

// TASK 4
// 4. Iteración sobre las estructuras de datos: 
// Recorre e imprime los datos en la consola: 
// Usa for…in para listar propiedades y valores del objeto. 
for (const key in product) {    
    console.log(product[key]);
}
// Usa for…of para recorrer el Set. 
for (const element of newSet) {
    console.log(element);
}
// Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva. 
perro.forEach((valor, element) => {
    console.log(`${element} ${valor}`);
});
// TASK 5
// 5. Validación y pruebas:
// Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
// Realiza pruebas mostrando:
// Lista completa de productos (objeto)
// Lista de productos únicos (Set)
// Categorías y nombres de productos (Map) 
// --- VALIDACIÓN DE PRODUCTO ---
function validarProducto(prod) {
    // Validamos que el ID sea número, el nombre no esté vacío y el precio sea mayor a 0
    if (typeof prod.id === 'number' && prod.nom.length > 0 && prod.price > 0) {
        return " Producto válido";
    } else {
        return "producto inválido";
    }
}

console.log("--- RESULTADOS FINALES ---");

// 1. Prueba de Validación del Objeto
console.log("Validación de Objeto:", validarProducto(product));
console.log("Datos del producto:", product);

// 2. Lista de productos únicos (Set)
// Nota: Mostramos el tamaño y el contenido final
console.log(`--- Set de Números Únicos (Total: ${newSet.size}) ---`);
console.log([...newSet]); // Convertido a array para visualización clara

// 3. Categorías y nombres (Map)
console.log("--- Categorías en el Map ---");
perro.forEach((valor, clave) => {
    console.log(`Categoría [${clave}]: Corresponde a -> ${valor}`);
});

// Verificación extra del Map (Validar que no esté vacío)
if(perro.size > 0) {
    console.log("✅ El Map se ha poblado correctamente.");
}