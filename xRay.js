function escanear() {
    let valor = document.getElementById("numero").value;

    // Validar si es número
    if (isNaN(valor) || valor.trim() === "") {
        document.getElementById("resultado").innerHTML =
            " Error: Solo se permiten números.";
        return;
    }

    // Inspección del tipo
    let tipo = typeof valor;

    document.getElementById("resultado").innerHTML =
        "Valor ingresado: " + valor + "<br>" +
        "Tipo de dato real: " + tipo;
}
            

    
    