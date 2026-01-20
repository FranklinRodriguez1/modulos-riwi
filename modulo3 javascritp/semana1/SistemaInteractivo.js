
// Solicitamos el nombre y la edad usando el navegador
let nombre = prompt("Por favor, ingresa tu nombre:");
let entradaEdad = prompt("Por favor, ingresa tu edad:");

// Convertimos la entrada a número para poder validar correctamente
const edad = Number(entradaEdad);

// Verificamos si la conversión falló (NaN) o si el campo quedó vacío
if (entradaEdad === null || entradaEdad.trim() === "" || isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("Error: Por favor, ingresa una edad válida en números.");
} else {
    
    if (edad < 18) {
        // Mensaje para menores de edad
        const mensajeMenor = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        console.log(mensajeMenor);
        alert(mensajeMenor);
    } else {
        // Mensaje para mayores de edad
        const mensajeMayor = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        console.log(mensajeMayor);
        alert(mensajeMayor);
    }
}