console.log("Servidor de Biblioteca iniciado...");

// Array que funcionará como nuestra base de datos (CRUD)
let libros = [];


// Función para CREAR un libro
function agregarLibro(titulo, autor) {
    const nuevoLibro = { id: libros.length + 1, titulo, autor };
    libros.push(nuevoLibro);
    console.log("Libro agregado: " + titulo);
}

agregarLibro("El Quijote", "Miguel de Cervantes");
