/*
  FUNCIONES CONSTRUCTORAS EN JAVASCRIPT

  Una función constructora permite crear objetos que comparten la misma estructura.
  Se utiliza con la palabra clave `new`, que crea un nuevo objeto y lo enlaza con `this`.
*/

// Ejemplo de función constructora 
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  };
}

// Crear objetos usando `new`
const persona1 = new Persona("Lucas", 25);
const persona2 = new Persona("Ana", 30);

persona1.saludar(); 
persona2.saludar(); 


// Función fábrica: alternativa sin usar `new` 
function crearPersona(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    saludar: function () {
      console.log("Hola, soy " + nombre + " y tengo " + edad + " años.");
    }
  };
}

const persona3 = crearPersona("Carlos", 22);
persona3.saludar(); // Hola, soy Carlos y tengo 22 años.

/*
  RETO

  Crea una función constructora llamada Libro que reciba título y autor como parámetros.
  Debe tener un método llamado describir que imprima:
  "El libro [título] fue escrito por [autor]".

*/


function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;

  this.describir = function () {
    console.log("El libro " + this.titulo + " fue escrito por " + this.autor + ".");
  };
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
libro1.describir(); 

// Desde ES6 se suele preferir clases para esto