function calcularPromedio() {
    const nombreEstudiante = document.getElementById('nombre').value;
    const calMatematicas = parseFloat(document.getElementById('matematicas').value);
    const calEspañol = parseFloat(document.getElementById('espanol').value);
    const calCiencias = parseFloat(document.getElementById('ciencias').value);
    
    if (isNaN(calMatematicas) || isNaN(calEspañol) || isNaN(calCiencias)) {
        alert('Por favor, ingrese calificaciones válidas.');
        return;
    }

    const promedio = (calMatematicas + calEspañol + calCiencias) / 3;
    let mensaje;

    if (promedio >= 6) {
        mensaje = 'Aprobado';
    } else {
        mensaje = 'Reprobado';
    }

    document.getElementById('resultado').innerText = `Nombre: ${nombreEstudiante}, Promedio: ${promedio.toFixed(2)}, Estado: ${mensaje}`;
}

document.getElementById('calcular').addEventListener('click', calcularPromedio);