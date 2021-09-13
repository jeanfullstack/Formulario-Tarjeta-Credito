const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
      logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion = document.querySelector('#tarjeta .mes'),
      yearExpiracion = document.querySelector('#tarjeta .year'),
      ccv = document.querySelector('#tarjeta .ccv');

//VOLTEAMOS LA TARJETA PARA MOSTRAR EL FRENTE
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');

    }
}


// * ROTACION DE LA TARJETA
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});


// * BOTON DE ABRIR FORMULARIO
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');   /* Gira el boton */
    formulario.classList.toggle('active');

});



// * SELECT DEL MES GENERADO DINAMICAMENTE
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);

}



// * SELECT DEL AÑO GENERADO DINAMICAMENTE
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <=  yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}



// * INPUT NUMERO DE TARJETA
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //Eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g, '')
    //Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //Elimina el ultimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';

    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    //VOLTEAMOS LA TARJETA PARA QUE EL USUARIO VEA EL FRENTE
    mostrarFrente();
});


// * INPUT NOMBRE DE TARJETA
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, ''); /* Elimina los numeros */
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});


// * SELECT MES
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;

    mostrarFrente();
});


// * SELECT AÑO
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);

    mostrarFrente();
});


// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    //Eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letras
    .replace(/\D/g, '');


    ccv.textContent = formulario.inputCCV.value;

});








