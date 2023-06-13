// Obtener referencia al formulario
const form = document.querySelector('form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario automáticamente

  // Obtener la opción seleccionada
  const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;

  // Enviar la opción seleccionada al servidor
  fetch('/opcion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ opcion: opcionSeleccionada })
  })
  .then(response => {
    if (response.ok) {
      // Redireccionar a la página correspondiente según la opción seleccionada
      if (opcionSeleccionada === 'nuevo') {
        window.location.href = '/formulario.html';
      } else if (opcionSeleccionada === 'listar') {
        window.location.href = '/listarUsuarios.html';
      } else if (opcionSeleccionada === 'nuevoPaciente') {
        window.location.href = '/formularioRegistrarPaciente.html';
      }
    } else {
      console.error('Error al enviar la opción al servidor');
    }
  })
  .catch(error => {
    console.error('Error de red', error);
  });
});
