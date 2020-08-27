//validate register form

function registerValidation(object) {
  if (object.username == "") {
    return "Ingresar  'Nombre de Usuario'";
  }
  if (object.email == "") {
    return "Ingresar un correo electronico";
  }
  if (object.password == "") {
    return "Ingresar password";
  }
  if (object.type_user != "admin" && object.type_user != "organizer") {
    return "Seleccionar 'tipo de usuario'";
  }
}

export default registerValidation;
