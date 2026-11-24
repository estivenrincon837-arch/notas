
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    // Capturar los datos del estudiante
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    // Crear la lista de notas
    let notas = [
        parseFloat(document.getElementById("nota1").value),
        parseFloat(document.getElementById("nota2").value),
        parseFloat(document.getElementById("nota3").value),
        parseFloat(document.getElementById("nota4").value),
        parseFloat(document.getElementById("nota5").value)
    ];

    // Validar las notas
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 5) {
            alert("Las notas deben estar entre 0 y 5");
            return;
        }
    }

    // Calcular el promedio
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    let promedio = suma / 5;

    // Determinar si aprobó o reprobó
    let estado;

    if (promedio >= 3) {
        estado = "Aprobado";
    } else {
        estado = "Reprobado";
    }

    // Mostrar los resultados
    document.getElementById("resultado").innerHTML = `
        <h2>Datos del estudiante</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Lista de notas:</strong> ${notas.join(", ")}</p>
        <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
        <h3>Estado: ${estado}</h3>
    `;

});
