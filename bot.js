function saludar() {
    
        let nombreUsuario = document.getElementById("nombre").value;
        let peliculaFavorita = document.getElementById("pelicula").value;

        alert("¡Hola " + nombreUsuario + "! 🎬 Tu película favorita es: " + peliculaFavorita);

        // Mensaje oculto en la consola
        console.log("El bot terminó su tarea correctamente.");
    }