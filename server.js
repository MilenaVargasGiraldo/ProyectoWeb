const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/formularioPrincipal.html');
});

// Ruta para manejar la opción enviada desde el formulario principal
app.post('/opcion', (req, res) => {
  const opcion = req.body.opcion;

  if (opcion === 'nuevo') {
    // Redireccionar o enviar una respuesta según la opción seleccionada
    res.redirect('/formulario.html');
  } else if (opcion === 'listar') {
    // Redireccionar o enviar una respuesta según la opción seleccionada
    res.redirect('/listarUsuarios.html');
  } else if (opcion === 'nuevoPaciente') {
    // Redireccionar o enviar una respuesta según la opción seleccionada
    res.redirect('/formularioRegistrarPaciente.html');
  } else {
    // Opción inválida, enviar una respuesta de error
    res.status(400).send('Opción inválida');
  }
});

// Ruta para obtener la lista de usuarios desde el archivo JSON
app.get('/usuarios', (req, res) => {
  // Leer el archivo JSON y enviar los datos como respuesta
  const usuarios = require('./usuarios.json');
  res.json(usuarios);
});

app.post('/guardar', (req, res) => {
  const { cedula, nombre, apellido, consultorio, correo, especialidad } = req.body;
  const usuario = {
    cedula,
    nombre,
    apellido,
    consultorio,
    correo,
    especialidad
  };

  const jsonUsuario = JSON.stringify(usuario);

	fs.readFile('usuarios.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    res.status(500).send('Error al leer el archivo.');
    return;
  }

  let usuarios = [];

  if (data) {
    usuarios = JSON.parse(data);
  }

  usuarios.push(usuario);

  fs.writeFile('usuarios.json', JSON.stringify(usuarios), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al guardar el archivo.');
    } else {
      console.log('Archivo guardado con éxito.');
      res.status(200).send('Usuario guardado con éxito.');
    }
  });
	});
});

app.listen(port, () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
});

