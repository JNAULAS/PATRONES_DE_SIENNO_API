// Funcion para crear la vista
function createView() {
    // Creamos componentes visuales
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let inputCedula = document.createElement('INPUT')
    let inputNombre = document.createElement('INPUT')
    let labelCedula = document.createElement('label');
    let labelNombre = document.createElement('label');

    // Creamos el conponente a ser  ingresado dentro del div
    let textH1 = document.createTextNode('FORMULARIO PERSONAS')
    h1.appendChild(textH1)
    inputCedula.setAttribute('type', 'text')
    inputNombre.setAttribute('type', 'text')
    // Agregamos datos del label
    labelCedula.textContent = 'Cedula: ';
    labelNombre.textContent = 'Nombre: ';
    //Agregamos componentes creados al div
    div.appendChild(h1)

    div.appendChild(labelCedula)
    div.appendChild(inputCedula)

    div.appendChild(labelNombre)
    div.appendChild(inputNombre)
    // Agregamos componentes al root en este caso el componente principal
    //Creamos variable del componente roor para agregar los componentes visuales
    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild(div)

}
//  Funcion para llamar a la vista
createView()
