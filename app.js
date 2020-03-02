const url_1 = 'https://jsonplaceholder.typicode.com/users/1/'
const url_2 = 'https://jsonplaceholder.typicode.com/users/2/'
const url_3 = 'https://jsonplaceholder.typicode.com/users/3/'
const url_4 = 'https://jsonplaceholder.typicode.com/users/4/'
const url_5 = 'https://jsonplaceholder.typicode.com/users/5/'
const url_6 = 'https://jsonplaceholder.typicode.com/users/6/'
const url_7 = 'https://jsonplaceholder.typicode.com/users/7/'
const url_8 = 'https://jsonplaceholder.typicode.com/users/8/'
const url_9 = 'https://jsonplaceholder.typicode.com/users/9/'
const url_10 = 'https://jsonplaceholder.typicode.com/users/10/'

function trabajadores(){
  var momentanea = document.getElementById("formulario").value;
  var numero_trabajador = parseInt(momentanea);

  if (numero_trabajador == 1) {
    trabajador = url_1;
  } else if (numero_trabajador == 2) {
    trabajador = url_2;
  } else if (numero_trabajador == 3) {
    trabajador = url_3;
  } else if (numero_trabajador == 4) {
    trabajador = url_4;
  } else if (numero_trabajador == 5) {
    trabajador = url_5;
  } else if (numero_trabajador == 6) {
    trabajador = url_6;
  } else if (numero_trabajador == 7) {
    trabajador = url_7;
  } else if (numero_trabajador == 8) {
    trabajador = url_8;
  } else if (numero_trabajador == 9) {
    trabajador = url_9;
  } else if (numero_trabajador == 10) {
    trabajador = url_10;
  } else {
    alert ("Ingresa un numero del 1 al 10")
  }

  fetch (trabajador)
  .then(response => response.json())
  .then(data => {

    let element = document.getElementById('usuario')
    element.innerHTML = `
      <p>Id: ${data.id}</p>
      <p>Nombre: ${data.name}</p>
      <p>Nombre de usuario: ${data.username}</p>
      <p>Correo: ${data.email}</p>
      <p>Dirección: ${data.address.street} ${data.address.suite} ${data.address.city} ${data.address.zipcode}</p>
      <p>Localización: latitud ${data.address.geo.lat} longitud ${data.address.geo.lng}</p>
      <p>Teléfono: ${data.phone}</p>
      <p>Sitio web: ${data.website}</p>
      <p>Compañia: ${data.company.name}</p>
      <p>Lema de la compañia: ${data.company.catchPhrase}</p>
      <p>Giro de la compañia: ${data.company.bs}</p>
    `;

    console.log(data);
  })
}
