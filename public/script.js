  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var consultorio = document.getElementById("consultorio").value;
    var correo = document.getElementById("correo").value;
    var especialidad = document.getElementById("especialidad").value;

    var usuario = {
      "cedula": cedula,
      "nombre": nombre,
      "apellido": apellido,
      "consultorio": consultorio,
      "correo": correo,
      "especialidad": especialidad
    };

    var jsonUsuario = JSON.stringify(usuario);

    // Envía el formulario al servidor
    fetch('/guardar', {
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
    document.getElementById("consultorio").value = "";
    document.getElementById("correo").value = "";
    var selectElement = document.getElementById('especialidad');
    selectElement.selectedIndex = -1;
  });
