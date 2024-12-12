/* 
//* Dispensador de golosionas online
//* El programa deberá leer la moneda que ingrese el usuario, posteriormente se debe elegir en el siguiente menu 4 opciones:

//* 1. Gaseosa: S/4
//* 2. Papitas: S/2
//* 3. Oreo: S/1
//* 4. Chupetin: S/3

//* El programa deberá escribir el vuelto que elegiste de caso contrario deberás decirle que no cuenta con saldo suficiente.
*/

function dispensador() {
    let dinero = prompt("Ingresa la cantidad de monedas que tienes por ejemplo S/ 100.00");
    let listaMenu = "Elige una opción:\n"; // Mostrar la lista de opciones de golosinas
    listaMenu += "1. Gaseosa: S/4\n";
    listaMenu += "2. Papitas: S/2\n";
    listaMenu += "3. Oreo: S/1\n";
    listaMenu += "4. Chupetin: S/3\n";
    

    let valorLista = parseInt(prompt(listaMenu)); // Variable para almacenar la opción elegida en el menu
    let precio; // Variable para almacenar el precio según la opción de la lista elegida
    switch(valorLista) {
        case 1:
            precio = 4;
            break;
        case 2:
            precio = 2;
            break;
        case 3:
            precio = 1;
            break;
        case 4:
            precio = 3;
            break;
        default:
            alert("Opcion invalida.");
            return;
    }

    let vuelto;// Variable para la operacion
    if (dinero >= precio) {
        vuelto = dinero - precio;
        alert(`¡Compra exitosa! El vuelto es S/. ${vuelto.toFixed(2)}`);
    } else {
        alert("No tiene suficiente saldo para realizar la compra.");
    }
}

// Llamar la función dispensador
dispensador();


