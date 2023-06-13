  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var especialidad = document.getElementById("especialidad").value;

    var usuario = {
      "cedula": cedula,
      "nombre": nombre,
      "apellido": apellido,
      "edad": edad,
      "telefono": telefono,
      "especialidad": especialidad
    };

    var jsonUsuario = JSON.stringify(usuario);

    // Envía el formulario al servidor
    fetch('/guardarPaciente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonUsuario
    })
    .then(function(response) {
      if (response.ok) {
        // Mostrar mensaje de éxito
        alert("Usuario guardado con éxito");
      } else {
        alert("Error al guardar el usuario");
      }
    })
    .catch(function(error) {
      console.error(error);
      alert("Error al procesar la solicitud");
    });

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";
    var selectElement = document.getElementById('especialidad');
    selectElement.selectedIndex = -1;
  });
