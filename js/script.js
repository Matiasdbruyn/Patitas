let savedpin = "123456";
function login() {
  let ingresar = false;
  for (let i = 2; i >= 0; i--) {
    let userping = prompt(
      "Ingresa la clave por favor. Tenes " + (i + 1) + " intentos"
    );
    if (userping === savedpin) {
      alert("Bienvenido/a");
      ingresar = true;
      break;
    } else {
      alert("Error. Te quedan " + i + " intentos");
    }
  }
  return ingresar;
}

if (login()) {
  let opcion = prompt(
    "Elegi una opcion: \n1- Collares. \n2- Alimentos. \n3- Juguetes. \n4- Presiona M para salir "
  );
  while (opcion != "M" && opcion != "m") {
    switch (opcion) {
      case "1":
        let collar = prompt(
          "Tenemos 3 collares, uno Rojo otro Azul y uno Verde"
        );

        if (collar == "Rojo") {
          alert("Sale $100");
        } else if (collar == "Azul") {
          alert("Sale $500");
        } else if (collar == "Verde") {
          alert("Sale $2000");
        } else {
          alert("Disculpa, no tenemos de ese color por ahora");
        }
        break;
      case "2":
        let comida = prompt(
          "Tenemos 3 alimentos, uno Pedigree otro Pro Plan y uno Nutrique"
        );

        if (comida == "Pedigree") {
          alert("Sale $800");
        } else if (comida == "Pro Plan") {
          alert("Sale $1000");
        } else if (comida == "Nutrique") {
          alert("Sale $5000");
        } else {
          alert("Disculpa, no tenemos ese alimento");
        }
        break;
      case "3":
        let juego = prompt(
          "Tenemos 3 juguetes, una Pelota, una Soga y un Peluche"
        );

        if (juego == "Pelota") {
          alert("Sale $50");
        } else if (juego == "Soga") {
          alert("Sale $900");
        } else if (juego == "Peluche") {
          alert("Sale $2000");
        } else {
          alert("Disculpa, no tenemos ese juguete");
        }
        break;
      default:
        alert("Opcion incorrecta");
        break;
    }
    opcion = prompt(
      "Elegi una opcion: \n1- Collares. \n2- Alimentos. \n3- Juguetes. \n4- Presiona M para salir "
    );
  }
} else {
  alert("Cuenta bloqueada");
}

let mensaje =
  "estos son algunos alimentos, juguetes y collares que tenemos a la venta";

console.log(mensaje.toUpperCase());

function comida(marca, sabor, peso, estatura) {
  this.marca = marca;
  this.sabor = sabor;
  this.peso = peso;
  this.estatura = estatura;
}

const comida1 = new comida(
  "Pro Plan",
  "Carne de Pollo",
  "15kg",
  "Perro mediano y grande"
);
const comida2 = new comida(
  "Pedigree",
  "Carne y vegetales",
  "21kg",
  "Perro adulto"
);
const comida3 = new comida("Nutrique", "Pavo", "7,5kg", "Perro Adulto Joven");

console.log(comida1);
console.log(comida2);
console.log(comida3);

function jueguetes(tipo, color, estilo) {
  this.tipo = tipo;
  this.color = color;
  this.estilo = estilo;
}

const juguetes1 = new jueguetes("Pelota", "Azul", "Simple");
const juguetes2 = new jueguetes("Soga", "Rojo, Verde y Blanco", "Anti-estres");
const juguetes3 = new jueguetes("Peluche", "Azul y Rojo", "Spiderman");

console.log(juguetes1);
console.log(juguetes2);
console.log(juguetes3);

function collares(marca, color, talle) {
  this.marca = marca;
  this.color = color;
  this.talle = talle;
}

const collar1 = new collares("Zeus", "Azul", "S");
const collar2 = new collares("Hund", "Blanco y Negro", "S");
const collar3 = new collares("Hiking", "Camuflado", "M");

console.log(collar1);
console.log(collar2);
console.log(collar3);

let mensaje2 = "mas adelante tendremos:";

console.log(mensaje2.toUpperCase());

const productos = ["Huesos", "Colchones", "Pastillas", "Baño", "Estetica"];

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

let opinionCliente = prompt(
  "Que otro producto/servicio queres que ofrescamos? Si no deseas agregar nada ingrese 0"
);

productos.push(opinionCliente);
console.log(productos);

const precios = [
  { nombre: "Huesos", precio: "$1000" },
  { nombre: "Colchones", precio: "$2500" },
  { nombre: "Pastillas", precio: "$500" },
  { nombre: "Baño", precio: "$1500" },
  { nombre: "Estetica", precio: "$3000" },
];

let preciosBuscar = prompt(
  "Elegi algunos de los proximos productos para consultar precio. Escribilo tal cual aparece con la mayuscula o la primera letra en mayuscula"
);
const precioEncontrado = precios.find(
  (precio) => precio.nombre == preciosBuscar
);
console.log(precioEncontrado);

const otroFiltro = precios.filter((precio) =>
  precio.nombre.includes(preciosBuscar)
);

console.log(otroFiltro);
