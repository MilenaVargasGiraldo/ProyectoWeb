// Obtener referencia al cuerpo de la tabla
const userTableBody = document.getElementById('user-table-body');

// Cargar los datos del archivo JSON
fetch('/usuarios')
  .then(response => response.json())
  .then(data => {
    // Generar las filas de la tabla con los datos de los usuarios
    const rows = data.map(usuario => `
      <tr>
        <td>${usuario.cedula}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
      </tr>
    `);

    // Agregar las filas al cuerpo de la tabla
    userTableBody.innerHTML = rows.join('');
  })
  .catch(error => {
    console.error('Error al cargar los datos del archivo JSON', error);
  });
