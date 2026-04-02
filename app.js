console.log("Servidor de Biblioteca iniciado...");

// Array que funciona como base de datos (CRUD)
let libros = [];

// 1. CREATE (Crear)
function agregarLibro(titulo, autor) {
    const nuevoLibro = { id: libros.length + 1, titulo, autor };
    libros.push(nuevoLibro);
    console.log("Libro agregado: " + titulo);
}

// 2. READ (Leer)
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

// 3. UPDATE (Actualizar)
function actualizarLibro(id, nuevoTitulo) {
    const libro = libros.find(l => l.id === id);
    if (libro) {
        libro.titulo = nuevoTitulo;
        console.log(`Libro ID ${id} actualizado.`);
    }
}

// --- 4. DELETE (Eliminar) ---
function eliminarLibro(id) {
    const longitudInicial = libros.length;
    libros = libros.filter(l => l.id !== id);
    if (libros.length < longitudInicial) {
        console.log(`Libro con ID ${id} eliminado.`);
    } else {
        console.log("No se encontró el libro.");
    }
}

// Ejecución de prueba
agregarLibro("El Quijote", "Miguel de Cervantes");
agregarLibro("Cien años de soledad", "Gabriel García Márquez");
actualizarLibro(1, "Don Quijote de la Mancha");
eliminarLibro(2);
listarLibros();
