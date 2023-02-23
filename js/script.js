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
