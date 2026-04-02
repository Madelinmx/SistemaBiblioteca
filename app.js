console.log("Servidor de Biblioteca iniciado...");

// Array que funcionará como nuestra base de datos (CRUD)
let libros = [];

// Función para CREAR un libro
function agregarLibro(titulo, autor) {
    const nuevoLibro = { id: libros.length + 1, titulo, autor };
    libros.push(nuevoLibro);
    console.log("Libro agregado: " + titulo);
}

// Función para LISTAR todos los libros
function listarLibros() {
    if (libros.length === 0) {
        console.log("La biblioteca está vacía.");
    } else {
        console.log("--- Listado de Libros ---");
        libros.forEach(libro => {
            console.log(`ID: ${libro.id} | Título: ${libro.titulo} | Autor: ${libro.autor}`);
        });
    }
}

// --- FUNCIÓN ACTUALIZAR ---
function actualizarLibro(id, nuevoTitulo) {
    const libro = libros.find(l => l.id === id);
    if (libro) {
        libro.titulo = nuevoTitulo;
        console.log(`Libro ID ${id} actualizado a: ${nuevoTitulo}`);
    } else {
        console.log("Libro no encontrado.");
    }
}

// estas son las pruebas de flujo
agregarLibro("El Quijote", "Miguel de Cervantes");
listarLibros();
actualizarLibro(1, "Don Quijote de la Mancha (Edición Revisada)");
